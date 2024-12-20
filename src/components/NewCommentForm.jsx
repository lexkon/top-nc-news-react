import { useState } from "react"
import { postArticleComment } from "../../api"
import "../styles/NewCommentForm.css"

export const NewCommentForm = ({ article_id, addComment }) => {
    const [commentBody, setCommentBody] = useState("")

    const handleSubmit = async () => {
        const newComment = {
            username: "grumpy19",
            body: commentBody
        }

        try {
            const postedComment = await postArticleComment(article_id, newComment)
            addComment(postedComment)
            setCommentBody("")
        } catch (error) {
            alert("Something went wrong. Try again")
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        await handleSubmit()
    }
    const onChange = (event) => {
        setCommentBody(event.target.value)
    }

    const onKeyDown = (event) => {
        if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
            event.preventDefault()
            handleSubmit()
        }
    }

    return (
        <div className="new-comment-form">
            <form onSubmit={onSubmit} id="comment-form">
                <textarea
                    name="comment-field"
                    id="comment-field"
                    value={commentBody}
                    onChange={onChange}
                    onKeyDown={onKeyDown}>
                </textarea>
                <button
                    type="submit" id="comment-btn"
                    disabled={!commentBody.trim()}>Post</button>
            </form>
        </div>
    )
}