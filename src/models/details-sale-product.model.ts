import { DataTypes } from "sequelize";
const DetailsSaleProductModel = {
    id_detail: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_saleProduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    unit_price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.BIGINT,
        allowNull: false,
},
};
export { DetailsSaleProductModel };