import { TextStyle } from "react-native";

export interface TitleProps{
    text: string;
    size: 'xs' | 'm' | 'xl' | number;
    color?: string;
    align: 'left' | 'center' | 'right';
    style?: TextStyle;
    bold?: boolean;
    underline?: boolean;
}