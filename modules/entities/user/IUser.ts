export interface IUser {
    id: string;
    login: string;
    name: string;
    token: {
        type: 'bearer';
        access: string;
    };
}