import { useEffect } from "react";
import { bannersUseCase } from "../useCases/bannersUseCase";

export const useHome = () => {

    useEffect(() => {
        bannersUseCase();
    }, []);

    return {  };
}