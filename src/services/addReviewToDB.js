import database from './firebase';


export const addReviewToDB = (formData) => {
    
    
    formData.formGoogleSendEmail = 'example@email.net'
    formData.formDataNameOrder = JSON.stringify(['customerName', 'customerPhone', 'customerEmail', 'customerService', 'customerMessage'])
    formData.formGoogleSheetName = 'responses'

    database.ref("user").set({
        name : formData.formGoogleSendEmail,
        age : formData.formGoogleSheetName,
      }).catch(alert);

      return true;
}