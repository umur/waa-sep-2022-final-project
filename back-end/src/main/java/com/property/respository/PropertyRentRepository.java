package com.property.respository;

import com.property.domain.PropertyRent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface PropertyRentRepository extends CrudRepository<PropertyRent, Long> {

    List<PropertyRent> findAllByPropertyAddressState(String state);

    List<PropertyRent> findAllByPropertyLandLordId(Long id);

    List<PropertyRent> findAllByPropertyAddressStateAndPropertyAddressCity(String state, String city);

    Optional<PropertyRent> findByPropertyIdAndRentEndDateIsAfter(Long id, LocalDate date);
}
