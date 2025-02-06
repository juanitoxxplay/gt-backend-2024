import { DataTypes } from "sequelize";

const RequestTypeModel = {
    request_type_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    bot: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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

