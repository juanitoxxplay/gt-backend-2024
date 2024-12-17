import { DataTypes } from "sequelize";
const PackageSaleModel = {
    id_sale: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name_package: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      booking_id: {
        type: DataTypes.INTEGER,
        allowNull: false,   
      },
      date_sale: {
        type: DataTypes.DATE,
        allowNull: false,
      },
};
export { PackageSaleModel };