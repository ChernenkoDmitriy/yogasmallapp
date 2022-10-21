import { useCallback, useState } from "react";
import { authorizationUseCase } from "../useCases/authorizationUseCase";

export const useAuthorization = () => {
    const [login, setLogin] = useState('');
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);

    const onAuthorization = useCallback(async () => {
        const user = await authorizationUseCase(login, code);
        if (!user) {
            setError(true);
        }
    }, [login, code]);

    const onChangeLogin = useCallback((value: string) => {
        setLogin(value);
    }, []);

    const onChangeCode = useCallback((value: string) => {
        setCode(value);
    }, []);

    return { login, onChangeLogin, code, onChangeCode, error, onAuthorization };
}