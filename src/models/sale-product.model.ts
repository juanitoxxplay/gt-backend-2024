import { DataTypes } from "sequelize";
const SaleProductModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      id_client: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

    }; 
    export { SaleProductModel };