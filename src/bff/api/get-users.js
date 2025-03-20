import { transformUser } from '../transformers';

export const getUsers = () =>
	fetch('http://localhost:3005/users')
		.then((loadUsers) => loadUsers.json())
		.then((loadedUsers) => loadedUsers && loadedUsers.map(transformUser));
