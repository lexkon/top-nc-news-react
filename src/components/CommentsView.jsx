import { useEffect, useState } from "react";
import { fetchComments } from "../../api";
import { SkeletonCard } from './SkeletonCard'
import '../styles/CommentsView.css'

export const CommentsView = ({ article_id }) => {
    const [comments, setComments] = useState([])
    const [isLoading, setLoading] = useState(true)

    const fetchAllComments = async () => {
        try {
            setLoading(true)
            const comments = await fetchComments(article_id)
            setComments(comments)
        } catch (error) {
            return error
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchAllComments()
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