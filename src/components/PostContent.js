import React from "react"
import styles from "./PostContent.module.css"

const PostContent = props => {
  const { title, content, category, publishedAt } = props.post
  return (
    <article>
      <div className={styles.container}>
        <div className={styles.headContent}>
          <p className={styles.category}>{category.name}</p>
          <div className={styles.title}>{title}</div>
          <time className={styles.publishedAt}>{publishedAt}</time>
        </div>
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}

export default PostContent
