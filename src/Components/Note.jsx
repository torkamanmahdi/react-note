import React, { Component } from 'react';

class Note extends Component {
	state = {  }
	render() { 
		const { id, text } = this.props.note
		return (
			<li key={id}>{id} : {text}</li>
		);
	}
}
export default Note;