import { DataTypes } from "sequelize";
const SupervisorModel= {
    id_supervisor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    contract_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "contract",
            key: "id_contract",
        },
    },
    
}; 
export {SupervisorModel};