import React, { Component } from 'react';
import Notes from './Components/Notes';

class App extends Component {
	state = {
		notes: [
			{id: 1, text: 'Note 1'},
			{id: 2, text: 'Note 2'},
			{id: 3, text: 'Note 3'},
			{id: 4, text: 'Note 4'},
		],
		showNotes: false
	}
	handleShowNotes = () => {
		this.setState({showNotes: !this.state.showNotes})
	}
	handleDelete = (id) => {
		const notes = this.state.notes.filter(note => note.id !== id)
		this.setState({notes})
	}
	handleNoteChange = (event) => {}
	render() {
		let showingNotes = null
		if(this.state.showNotes) {
			showingNotes = <Notes notes={this.state.notes} onDelete={this.handleDelete} />
		}
		return (
				<>
					<h1>Note App</h1>
					<button onClick={this.handleShowNotes}>Show Notes</button>
					{showingNotes}
				</>
			);
	}
}
export default App;