import { DataTypes } from "sequelize";
const RoomModel = {

    id_room: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_typeRoom: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      id_hotel: {
        type: DataTypes.INTEGER,
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
      
}; export { RoomModel };