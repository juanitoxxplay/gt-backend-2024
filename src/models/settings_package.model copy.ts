import { DataTypes } from "sequelize";

const SettingsPackageModel = {
  package_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  settings_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
 
};

export { SettingsPackageModel };