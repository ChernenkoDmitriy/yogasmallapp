import { useEffect } from "react";
import { appStateModel } from "../../entities/appState/AppStateModel";
import { bannersUseCase } from "../useCases/bannersUseCase";
import { meditationsUseCase } from "../useCases/meditationsUseCase";

export const useHome = () => {

    useEffect(() => {
        appStateModel.isLoading = true;
        bannersUseCase();
        meditationsUseCase();
        appStateModel.isLoading = false;
    }, []);

    return {  };
}