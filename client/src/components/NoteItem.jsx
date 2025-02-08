import PropTypes from "prop-types";
import "../componentCSS/NoteItem.css";

const NoteItem = (props) => {
    const { note, loading, handleNoteUpdate, handleNoteDelete } = props;

    if (loading) {
        return <div className="noteItemContainer">Loading...</div>;
    }

    return (
        <div className="noteItemContainer">
            <div className="note-header">
                <h4>{note.title}</h4>
                <i className="fa-regular fa-pen-to-square" onClick={() => handleNoteUpdate(note)}></i>
                <i className="fa-solid fa-trash-can" onClick={() => handleNoteDelete(note._id)}></i>
            </div>

            <p>{note.description}</p>
            <span className="note-tag">{note.tag}</span>
            <small className="note-date">
                {new Date(note.date).toLocaleDateString()}
            </small>
        </div>
    );
};

NoteItem.propTypes = {
    note: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tag: PropTypes.string,
        date: PropTypes.string.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
    handleNoteUpdate: PropTypes.func.isRequired,
    handleNoteDelete: PropTypes.func.isRequired,
};

export default NoteItem;
