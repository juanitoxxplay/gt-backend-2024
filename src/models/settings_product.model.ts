import { DataTypes } from "sequelize";

const SettingsProductModel = {
  id_product: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_settings: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
};

export { SettingsProductModel };