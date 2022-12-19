import { useEffect } from "react";
import { appStateModel } from "../../entities/appState/AppStateModel";
import { connectionLinksModel } from "../../entities/connectionLinks/ConnectionLinksModel";
import { bannersUseCase } from "../useCases/bannersUseCase";
import { connectionLinksUseCase } from "../useCases/connectionLinksUseCase";
import { meditationsUseCase } from "../useCases/meditationsUseCase";
import { practiceUseCase } from "../useCases/practiceUseCase";

export const useHome = () => {

    useEffect(() => {
        appStateModel.isLoading = true;
        bannersUseCase();
        meditationsUseCase();
        practiceUseCase();
        connectionLinksUseCase();
        appStateModel.isLoading = false;
    }, []);
    
    return {  };
}