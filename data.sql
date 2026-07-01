

CREATE DATABASE kast;

CREATE TABLE users(
       id VARCHAR(255) PRIMARY KEY,
       email VARCHAR(255) NOT NULL,
       name TEXT NOT NULL,
       image TEXT ,
       method VARCHAR(255) NOT NULL,
       password VARCHAR(255) ,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
       name_set int default 0
)

CREATE TABLE rooms(
      
)