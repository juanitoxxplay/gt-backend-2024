import { DataTypes } from "sequelize";

const SettingsPackageModel = {
  id_touristPackage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
   id_settings: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
 
};

export { SettingsPackageModel };