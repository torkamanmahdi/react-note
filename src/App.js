import React, { Component } from 'react';
import Notes from './Components/Notes';

class App extends Component {
	state = {
		notes: [],
		showNotes: false,
		newNote: ''
	}
	handleShowNotes = () => {
		this.setState({showNotes: !this.state.showNotes})
	}
	handleDelete = (id) => {
		const notes = this.state.notes.filter(note => note.id !== id)
		this.setState({notes})
	}
	handleNoteChange = (event, id) => {
		const noteIndex = this.state.notes.findIndex(note => note.id === id)
		const notes = [...this.state.notes]
		notes[noteIndex].text = event.target.value
		this.setState({notes})
	}
	setNote = (event) => {
		this.setState({newNote: event.target.value})
	}
	handleNewNote = () => {
		const notes = [...this.state.notes]
		const note = {
			id: Math.floor(Math.random() * 100),
			text: this.state.newNote
		}
		notes.push(note)
		this.setState({notes, newNote: ''})
	}
	render() {
		let showingNotes = null
		if(this.state.showNotes) {
			showingNotes = <Notes notes={this.state.notes} onDelete={this.handleDelete} noteChange={this.handleNoteChange} />
		}
		return (
				<>
					<h1>Note App</h1>
					<input type="text" onChange={this.setNote} value={this.state.newNote} />
					<button onClick={this.handleNewNote}>Add Note</button>
					<button onClick={this.handleShowNotes}>Show Notes</button>
					{showingNotes}
				</>
			);
	}
}
export default App;