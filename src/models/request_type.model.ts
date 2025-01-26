import { DataTypes } from "sequelize";
const RequestTypeModel = {
    request_type_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bot: {
        type: DataTypes.BOOLEAN,
        allowFalse: false,
    },
    
    status: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE,
    },

    updateAt: {
        type: DataTypes.DATE,
    },

    deletedAt: {
        type: DataTypes.DATE,
    },
};    

export {RequestTypeModel}; 