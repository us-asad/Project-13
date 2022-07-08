import { CategoryWrapper } from 'containers';
import { categories } from 'data/main';
import React from 'react'

export default function Category({ category }) {
  return <CategoryWrapper categories={category.subcategories} boxLink={`files/${category.slug}`} />;
}

export const getServerSideProps = (context) => {
  const category = categories.find(({slug}) => slug === context.params.category_slug);

  return {
    props: { category }
  }
}
