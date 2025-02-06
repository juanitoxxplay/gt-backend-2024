import { TEXT } from "sequelize";
import { SettingsInterface} from "../../interfaces";

const settingsSeeds: Partial<SettingsInterface>[] = [
  {
      id:1,
      name:"Iva",
      formula:16,
      status:true,


  },
];

export{settingsSeeds}