import { H2 } from '../../../components';
import { UserRow } from './components';
import { TableRow } from './components/table-row';
import { Content } from '../../../components';
import { useServerRequest } from '../../../hooks';
import { useEffect, useState } from 'react';
//import { ROLE } from '../../../../bff/constants';
import styled from 'styled-components';
const UsersContainer = ({ className }) => {
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState(null);
	const requestServer = useServerRequest();
	const [showUpdateUserList, setshowUpdateUserList] = useState(false);

	useEffect(() => {
		Promise.all([requestServer('fetchUsers'), requestServer('fetchRoles')]).then(
			([usersRes, rolesRes]) => {
				if (usersRes.error || rolesRes.error) {
					setErrorMessage(usersRes.error || rolesRes.error);
					return;
				}
				console.log(usersRes, rolesRes);
				console.log('error', usersRes.error || rolesRes.error);
				setUsers(usersRes.res);
				setRoles(rolesRes.res);
			},
		);
	}, [requestServer, setshowUpdateUserList]);
	const onUserRemove = (userId) => {
		requestServer('removeUser', userId).then(() => {
			setshowUpdateUserList(!showUpdateUserList);
		});
	};

	return (
		<div className={className}>
			<Content error={errorMessage}>
				<H2>Users</H2>
				<div>
					<TableRow>
						<div className="login-column">Login</div>
						<div className="registered-at-column">RegDate</div>
						<div className="role-column">Role</div>
					</TableRow>
					{users.map(({ id, login, registeredAt, roleId }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registeredAt={registeredAt}
							roleId={roleId}
							roles={roles}
							onUserRemove={() => onUserRemove(id)}
						/>
					))}
				</div>
			</Content>
		</div>
	);
};
export const Users = styled(UsersContainer)`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 570px;
	margin: 0 auto;
	background-color: #fff;
`;
