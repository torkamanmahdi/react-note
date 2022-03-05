import React, { Component } from 'react';
import Note from './Note.jsx';

class Notes extends Component {
	state = {  } 
	render() { 
		return (
			<ul>
				{this.props.notes.map(note => <Note key={note.id} note={note} deleteNote={() => this.props.onDelete(note.id)} />)}
			</ul>
		);
	}
}
export default Notes;