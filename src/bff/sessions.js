export const sessions = {
	list: {},

	remove(hash) {
		delete this.list[hash];
	},
	create(user) {
		const hash = Math.random().toFixed(50);
		this.list[hash] = user;
		return hash;
	},
	access(hash, accessRoles) {
		const user = this.list[hash];
		console.log(user);
		debugger;
		return !!user && accessRoles.includes(user.role_id);
	},
};
