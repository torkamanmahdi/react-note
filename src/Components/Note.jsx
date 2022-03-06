import React from 'react';

const Note = ({ note, deleteNote, changed }) => {
	return(
		<li>
			{note.id}: {note.text} 
			<button onClick={deleteNote}>X</button>
			<input type="text" onChange={changed} />
		</li>
	)
}

export default Note;