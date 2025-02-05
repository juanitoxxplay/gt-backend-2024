import { DataTypes } from "sequelize";

const DetailsOrderBuyModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_purcharseOrder: {
        type: DataTypes.INTEGER,
    },
    id_product: {
        type: DataTypes.INTEGER,
    },
    unit_price: {
        type: DataTypes.DECIMAL,
    },
    quantity:{
        type: DataTypes.BIGINT,
    },
    deletedAt: {
        type: DataTypes.DATE,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
};

export { DetailsOrderBuyModel };