import { DataTypes } from "sequelize"; 
const DetailsRosterModel = {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primarykey :true,
    },
    roster_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "roster",
            key: "id_roster",
        },
    },
    concept_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "concept",
            key: "id_concept",
        },
    },
    amount:{
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    
}; 
export {DetailsRosterModel};