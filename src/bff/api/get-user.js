import { getUsers } from './get-users';
export const getUser = async (loginToFind) => {
	const users = await getUsers();
	console.log('users', users);
	return users.find(({ login }) => login === loginToFind);
};
