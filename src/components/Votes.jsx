import { useState } from 'react'
import { patchArticleVotes } from '../../api'

export const Votes = ({ votes, article_id }) => {
    const [optVotes, setOptVotes] = useState(votes)

    const handleVote = async (voteChange) => {
        setOptVotes((prevVotes) => prevVotes + voteChange)

        try {
            const updatedArticle = await patchArticleVotes(article_id, voteChange)
            setOptVotes(updatedArticle.votes)
        } catch (error) {
            setOptVotes(votes)
        }
    }

    return (
        <div className="votes-container">
            <button id="upvote" onClick={() => handleVote(1)}> + </button>
            <p>{optVotes} upvotes</p>
            <button id="downvote" onClick={() => handleVote(-1)}> - </button>
        </div>
    )
}