import AttributeModelGenerated from "./generated/AttributeModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await AttributeModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AttributeModelGenerated,
  ...customModel
};
