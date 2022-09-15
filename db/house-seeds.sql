INSERT INTO user (username, email, password)
VALUES
('ljones', 'ljones@gmail.com', "ljones1234"),
('ddaniels', 'ddaniels@gmail.com', 'ddaniels1234'),
('thefinneys', 'thefinneys@gmail.com', "finney1234");


INSERT INTO house (owner_name, address_1, address_2, city, state, zip, created_by_user_id, photo)
VALUES
('Lilly Jones', '35 Rocky Lane', "n/a", "Durham", "North Carolina", 27707, 1,  'https://i.guim.co.uk/img/media/9a7b4a174503d4cc97b214ed6dfc1da2e504a6fa/0_0_3500_2330/master/3500.jpg?width=1010&quality=45&auto=format&fit=max&dpr=2&s=7fdea8c265e23fe61e17c727921f66b6'),
("Doug Daniels", '10 Downing Street', 'Apt 2', 'Raleigh', 'North Carolina', 27609, 2, 'https://i.guim.co.uk/img/media/cd35d7b670a6c66f891d23b11ef57398808f8849/0_0_3500_2333/master/3500.jpg?width=1010&quality=45&auto=format&fit=max&dpr=2&s=608095e72cb54fd38d59f815dd7cd030'),
('Ralph & Rachel Finny', '90 Broad Street', 'n/a', 'Cary', 'North Carolina', 22609, 3, 'https://i.guim.co.uk/img/media/80be8a74848ae171fc51063bee0a37078f38723d/0_0_3500_2330/master/3500.jpg?width=1010&quality=45&auto=format&fit=max&dpr=2&s=3bff49d4e2eaadea529913119bf0e75f');
    