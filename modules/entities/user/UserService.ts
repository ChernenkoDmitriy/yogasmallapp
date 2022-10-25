// import { IRestPost, requester } from "../../../libs/requester";
// import { ILinks, links } from "../../../src/utils/Links";
import { IUser } from "./IUser";

interface IDefaultUser extends IUser {
    password: string;
}

class UserService {
    constructor(
        // private requestor: IRestPost,
        // private links: ILinks,
    ) { }

    authorizeStaticUsers = async (login: string, password: string): Promise<{ user: IUser | null, error: string | null }> => {
        try {
            const users = require('../../../__mocks__/users.json');
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