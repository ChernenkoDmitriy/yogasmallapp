import { useEffect } from "react";
import { appStateModel } from "../../entities/appState/AppStateModel";
import { bannersUseCase } from "../useCases/bannersUseCase";
import { meditationsUseCase } from "../useCases/meditationsUseCase";
import { practiceUseCase } from "../useCases/practiceUseCase";

export const useHome = () => {

    useEffect(() => {
        appStateModel.isLoading = true;
        bannersUseCase();
        meditationsUseCase();
        practiceUseCase();
        appStateModel.isLoading = false;
    }, []);

    return {  };
}