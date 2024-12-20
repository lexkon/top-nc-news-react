import { useEffect, useState } from "react";
import { getComments } from "../../api";
import { SkeletonCard } from './SkeletonCard'
import { NewCommentForm } from './NewCommentForm'
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

    const addComment = (newComment) => {
        if (comments.length === 0) {
            return setComments([newComment])
        }
        return setComments([newComment, ...comments])
    }

    useEffect(() => {
        getAllComments()
    }, [article_id])

    const renderComments = () => {
        if (isLoading) {
            return <SkeletonCard />
        }

        if (comments.length === 0) {
            return (
                <>
                    <h3>Be the first to comment</h3>
                    <NewCommentForm article_id={article_id} addComment={addComment} />
                </>
            )
        }

        return (
            <>
                <h3>Add your voice to the conversation</h3>
                <NewCommentForm article_id={article_id} addComment={addComment} />
                {
                    comments.map((comment, index) => (
                        <div className='comment-area' key={comment.id || index}>
                            <p className="comment-body">{comment.body}</p>
                            <p className="comment-author">
                                <b><i>{comment.author}</i></b>
                            </p>
                        </div>
                    ))
                }
            </>
        )
    }

    return (
        <section className='comments-view' >
            <hr style={{ maxWidth: '250px' }} />
            <h2>Comments</h2>
            <div className="comments-list">
                {renderComments()}
            </div>
        </section>
    )
}