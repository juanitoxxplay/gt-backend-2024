import { DataTypes } from "sequelize";

const SettingsProductModel = {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  settings_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
};

export { SettingsProductModel };