const{DataTypes}=requiure("sequelize")
const { toDefaultValue } = require('sequelize/lib/utils')
const{Sequelize}=require('../../config/db_config')
const Pizza_toppings =new Sequelize.afterDefine('Pizza_toppings',{
    id:{
        type:DataTypes.UUID,
        DefaultValue:DataTypes.UUIDV4,
        primarykey:true,
        allowNull: false,

    },
    piza_id:{
        type:DataTypes.UUID,
        references: {
            model: 'pizas', 
            key: 'id', 
          },
          

    },
    topping_id: {
        type: DataTypes.UUID,
        allowNull: true, // Restaurant can be nullable after deletion
        references: {
          model: 'toppings', 
          key: 'id', 
        },
        
      },

},{
    timestamps:true
})
module.exports=Pizza_toppings