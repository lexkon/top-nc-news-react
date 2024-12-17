import { useEffect, useState } from "react";
import { fetchComments } from "../../api";
import '../styles/CommentsView.css'

export const CommentsView = ({ article_id }) => {
    const [comments, setComments] = useState([])

    const fetchAllComments = async () => {
        try {
            const comments = await fetchComments(article_id)
            setComments(comments)
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        fetchAllComments()
    }, [article_id])

    return (
        <section className='comments-view' >
            <hr style={{ maxWidth: '250px' }} />
            <h2>Comments</h2>
            <div className="comments-list">
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <div className='comment-area' key={index}>
                            <p className="comment-body">{comment.body}</p>
                            <p className="comment-author"><b><i>{comment.author}</i></b></p>
                        </div>
                    ))
                ) : (
                    <h3>No comments on this post yet</h3>
                )}
            </div>
        </section>
    )
}