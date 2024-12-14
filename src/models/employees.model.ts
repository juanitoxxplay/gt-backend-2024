import { DataTypes } from "sequelize";

const EmployeeModel = {
    id_employee: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    document: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    flannel_size:{
        type: DataTypes.INTEGER,
        allowNull: false,   

    },
    pants_size: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }, 
    shoe_size: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },    
};

export { EmployeeModel };

    