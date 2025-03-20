import {
	authorize,
	logout,
	register,
	fetchRoles,
	fetchUsers,
	updateUserRole,
	removeUser,
} from './operations';

export const server = {
	authorize,
	fetchUsers,
	fetchRoles,
	logout,
	register,
	updateUserRole,
	removeUser,
};
