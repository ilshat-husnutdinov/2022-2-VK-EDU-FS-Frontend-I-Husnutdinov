import React, { useState, useEffect } from 'react';
import { PageChat } from './pages/PageChat';
import { PageChatList } from './pages/PageChatList';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			PageChatDisplay : 'flex',
			PageChatListDisplay : 'none'
		};
		this.ChangeDisplay = this.ChangeDisplay.bind(this);
	}

	ChangeDisplay() {
		this.state.PageChatDisplay === 'flex'
		? this.setState({PageChatDisplay : 'none', PageChatListDisplay : 'flex'})
		: this.setState({PageChatDisplay : 'flex', PageChatListDisplay : 'none'})
	}

	render() {
		return (
			<div>
				<PageChat ChangeDisplay={this.ChangeDisplay} PageChatDisplay={this.state.PageChatDisplay} ></PageChat>
				<PageChatList ChangeDisplay={this.ChangeDisplay} PageChatListDisplay={this.state.PageChatListDisplay}></PageChatList>
			</div>

		);
	}
}

export default App;

