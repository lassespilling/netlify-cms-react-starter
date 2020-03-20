import React from 'react'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/PageHeader'
import PostCategoriesNav from '../components/PostCategoriesNav'
import PostSection from '../components/PostSection'

import './Blog.css'

export default ({
  fields,
  posts = [],
  postCategories = [],
  showFeatured = true,
}) => {
  const { title, subtitle, featuredImage } = fields
  posts = _sortBy(posts, ['date']).reverse()

  return (
    <main className="Blog">
      <PageHeader
        large
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      ></PageHeader>
      {!!postCategories.length && (
        <PostCategoriesNav categories={postCategories} />
      )}

      {!!posts.length && <PostSection posts={posts} />}
    </main>
  )
}
