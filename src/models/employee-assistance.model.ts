import { DataTypes } from "sequelize";

const EmployeeassistanceModel = {
    id_assistance: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_contract: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "contract",
            key: "id_contract",
        },
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    entry_time:{
        type: DataTypes.TIME,
        allowNull: false,
    },
    exit_time:{
        type: DataTypes.TIME,
        allowNull: false,
    },
   
};
export {EmployeeassistanceModel};