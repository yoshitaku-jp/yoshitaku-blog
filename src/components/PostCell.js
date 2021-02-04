import React from "react"
import { Link } from "gatsby"
import styles from "./PostCell.module.css"

const PostCell = props => {
  const { title, content, category, publishedAtView, slug } = props.post
  const plainContent = content.replace(/(<([^>]+)>)/gi, "")
  return (
    <Link to={`/posts/${slug}`} className={styles.container}>
      <div className={styles.content}>
        <p className={styles.category}>{category.name}</p>
        <div className={styles.title}>{title}</div>
        <p className={styles.description}>{plainContent}</p>
        <time className={styles.publishedAtView}>{publishedAtView}</time>
      </div>
    </Link>
  )
}

export default PostCell
