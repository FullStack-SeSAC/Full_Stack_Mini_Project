SHOW databases;

create database codingon default character set utf8 collate utf8_general_ci;

use codingon; 

use blomit;

create table Todo (
id int not null primary key auto_increment,
title varchar(100) not null,
done boolean not null default false
);

desc todo;

select * from todo;

insert into todo values (null, 'my todo1', 0);
insert into todo values (null, 'my todo2', 1);
insert into todo values (null, 'my todo3', 0);
insert into todo values (null, 'my todo4', 1);
insert into todo values (null, 'my todo5', 1);
insert into todo values (null, 'my todo6', 1);


update todo set title = '내가 할일 2번' where id =2;
update todo set title = 'my todo3' where id =3;
update todo set title = 'my todo4' where id =4;
update todo set title = 'my todo5' where id =5;
update todo set title = 'my todo6' where id =6;

delete from todo where id =9;

select * from mysql.user;

create user 'user'@'%' identified by '1234';
create user 'user'@'%' identified with mysql_native_password by '1234';

grant all privileges on *.* to 'user'@'%' with grant option;

flush privileges;


select * from codingon.Todo;