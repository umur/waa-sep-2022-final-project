package miu.waa.pmp.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;

@org.springframework.context.annotation.Configuration
public class Configuration {
    @Bean
    public ModelMapper ModelMapper() {
        return new ModelMapper();
    }
}

