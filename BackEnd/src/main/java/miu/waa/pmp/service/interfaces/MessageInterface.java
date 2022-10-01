package miu.waa.pmp.service.interfaces;


import miu.waa.pmp.models.Category;
import miu.waa.pmp.models.Message;

import java.util.List;

public interface MessageInterface {

    void save(Message category);
    List<Message> findByName(String name);

}
