### Book-Management

####Project execution

to execute this project you only need to have the docker installed and active, then to execute the containers you have to be in the main folder and execute the command.

`$ docker-compose up`

all management of migrations and seeders is done automatically when the backend is upgraded

enjoy!

####Project Explanation

We developed a book management system for a bookstore, where you can create, update, delete and obtain books, authors and publishers

The database design in the following, where different relationships are applied

where we have a main entity BOOK, which is related to a EDITORIAL, we also have a pivot table of a many-to-many relationship between AUTHOR and BOOK because a book can have more than one author.

all this first part is implemented and developed both in front and backend.

then the approach of models was made to be able to receive or request a book where we have two entities more is the BOOKINGS and the USER where the USER are the people who request a book for a time, and the BOOKINGS are where we register that BOOK was requested and that USER has it, with their dates of delivery and loans respectively.

![](https://res.cloudinary.com/dmmdulrrv/image/upload/v1647757892/Captura_de_Pantalla_2022-03-20_a_la_s_7.31.25_vcl4wm.png)