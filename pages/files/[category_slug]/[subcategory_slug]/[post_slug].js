import { PageWrapper, PostsContainer } from 'containers'
import { categories, post } from 'data/main'
import Link from 'next/link';
import React from 'react'
import { BiChevronRight } from 'react-icons/bi';
import { MdDateRange } from 'react-icons/md';
import { PageTitle } from 'subcomponents';

export default function Post({ relatedPosts, categoryLink }) {
  const { file, title, date, content } = post;

  return (
    <PageWrapper title={title}>
      {file.type === "image"
        ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={file.url}
            alt={title}
            className="w-full"
          />
        ) : file.type === "video" && (
          <video
            src={file.url}
            alt={title}
            controls
            className="w-full h-[400px]"
          >Kechirasiz sizngiz brauzerining ushbu fileni qo`llab quvatlamaydi, Iltimos boshqa brauzer orqali kiring</video>
        )
      }
      <span className='my-4 flex items-center'>
        <MdDateRange className='text-blue' />
        <span className='ml-1 text-[12px]'>{date}</span>
      </span>
      <p className='text-[15px] tracking-wide'>{content}</p>
      <div className='mt-16 mb-16'>
        <PageTitle title="Tavsiya Etiladi" />
        <PostsContainer posts={relatedPosts} />
        <Link href={categoryLink}>
          <a className='flex w-fit mx-auto justify-center items-center text-[14px] hover:text-blue duration-200'>
            <span>Barchasini ko`rish</span>
            <BiChevronRight className='text-[19px]' />
          </a>
        </Link>
      </div>
    </PageWrapper>
  );
}

export const getServerSideProps = context => {
  const { category_slug, subcategory_slug } = context.params;

  const relatedPosts = categories
    .find(({ slug }) => slug === category_slug)
    .subcategories
    .find(({ slug }) => slug === subcategory_slug)
    .posts.slice(0, 5);

  return {
    props: { relatedPosts, categoryLink: `/files/${category_slug}/${subcategory_slug}` }
  }
}
