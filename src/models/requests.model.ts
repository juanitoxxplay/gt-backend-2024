import { DataTypes } from "sequelize";
const RequestsModel = {
    request_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    request_type_id: {
        type: DataTypes.INTEGER,
        allowFalse: false,
        references: {
            model: 'resquest_type',
            key: 'request_type_id',
        },
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

export {RequestsModel}; 