package edu.miu.waa.propertymangement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.http.CacheControl;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
@EnableJpaAuditing
@EnableWebMvc
public class PropertymangementApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(PropertymangementApplication.class, args);
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/static/**").addResourceLocations(
						"classpath:/static/")
				.setCacheControl(CacheControl.noCache());
	}
}
