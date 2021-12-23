import actionsFunction from "./generated/CategoryActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import CategoryApi from "../../api/CategoryApi";
 
 actionsFunction.loadCategoryList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return CategoryApi
     .getCategoryList()
     .then(list => {
       dispatch(actionsFunction.loadCategorySuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
