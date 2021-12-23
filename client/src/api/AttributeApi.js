import AttributeApiGenerated from "./generated/AttributeApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AttributeApi extends AttributeApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Attribute List
  static getAttributeList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/attributes")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AttributeApi;