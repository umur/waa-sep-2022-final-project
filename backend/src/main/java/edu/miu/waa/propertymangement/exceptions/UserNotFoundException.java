package edu.miu.waa.propertymangement.exceptions;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(String userId) {
        super(userId + " not found");
    }
}
