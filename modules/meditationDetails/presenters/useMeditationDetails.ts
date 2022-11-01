import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback } from "react";
import { appStateModel } from "../../entities/appState/AppStateModel";
import { IMeditation } from "../../entities/meditation/IMeditation";
import { meditationModel } from "../../entities/meditation/MeditationModel";
import { useAvailability } from "../../../libs/hooks/useAvailability";

const DEFAULT_ITEM = {
    id: -1,
    accessCode: '',
    title: '',
    duration: undefined,
    durationMeasuring: 'minutes',
    lessonTitle: '',
    lessonContent: []
};

interface IRouteParams {
    item: IMeditation | null,
    prevScreen: string,
};

export const useMeditationDetails = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { item, prevScreen } = useRoute().params as IRouteParams;
    const { id, accessCode, title, duration, durationMeasuring, lessonTitle, lessonContent } = item || DEFAULT_ITEM;

    const { code, setCode, isAvailable, onGetAccess } = useAvailability(meditationModel, accessCode, id);

    const onGoBack = useCallback(() => {
        if (prevScreen) {
            navigation.navigate(prevScreen);
            appStateModel.isTabBar = true;
        } else if (navigation.canGoBack()) {
            navigation.goBack();
        };
    }, [prevScreen]);

    return {
        title, duration, durationMeasuring, lessonTitle, lessonContent,
        code, setCode,
        isAvailable,
        onGetAccess,
        onGoBack,
    };
}