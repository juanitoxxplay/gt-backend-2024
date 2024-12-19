import { DataTypes } from "sequelize";

const InventoryhistoryModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_inventory: {
        type: DataTypes.INTEGER,
    },
    id_product: {
        type: DataTypes.INTEGER,
    },
    quantity_adjustment:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    motive:{
        type: DataTypes.STRING(400),
        allowNull: true
    },
    adjustment_date:{
        type: DataTypes.DATE,
        allowNull:false
    },
    id_contract:{
        type: DataTypes.INTEGER,
    },
    deletedAt: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
};

export { InventoryhistoryModel };