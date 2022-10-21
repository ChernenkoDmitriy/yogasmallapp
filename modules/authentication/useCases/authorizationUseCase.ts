import { appStateModel } from "../../entities/appState/AppStateModel"
import { IUser } from "../../entities/user/IUser";
import { userModel } from "../../entities/user/UserModel";

export const authorizationUseCase = async (login: string, code: string): Promise<IUser | null> => {
    try {
        appStateModel.isLoading = true;
        const user: IUser = {
            id: '0',
            login,
            name: 'Name',
        };
        userModel.user = user;
    } catch (error) {
        console.warn('authorizationUseCase: ', error);
        return null;
    } finally {
        appStateModel.isLoading = false;
        return userModel.user;
    }
}