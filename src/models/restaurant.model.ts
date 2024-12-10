import { DataTypes } from "sequelize";
const RestaurantModel = {
    id_restaurant: {
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

  contract_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Contract',
      key: 'id'
    },
    onDelete: 'CASCADE', // elimina el registro en Restaurant cuando se elimine el registro en Contract
    onUpdate: 'CASCADE', // actualiza el registro en Restaurant cuando se actualice el registro en Contract
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