CREATE DATABASE unalinterview;

use unalinterview;

CREATE TABLE users (
    id INT(10) PRIMARY KEY,
    nombre  VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    cedula BIGINT(20)
);

-- Get the table in the current database
SELECT table_schema unalinterview, table_name users
FROM INFORMATION_SCHEMA.TABLES
GO