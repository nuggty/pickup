import * as React from 'react'
import styles from '../styles/components/Posts.module.css'

type PostsProps = {
    autor: String,
    data: String,
    post: String
}
export const Posts = ({ post, data, autor }: PostsProps) => {
    return (
        <div
            className={styles.card}
        >
            <div className={styles.data}>
                <span>{data}</span>
            </div>
            <div className={styles.post}>
                <p>
                    {post}
                </p>
            </div>
            <div className={styles.autor}>
                <span>Autor: </span><span>@{autor}</span>
            </div>
        </div>
    )
}