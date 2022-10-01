package miu.waa.pmp.controllers;

import miu.waa.pmp.models.Message;
import miu.waa.pmp.service.MessageService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

@RestController
@CrossOrigin
@EnableWebMvc
@RequestMapping("messages")
public class MessageController {
    private MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }
    
    @GetMapping
    public List<Message> getMessages() {
        return this.messageService.findAll();
    }
    @GetMapping("/{id}")
    public Message getMessageById(@PathVariable int id) {
        return this.messageService.findMessageById(id);
    }
@GetMapping("/user/{id}")
    public List<Message> getMessagesByUserId(@PathVariable int id) {
        return this.messageService.findMessageByUserId(id);
    }

    @PostMapping
    public Message createMessage(@RequestBody Message message) {
        return this.messageService.createMessage(message);
    }
    @PutMapping
    public Message updateMessage(@RequestBody Message message) {
        return this.messageService.updateMessage(message);
    }
}
