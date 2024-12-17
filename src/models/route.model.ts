import { DataTypes } from "sequelize";
const RouteModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    origin: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    destination: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    
        
}; 
export { RouteModel };