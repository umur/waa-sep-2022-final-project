package edu.miu.waa.propertymangement.entity;

import lombok.Data;
import org.hibernate.annotations.SQLDelete;
import org.hibernate.annotations.Where;

import javax.persistence.Entity;

@Data
@Entity
@SQLDelete(sql = "UPDATE property_image SET is_deleted = true WHERE id=?")
@Where(clause = "is_deleted=false")
public class PropertyImage extends BaseEntity {
    private String imgUrl;
}
