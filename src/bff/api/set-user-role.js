export const updateUser = (userId, roleId) =>
	fetch(`http://localhost:3005/${userId}`, {
		method: 'PATCH',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			role_id: roleId,
		}),
	}).then((updatedUser) => updatedUser.json());
