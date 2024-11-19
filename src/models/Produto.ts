import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface ProdutoInstances extends Model{
    id: number,
    nome: string,
    valor: number,
    quantidade: number
}
export const Produto = sequelize.define<ProdutoInstances>("Produto,",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    nome:{
        type:DataTypes.STRING
    },
    valor:{
        type:DataTypes.DECIMAL
    },
    quantidade:{
        type:DataTypes.INTEGER
    }
},{
    tableName:'Produtos',
    timestamps:false
})