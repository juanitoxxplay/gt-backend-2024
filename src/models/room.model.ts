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
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      id_hotel: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      
}; export { RoomModel };