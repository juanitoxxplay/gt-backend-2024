import { DataTypes} from "sequelize";
const ConceptModel = {
    id_concept:{
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    type_concept: {
        type: DataTypes.STRING(50), 
        allowNull: false,
    },

    formula: {
        type: DataTypes.STRING(50), 
        allowNull: false,
    },

};
export {ConceptModel};