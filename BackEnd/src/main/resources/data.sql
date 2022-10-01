

-- add roles
insert into role (name)
values
    ('ADMIN'),
    ('OWNER'),
    ('CUSTOMER');
-- add address
insert into address ( city, street, zip)
values
    ('Fairfield', 'Iowa', '52557'),
    ('Fairfield', 'Iowa', '52556');
-- add users
insert into users (first_name, email,   password, user_name, address_id)
    values
        ('Umar Inan','owner1@pmp.com','$2a$10$rDxPfeOv8YJ4e0OwHAEHLeRXOxTsHDi1BRxhec3kzUocnU6PmfSu6', 'owner1', 1 ),
        ('Abedur','owner2@pmp.com','$2a$10$rDxPfeOv8YJ4e0OwHAEHLeRXOxTsHDi1BRxhec3kzUocnU6PmfSu6', 'owner2', 2 );


insert into category (id, name)
values
    (1, 'For Rent'),
    (2, 'For Sale'),
    (3, 'Unclassified');

insert into property ( name, description, area, rooms, price, active, rented, category_id, views)
values ('property-1', 'Awesome villa for Airbnb', 99.9, 4, 50, true, false, 1,0),
       ( 'property-2', 'Another Awesome Apartment for Airbnb', 99.9, 4, 20, true, false,1,0),
       ( 'property-3', 'Event better Condo for family or for Airbnb', 99.9, 4, 20, true, false,1,0);

