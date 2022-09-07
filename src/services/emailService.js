import axios from "axios"

export const emailService = (formData) => {
    const url = 'https://script.google.com/macros/s/AKfycbxMnSBMNI1u3uFR5L8lEBZwFhpJ6wRWZLdGR7mmtScidAcFdRq7LyFmw1T8w4QH6sak/exec'
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    } 
    
    formData.formGoogleSendEmail = 'example@email.net'
    formData.formDataNameOrder = JSON.stringify(['customerName', 'customerPhone', 'customerEmail', 'customerService', 'customerMessage'])
    formData.formGoogleSheetName = 'responses'

    return axios.post(url, formData, {headers: headers})
}