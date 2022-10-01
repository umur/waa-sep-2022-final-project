package miu.waa.pmp.models;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String senderName;
    private String senderPhone;
    private String SenderEmail;
    private String message;
    private boolean status;

    @ManyToOne
    private Property property;
    @ManyToOne
    private User user;
}

