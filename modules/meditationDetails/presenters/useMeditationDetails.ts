import { ParamListBase, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback } from "react";
import { IMeditation } from "../../entities/meditation/IMeditation";
import { meditationModel } from "../../entities/meditation/MeditationModel";
import { useAvailability } from "../../../libs/hooks/useAvailability";
import { IRouteParams } from "../../../src/navigation/stackNavigators/meditationStackNavigator";

const DEFAULT_ITEM: IMeditation = {
    id: -1,
    accessCode: [],
    title: '',
    duration: 0,
    durationMeasuring: 'minutes',
    lessonTitle: '',
    lessonContent: [],
    media: { uri: '', type: 'audio' },
    description: "",
    availableDays: 0,
    startDate: "2022-11-09",
    isAvailable: false,
    banner: ''
};

export const useMeditationDetails = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    const { item, prevScreen } = useRoute().params as IRouteParams;
    const { id, accessCode, lessonTitle, lessonContent } = item || DEFAULT_ITEM;

    const { code, setCode, isAvailable, onGetAccess } = useAvailability(meditationModel, accessCode, id);

    const onGoBack = useCallback(() => {
        if (prevScreen) {
            navigation.navigate(prevScreen);
        } else if (navigation.canGoBack()) {
            navigation.goBack();
        };
    }, [prevScreen]);

    return { 
        lessonTitle, lessonContent, onGoBack,
        code, setCode, isAvailable, onGetAccess
    };
}