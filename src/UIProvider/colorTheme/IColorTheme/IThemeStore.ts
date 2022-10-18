import { IColors } from "..";

export interface IThemeStore {
    theme: 'dark' | 'light' | null;
    colors: IColors | null;
    allThemes: { [key: string]: IColors } | null;
    saveTheme: (data: 'dark' | 'light' | null) => void;
    saveColors: (data: IColors) => void;
    saveAllColors: (data: { [key: string]: IColors }) => void;
}
