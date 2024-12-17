import { DataTypes } from "sequelize";
const TypeRoomModel = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name_type_room: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      
}; 
export { TypeRoomModel };1
