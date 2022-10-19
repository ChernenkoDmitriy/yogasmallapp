import { IColors } from "./IColorTheme/IColors";
import { IColorTheme, IThemeStore } from ".";
import { ThemeMobXStore } from "./ThemeMobXStore";
import { COLORS } from './Colors';

class ColorTheme implements IColorTheme {
    constructor(private themeStore: IThemeStore) {
        this.updateColorsSchemas(COLORS);
    }

    get theme() {
        return this.themeStore.theme || 'light';
    }

    get colors() {
        return this.themeStore.colors || COLORS.light;
    }

    updateColorsSchemas = (data: { [key: string]: IColors }) => {
        if (data && Object.keys(data).length) {
            this.themeStore.saveAllColors(data);
            if (this.themeStore.theme && Object.keys(data).includes(this.themeStore.theme)) {
                // @ts-ignore
                this.themeStore.saveColors(this.themeStore.allThemes[this.theme]);
            } else {
                // @ts-ignore
                this.themeStore.saveColors(Object.values(data)[0]);
            }
        }
    }

    setTheme = (data: 'dark' | 'light') => {
        if (this.themeStore.allThemes && Object.keys(this.themeStore.allThemes).includes(data)) {
            this.themeStore.saveTheme(data);
            // @ts-ignore
            this.themeStore.saveColors(this.themeStore.allThemes[data]);
        }
    }

}

const colorThemeStore = new ThemeMobXStore();
export const colorTheme = new ColorTheme(colorThemeStore);
