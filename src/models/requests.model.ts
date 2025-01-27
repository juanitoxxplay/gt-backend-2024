import { DataTypes } from "sequelize";
const RequestsModel = {
    request_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    request_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        /*references: {
            model: 'request_type',
            key: 'request_type_id',
        },*/
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    request_status: {
        type: DataTypes.ENUM,
        values: ['PENDING', 'APPROVED', 'REJECTED'],
        allowNull: false,
    },
    
    status: { // Not confused with 'request status'
        type: DataTypes.BOOLEAN,
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