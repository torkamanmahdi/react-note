import React, { Component } from 'react';

class Note extends Component {
	state = {  }
	render() { 
		const { id, text } = this.props.note
		return (
			<li>{id}: {text} <button onClick={this.props.deleteNote}>X</button></li>
		);
	}
}
export default Note;