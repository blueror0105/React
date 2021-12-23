import actionsFunction from "./generated/AttributeActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import AttributeApi from "../../api/AttributeApi";
 
 actionsFunction.loadAttributeList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return AttributeApi
     .getAttributeList()
     .then(list => {
       dispatch(actionsFunction.loadAttributeSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
