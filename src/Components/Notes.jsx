import React from 'react';
import Note from './Note.jsx';

const Notes = ({ notes, onDelete, noteChange }) => {
	return (
		<ul>
			{notes.map(
				note => <Note key={note.id}
					note={note} deleteNote={() => onDelete(note.id)}
					changed={(event) => noteChange(event, note.id)} />
			)}
		</ul>
	)
}

export default Notes