import { observer } from 'mobx-react';
import { createContext, FC, useContext } from 'react';
import { IColorTheme, colorTheme } from './colorTheme';
import { ILocalization } from './localization/ILocalization';
import { localization } from './localization/Localization';

export const UIContext = createContext<IColorTheme & ILocalization>({} as any);

export const useUiContext = () => { return useContext(UIContext) };

interface IProps {
    children: React.ReactNode;
}

export const UIProvider: FC<IProps> = observer(({ children }) => {
    const value = {
        locales: localization.locales,
        colors: colorTheme.colors,
        setTheme: colorTheme.setTheme,
        theme: colorTheme.theme,
        updateColorsSchemas: colorTheme.updateColorsSchemas,
        locale: localization.locale,
        setLocale: localization.setLocale,
        setTranslation: localization.setTranslation,
        t: localization.t,
    };

    return (
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    );
});