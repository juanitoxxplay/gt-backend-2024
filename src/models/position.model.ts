import { DataTypes } from "sequelize";
const PositionModel = {
    id_position: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    createAt: {
        type: DataTypes.DATE,
    },

    deletedAt: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
};
 export {PositionModel};