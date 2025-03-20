import { ROLE } from '../constants';
import { sessions } from '../sessions';
import { updateUser } from '../api';
export const updateUserRole = async (userSession, userId, newUserRoleId) => {
	const accessRoles = [ROLE.ADMIN];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Access denied',
			res: null,
		};
	}
	console.log('userSession', userSession);
	updateUser(userId, newUserRoleId);
	return {
		error: null,
		res: true,
	};
};
