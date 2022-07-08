import PostCard from 'components/PostCard';
import { PageWrapper, PostsContainer } from 'containers';
import { categories } from 'data/main';
import React from 'react'

export default function Category({ posts }) {
  return (
    <PageWrapper title="Yuklamalar">
      <div className='mb-16'>
        <PostsContainer posts={posts} />
      </div>
    </PageWrapper>
  );
}

export const getServerSideProps = context => {
  const posts = categories
    .find(({ slug }) => slug === context.params.category_slug)
    .subcategories
    .find(({ slug }) => slug === context.params.subcategory_slug)
    .posts;

  return {
    props: { posts }
  }
}
