package com.property.exception.custom;

public class MailSendException extends RuntimeException {

    public MailSendException(String message){
        super(message);
    }

}
