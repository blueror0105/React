import CategoryApiGenerated from "./generated/CategoryApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class CategoryApi extends CategoryApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Category List
  static getCategoryList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/categorys")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default CategoryApi;