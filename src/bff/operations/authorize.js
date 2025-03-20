import { sessions } from '../sessions';
import { getUser } from '../api/get-user';
export const authorize = async (authLogin, authPassword) => {
	const user = await getUser(authLogin);
	if (!user) {
		return {
			error: 'User not found',
			res: null,
		};
	}
	// const {id, login, password, registeredAt, roleId} = user;
	if (authPassword !== user.password) {
		return {
			error: 'User not found',
			res: null,
		};
	}

	return {
		error: null,
		res: {
			id: user.id,
			login: user.login,
			roleId: user.role_id,
			session: sessions.create(user),
		},
	};
};
