import { IColors } from "./IColors";

export interface IColorTheme {
    readonly theme: 'light' | 'dark';
    readonly colors: IColors;
    setTheme: (value: 'dark' | 'light') => void;
    updateColorsSchemas: (data: { [key: string]: IColors }) => void;
}
