import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateUniversity from './pages/CreateUniversity.component';
import HomePage from './pages/HomePage.component';
import EditPage from './pages/EditPage.component';

function App() {
	return (
		<Router>
			<ToastContainer />
			<Route path="/" exact component={HomePage} />
			<Route path="/edit/:id" component={EditPage} />
			<Route path="/register" component={CreateUniversity} />
		</Router>
	);
}

export default App;
