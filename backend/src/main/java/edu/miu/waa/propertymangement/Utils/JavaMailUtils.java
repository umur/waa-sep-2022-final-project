package edu.miu.waa.propertymangement.Utils;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.logging.LogLevel;

import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;
import java.util.logging.Logger;

@Slf4j
public class JavaMailUtils {
    public static  void  sendEmail(String recipient) throws MessagingException {
        Properties properties = new Properties();
        properties.put("mail.smtp.auth","true");
        properties.put("mail.smtp.starttls.enable","true");
        properties.put("mail.smtp.host","smtp.gmail.com");
        properties.put("mail.smtp.port","587");

        String myAccount = "zayaz3160@gmail.com";
        String myPassword = "iclzsfqukizahlca";

        Session session = Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(myAccount,myPassword);
            }
        });

        Message message = prepareMessage(session,myAccount,recipient);
        assert message != null;
        Transport.send(message);
        log.debug("message send success");
    }

    private static Message prepareMessage(Session session, String myAccount,String recipient)  {
        try{
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(myAccount));
            message.setRecipient(Message.RecipientType.TO,new InternetAddress(recipient));
            message.setSubject("Property rent application submission");
            message.setText("Hello, Your application successfully submitted. \n Please wait response from landlord");
            return  message;
        }catch (Exception ex){
            log.error(ex.getMessage());
//            Logger .getLogger(JavaMailUtils.class.getName()).log(LogLevel.FATAL,null,ex);
        }

        return  null;
    }
}
