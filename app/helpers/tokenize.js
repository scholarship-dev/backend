/*
      This file contains funtions to clean up scrapped data

*/

const ethnicity_keywords = ["indigenous", "white peope", "African Americans", "Jewish People", "Asian people", "Arabs", "Native Americans", "Black people", "pacific islander", "Irannian people", "Native Hawaiians", "Alaska Natives", "Latino", "Multiracial", "Hispanic and Latino Americans", "Mexicans", "Pacific Islands Americans", "Irish People"]

/* Extracts the ethnicity requirement from the scholarship description
  @param - text_body : the string that contains the scholarship requirement
  @param - user : the user in which we are matching the ethnicity to 
  @return - ethnicity : the ethnicity requirement
*/
exports.extractEthnicity = function(text_body, user){

  // removes whitespace from text_body and grabs the logged in user's ethnicity
  const stripped_text = text_body.replace(/\s/g, "")
  const key = user.ethnicity
  let ethnicity

  // grabs the startig and ending indexes of the ethnicity in the text body
  const start_index = stripped_text.indexOf(key)
  const end_index = (start_index + key.length)

  ethnicity_keywords.forEach(function(ethni_keyword){
    if (stripped_text.includes(ethni_keyword)){

      // extracts the ethnicity if a keyword is found in the requirements text
      ethnicity = stripped_text.slice(start_index, end_index)
      console.log(ethnicity);
    }
  })
}
