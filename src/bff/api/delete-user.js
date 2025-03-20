export const deleteUser = (userId) =>
	fetch(`http://localhost:3005/${userId}`, {
		method: 'DELETE',
	});
