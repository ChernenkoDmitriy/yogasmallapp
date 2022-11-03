import { IUser } from "./IUser";

interface IDefaultUser extends IUser {
    password: string;
}

class UserService {
    constructor(
    ) { }

    authorizeStaticUsers = async (login: string, password: string): Promise<{ user: IUser | null, error: string | null }> => {
        try {
            const response = await fetch('https://ta-samaya.github.io/TA.SAMAYA-DATA/files/users.json');
            const users = await response.json();
            const result = this.processingStaticUsers(users, login, password);
            if (!result) {
                return { user: null, error: 'incorrectLoginCode' };
            } else {
                return { user: result, error: null };
            }
        } catch (error) {
            console.warn('UserService -> authorizeStaticUsers: ', error);
            return { user: null, error: 'requestError' };
        }
    }

    private processingStaticUsers = (users: { data: IDefaultUser[] }, login: string, password: string): IUser | null => {
        const currentUser = users.data.find(item => item.login === login && item.password === password);
        if (currentUser) {
            return { id: currentUser.id, login: currentUser.login, name: currentUser.name };
        } else {
            return null;
        }
    }

}

export const userService = new UserService();