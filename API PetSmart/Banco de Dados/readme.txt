 --- ARQUIVO SQL PARA IMPORTAR BANCO DE DADOS ---

1° - CREATE DATABASE petsmart;
2° - IMPORT, SQL FILE;


*************************************************

CREATE TABLE usuarios (
    id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    email varchar(50) NOT NULL,
    nome varchar(255) NOT NULL,
    cpf varchar(20) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    cliente INT(11) NOT NULL,
    fornecedor INT(11) NOT NULL,
    ativo tinyint(1) DEFAULT 1 NOT NULL ,
    criado_em timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    alterado_em timestamp NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pets (
    id int(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    apelido varchar(50) NOT NULL,
    idade varchar(255) NOT NULL,
    mes varchar(20) NOT NULL, -- CASO SEJA TRUE A IDADE ESTÁ EM MESES !!!
    raca VARCHAR(255) NOT NULL,
    ativo tinyint(1) DEFAULT 1 NOT NULL ,
    id_usuario INT(11) NOT NULL,
    criado_em timestamp NULL DEFAULT CURRENT_TIMESTAMP,
    alterado_em timestamp NULL DEFAULT CURRENT_TIMESTAMP
);


