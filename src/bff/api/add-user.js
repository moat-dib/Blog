import { generateDate } from '../utils/generate-date';
export const addUser = (LoginToAdd, passwordToAdd) =>
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			login: LoginToAdd,
			password: passwordToAdd,
			registered_at: generateDate(),
			role_id: 0,
		}),
	}).then((ceratedUser) => ceratedUser.json());
