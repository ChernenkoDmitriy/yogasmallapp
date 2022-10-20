import { IStorage, storage } from "../../../libs/storage";
import { MobXRepository } from "../../../src/repository/MobXRepository";
import { IUser } from "./IUser";

export interface IUserModel {
    user: IUser | null;
}

class UserModel implements IUserModel {
    private userRepository = new MobXRepository<IUser | null>(null);

    constructor(private storage: IStorage) {
        this.load();
    }

    private persistUser = (data: IUser | null) => {
        if (data) {
            this.storage.set('USER', data);
        } else {
            this.storage.remove('USER');
        }
    }

    private load = () => {
        this.storage.get('USER')
            .then(data => { data && this.userRepository.save(data) })
            .catch(error => console.warn('UserModel -> load: ', error));
    }

    get user() {
        return this.userRepository.data || null;
    }

    set user(data: IUser | null) {
        this.userRepository.save(data);
        this.persistUser(data);
    }

    clear = () => {
        this.user = null;
    }

}

export const userModel = new UserModel(storage);
