import { SettingsConfig } from "../types";

export const useConfig = (config: SettingsConfig):SettingsConfig=>{
    return {
        exclude: [],
        include: [],
        margin: true,
        marginTop: true,
        marginBottom: true,
        ...config
    };
}