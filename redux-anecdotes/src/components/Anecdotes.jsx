import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { message } from "../reducers/messageReducer";

import PropTypes from "prop-types";

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <div>
      <div className="content">{anecdote.content}</div>
      <div className="likes">
        👍 <span className="count">{anecdote.votes}</span>
        <br />
        <button className="btn" onClick={handleVote}>
          Vote
        </button>
      </div>
      <hr />
    </div>
  );
};

Anecdote.propTypes = {
  anecdote: PropTypes.object.isRequired,
  handleVote: PropTypes.func.isRequired,
};

export default function Anecdotes() {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    return anecdotes.filter((a) => a.content.toLowerCase().includes(filter));
  });

  const handleVote = async (data) => {
    dispatch(vote({ ...data, votes: data.votes + 1 }));
    dispatch(message(`You voted for ${data.content}`, 5));
  };

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleVote={() => handleVote(anecdote)}
        />
      ))}
    </div>
  );
}
