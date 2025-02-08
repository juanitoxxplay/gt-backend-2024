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
      
    createdAt: {
      type: DataTypes.DATE,
    
    },
    deletedAt: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
}; 
export { TypeRoomModel };1
