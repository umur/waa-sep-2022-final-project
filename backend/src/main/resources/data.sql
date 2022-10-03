INSERT INTO user_table (authId, username, email, type)
VALUES ('bc7d6853-ad6f-4940-9d21-7e7e15cc5c2b', 'first-customer', 'first-customer@example.com', 'customer'),
       ('09129786-7b44-4b71-b26c-c96db67b4c25', 'first-owner', 'first-owner@example.com', 'owner'),
       ('66479673-2c7c-4871-8c52-8a1799c549d9', 'first-admin', 'first-admin@example.com', 'admin');

INSERT INTO address (city, create_at, street, update_at, zip)
VALUES ('Fairfield', CURRENT_TIMESTAMP, 'N 4st', CURRENT_TIMESTAMP, 52557),
       ('Fairfield', CURRENT_TIMESTAMP, 'W 4st', CURRENT_TIMESTAMP, 52556),
       ('Burlington', CURRENT_TIMESTAMP, 'New Street', CURRENT_TIMESTAMP, 52588),
       ('Iowa City', CURRENT_TIMESTAMP, 'Iowa Street', CURRENT_TIMESTAMP, 52288);


INSERT INTO property (user_id, price, numberOfRooms, size, numberOfBathrooms, year, views)
VALUES (2, 400000, 5, 345, 3, 1990, 4),
       (2, 500000, 5, 390, 2, 1999, 324);

-- INSERT INTO favorite ()