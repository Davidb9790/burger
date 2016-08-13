-- //create database
CREATE DATABASE burgers_db;
USE burgers_db;
-- create table with each column
CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	Burger_name varchar(255),
	Devoured BOOLEAN,
	Date TIMESTAMP, 
    PRIMARY KEY (id)
);