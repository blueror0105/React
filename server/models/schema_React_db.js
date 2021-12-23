// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_React_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * Attribute
      * ------------------------------------
      */
    class Attribute extends Sequelize.Model{}
    Attribute.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "attribute", timestamps: false }
    );



    /**
      * ------------------------------------
      * Category
      * ------------------------------------
      */
    class Category extends Sequelize.Model{}
    Category.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "category", timestamps: false }
    );



    /**
      * ------------------------------------
      * Product
      * ------------------------------------
      */
    class Product extends Sequelize.Model{}
    Product.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      Image: {
        type: Sequelize.STRING
      },
      
      Name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      Price: {
        type: Sequelize.FLOAT
      },
      
      Summary: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
        
      
      
      //EXTERNAL RELATIONS
      /*
      categoryproduct: {
        type: Sequelize.INTEGER,
        references: {
          model: Category,
          key: '_id',
        }
      },
      userproduct: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "product", timestamps: false }
    );



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      userproduct:  {
        type: Sequelize.INTEGER,
        references: {
          model: "Product",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    Category.belongsToMany(Product, {
        through: "Category_categoryproduct",
        as: "categoryproduct",
        foreignKey: "id_Category",
        otherKey: "id_Product",
        timestamps: false
    });

    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
