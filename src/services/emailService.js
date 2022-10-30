import axios from "axios"

export const emailService = (formData) => {
    const url = 'https://script.google.com/macros/s/AKfycbzDRGdNg9Ju8nZQNuscyo-T9D9vkM0cyK7tfFfKXhVvIaGE5U7xoiZ1HUCj3-nfAeXW/exec'
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    } 
    
    formData.formGoogleSendEmail = 'example@email.net'
    formData.formDataNameOrder = JSON.stringify(['customerName', 'customerPhone', 'customerEmail', 'customerService', 'customerMessage'])
    formData.formGoogleSheetName = 'responses'

    return axios.post(url, formData, {headers: headers})
}