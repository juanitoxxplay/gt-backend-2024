import { DataTypes } from "sequelize";

const TransportModel = {
    id_transport: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      model: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_contract: {   
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_route: {   
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      }, 
};
export { TransportModel };