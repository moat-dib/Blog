import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from '../../Icon/icon';
import { Button } from '../../button/button';
import { ROLE } from '../../../bff/constants';
import styled from 'styled-components';
import { logout } from '../../../actions';
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../selectors';

const RightAlligned = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: -5px;
	margin-left: 0;
	align-items: center;
`;

const StyledIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;
const StyledLogoutIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
	margin: 0 0 0 10px;
`;
const UserName = styled.div`
	display: flex;

	font-size: 18px;
	font-weight: bold;
`;
const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	console.log(roleId);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);
	return (
		<div id={className}>
			<RightAlligned>
				{roleId === ROLE.GUEST ? (
					<Button width="100px">
						<Link to="/login">Login</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>

						<StyledLogoutIcon onClick={() => dispatch(logout(session))}>
							<Icon id="fa-sign-out" />
						</StyledLogoutIcon>
					</>
				)}
			</RightAlligned>
			<RightAlligned>
				<StyledIcon onClick={() => navigate(-1)}>
					<Icon id="fa-backward" margin="10px 0 0 0" />
				</StyledIcon>
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
