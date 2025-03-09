import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Authorization, Registration } from './components/pages';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
const Content = styled.div`
	padding: 120px 0;
`;

//const Header = () => <div>HEADER</div>;
const AppColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	margin: 0 auto;
	height: 1080px;
	background-color: #bbb;
`;

export const Blog = () => {
	return (
		<AppColumn>
			<Header />
			<Content>
				<Routes>
					<Route path="/" element={<div>MainPage</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<div>Users</div>} />
					<Route path="/post:postId" element={<div>Post</div>} />
					<Route path="/post" element={<div>NewPost</div>} />
					<Route path="*" element={<div>Error</div>} />
				</Routes>
			</Content>
			<Footer />
		</AppColumn>
	);
};
