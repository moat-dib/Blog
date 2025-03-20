//import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { TableRow } from './table-row';
import { useState } from 'react';
import { useServerRequest } from '../../../../hooks';

const UserRowContainer = ({
	className,
	id,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initiaRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setselectedRoleId] = useState(userRoleId);
	const requestServer = useServerRequest();

	const OnRoleChanged = (target) => {
		setselectedRoleId(Number(target.value));
	};

	const onUserRoleSave = (userId, newUserRoleId) => {
		requestServer('updateUserRole', userId, newUserRoleId).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};
	const Column = styled.div`
		display: flex;
	`;
	const isSaveButtonDisabled = selectedRoleId === initiaRoleId;
	console.log('roles', roles);
	return (
		<div className={className}>
			<TableRow>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<Column className="role-column">
					<select value={userRoleId} onChange={OnRoleChanged}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>

					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						disabled={isSaveButtonDisabled}
						onClick={onUserRoleSave(id, selectedRoleId)}
					/>
				</Column>
			</TableRow>
			<Icon id="fa-trash-o" margin="0 0 0 10px" onClick={onUserRemove} />
		</div>
	);
};
export const UserRow = styled(UserRowContainer)``;
