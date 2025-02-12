
import { SettingsInterface } from "./settings.interface";
import { TouristPackageInterface } from "./tourist-package.interface";

export interface SettingsPackageInterface{
    id_touristPackage:number;
    id_settings:number|string;
    touristpackage: TouristPackageInterface;
    settings: SettingsInterface;

}