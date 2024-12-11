import { DataTypes } from "sequelize";

const PurcharseOrderModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    order_date:{
        type: DataTypes.DATE,
        allowNull:false
    },
    id_supplier: {
        type: DataTypes.INTEGER,
    },
    id_manager: {
        type: DataTypes.INTEGER,
    },
    name_seller:{
        type: DataTypes.STRING(50),
        allowNull: true
    },
    deletedAt: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
};

export { PurcharseOrderModel };