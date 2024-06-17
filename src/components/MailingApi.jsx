
import React from 'react';

const MailingApi = () => {
  return null; // This component doesn't render anything, just encapsulates the email sending logic
};

export const sendEmail = (mailSubject, mailBody) => {
  const url = 'https://csgrlosdemo.newgensoftware.net:8443/lasportalbackendservices/sendMail';

  const body = {
    mailBody: mailBody,
    mailTo: 'nehaproductanalyst@gmail.com',
    mailSubject: mailSubject
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.text())  // Assuming the response is text, adjust if JSON
    .then(data => {
      console.log('Email sent successfully:', data);
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
};

export default MailingApi;
