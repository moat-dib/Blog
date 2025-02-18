import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../Icon/icon';
import styles from '../header.module.css';
import styled from 'styled-components';

const RightAlligned = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 10px;
`;
const StyledLink = styled(Link)`
	display: flex;
	justify-content: center;
	padding-top: 5px;
	font-size: 18px;
	width: 100px;
	height: 32px;

	background-color: #eee;

	border: 1px solid black;
`;
const StyledButton = styled.div`
	&:hover {
		cursor: pointer;
	}
`;
const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	return (
		<div id={className}>
			<RightAlligned>
				<StyledLink to="/login">Login</StyledLink>
			</RightAlligned>
			<RightAlligned>
				<StyledButton onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0" />
				</StyledButton>
				<Link to="/post">
					<Icon id="fa-file-text-o" margin="10px 0 0 10px" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" margin="10px 0 0 17px" />{' '}
				</Link>
			</RightAlligned>
		</div>
	);
};
export const ControlPanel = styled(ControlPanelContainer)``;
