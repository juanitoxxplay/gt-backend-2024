import { DataTypes } from "sequelize";
const stateModel = {
    id_state: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name_state: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      
};
export { stateModel };
