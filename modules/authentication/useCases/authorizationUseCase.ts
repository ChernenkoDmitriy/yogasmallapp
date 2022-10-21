import { appStateModel } from "../../entities/appState/AppStateModel"
import { userModel } from "../../entities/user/UserModel";
import { userService } from "../../entities/user/UserService";

const checkEmptiness = (login: string, code: string) => {
    if (!login && !code) {
        return { error: 'Fill login and code inputs' };
    }
    if (!login && code) {
        return { error: 'Fill login input' };
    }
    if (login && !code) {
        return { error: 'Fill code input' };
    }
    return null;
}

const authorizeUser = async (login: string, code: string) => {
    appStateModel.isLoading = true;
    const result = await userService.authorize(login, code);
    userModel.user = result.user;
    appStateModel.isLoading = false;
    return { error: result.error }
}

export const authorizationUseCase = async (login: string, code: string): Promise<{ error: string | null }> => {
    try {
        const error = checkEmptiness(login, code);
        if (error) {
            return error;
        } else {
            const result = await authorizeUser(login, code);
            return result;
        }
    } catch (error: any) {
        console.warn('authorizationUseCase: ', error);
        appStateModel.isLoading = false;
        return { error: 'Request error' }
    }
}