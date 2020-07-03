import aws from 'aws-sdk';
import handler from "./libs/libs/handler-lib";

const ses = aws.SES();

export const main = handler(async(event, context) => {
  await ses.sendTemplatedEmail({

    Destination: {
      CcAddresses:  "vitor.colman@hotmail.com",
      ToAddresses: "adrianaadur@gmail.com"
   },
    Source: "vitor.colman2001@gmail.com",
   Template: "TemplateMinions",
   TemplateData: "Vito Adur"
  });

});