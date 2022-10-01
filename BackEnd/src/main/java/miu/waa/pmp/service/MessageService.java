package miu.waa.pmp.service;

import miu.waa.pmp.models.Message;
import miu.waa.pmp.repository.MessageRepo;
import miu.waa.pmp.service.interfaces.MessageInterface;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class MessageService implements MessageInterface {

    private MessageRepo messageRepo;
    private ModelMapper modelMapper;

    public MessageService(MessageRepo messageRepo, ModelMapper modelMapper) {
        this.messageRepo = messageRepo;
        this.modelMapper = modelMapper;
    }

    @Override
    public void save(Message message) {
        messageRepo.save(message);
    }

    @Override
    public List<Message> findByName(String name) {
        return null;
    }

    public Message createMessage(Message message) {
        return messageRepo.save(message);
    }
   // @PreAuthorize("hasRole(ADMIN)")
    public List<Message> findAll() {
        return messageRepo.findAll();
    }
  public List<Message> findAllActive() {
     return   messageRepo.findAll();

    }

    public Message findMessageById(int id) {
        return messageRepo.findById(id).orElseGet(null);
    }

    public Message updateMessage(Message message) {
        return messageRepo.save(message);
    }

    public void deleteMessage(int id) {
       Optional<Message> message = messageRepo.findById(id);
       if (message.isPresent())
           messageRepo.delete(message.orElseGet(null));
    }

    public List<Message> findMessageByUserId(int id) {
       return messageRepo.findByUser(id);
    }
}
