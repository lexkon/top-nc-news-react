import { useEffect, useState } from "react";
import { getComments } from "../../api";
import { SkeletonCard } from './SkeletonCard'
import '../styles/CommentsView.css'

export const CommentsView = ({ article_id }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getAllComments = async () => {
        try {
            setIsLoading(true)
            const comments = await getComments(article_id)
            setComments(comments)
        } catch (error) {
            return error
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getAllComments()
    }, [article_id])

    const renderCommentContent = () => {
        if (isLoading) {
            return <SkeletonCard />
        }

        if (comments.length === 0) {
            return <h3>No comments on this post yet</h3>
        }

        return comments.map((comment, index) => (
            <div className='comment-area' key={comment.id || index}>
                <p className="comment-body">{comment.body}</p>
                <p className="comment-author">
                    <b><i>{comment.author}</i></b>
                </p>
            </div>
        ))
    }

    return (
        <section className='comments-view' >
            <hr style={{ maxWidth: '250px' }} />
            <h2>Comments</h2>
            <div className="comments-list">
                {renderCommentContent()}
            </div>
        </section>
    )
}