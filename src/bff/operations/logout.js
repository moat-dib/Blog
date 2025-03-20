import { sessions } from '../sessions';
export const logout = async (userSession) => {
	debugger;
	sessions.remove(userSession);
};
