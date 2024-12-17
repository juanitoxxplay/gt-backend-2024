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
    },
    concept_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount:{
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    
}; 
export {DetailsRosterModel};