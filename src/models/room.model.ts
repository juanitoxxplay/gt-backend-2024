import { DataTypes } from "sequelize";
const RoomModel = {

    id_room: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      id_type_room: {
        type: DataTypes.STRING(50),
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