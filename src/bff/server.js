import { getUser } from './get-user';
import { addUser } from './add-user';
import { sessions } from './sessions';
//import { createSession } from './create-session';
export const server = {
	async logout(session) {
		debugger;
		sessions.remove(session);
	},
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);
		if (!user) {
			return {
				error: 'User not found',
				res: null,
			};
		}
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
	},
	async register(regLogin, regPassword) {
		const existedUser = await getUser(regLogin);
		if (existedUser) {
			return {
				error: 'User already registered',
				res: null,
			};
		}

		const user = await addUser(regLogin, regPassword);
		debugger;
		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
