import { CategoryWrapper } from 'containers'
import { categories } from 'data/main'
import React from 'react'

export default function Categories() {
  return <CategoryWrapper categories={categories} boxLink="files" />;
}
