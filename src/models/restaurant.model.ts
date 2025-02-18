import { DataTypes } from "sequelize";

const RestaurantModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: false,
    },
    type: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    capacitance: {
        type: DataTypes.INTEGER,
        allowNull: false ,
        defaultValue: 0,
    },
    location: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },  

  id_supervisor : {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    deletedAt: {
        type: DataTypes.DATE,
    },
  
    
}
export{RestaurantModel};