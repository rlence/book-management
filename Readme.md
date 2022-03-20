### Book-Management

#### Project execution

to execute this project you only need to have the docker installed and active, then to execute the containers you have to be in the main folder and execute the command.

`$ docker-compose up`

all management of migrations and seeders is done automatically when the backend is upgraded

enjoy!

#### Project Explanation

We developed a book management system for a bookstore, where you can create, update, delete and obtain books, authors and publishers

The database design in the following, where different relationships are applied

where we have a main entity BOOK, which is related to a EDITORIAL, we also have a pivot table of a many-to-many relationship between AUTHOR and BOOK because a book can have more than one author.

all this first part is implemented and developed both in front and backend.

then the approach of models was made to be able to receive or request a book where we have two entities more is the BOOKINGS and the USER where the USER are the people who request a book for a time, and the BOOKINGS are where we register that BOOK was requested and that USER has it, with their dates of delivery and loans respectively.

![](https://res.cloudinary.com/dmmdulrrv/image/upload/v1647757892/Captura_de_Pantalla_2022-03-20_a_la_s_7.31.25_vcl4wm.png)

#### Ideas that were not developed

- The development of the creation of User and Bookings where the raised models were left, with their panels for the vizualizacion of which user has been delivered which book.

- The creation of notifications via email or sms to the users when they have requested a book and when the delivery date of the book is near.
- Have a model to know the number of copies of the books and their different status (damaged, borrowed, available, etc).

- To put security to the platform (not applied because it is a technical test) but to have a role model where the existing users know if they are employees or customers and thus securize the app, where only employees can access the system.

- an admin panel where that role will be able to manage the registration of the employees users of the platform.

- have a model to register several libraries and companies, so we can know if the libraries are from the same company or from different companies and be able to expand the use of the program to several libraries.

- add a book search engine on the platform that indicates book info, status and where the book may be available.