import React  from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {
	PageChat,
	PageChatList,
	PageProfile,
} from './pages';


class App extends React.Component {
	render() {
		return (
			<Router>
				<Routes>
					<Route path='/' element={<PageChatList/>} ></Route>
					<Route path='/chat' element={<PageChat/>} ></Route>
					<Route path='/profile' element={<PageProfile/>} ></Route>
				</Routes>
			</Router>
		);
	}
}

export default App;

