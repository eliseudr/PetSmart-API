# Host: localhost  (Version 8.0.26)
# Date: 2021-10-25 23:42:26
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "pets"
#

DROP TABLE IF EXISTS `pets`;
CREATE TABLE `pets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `apelido` varchar(50) NOT NULL,
  `idade` varchar(255) NOT NULL,
  `mes` varchar(20) NOT NULL DEFAULT '' COMMENT 'Caso seja TRUE, a idade está indicada em meses',
  `raca` varchar(255) NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  `id_usuario` int NOT NULL,
  `criado_em` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `alterado_em` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#
# Data for table "pets"
#


#
# Structure for table "usuarios"
#

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cpf` varchar(20) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `cliente` int NOT NULL,
  `fornecedor` int NOT NULL,
  `ativo` tinyint(1) NOT NULL DEFAULT '1',
  `criado_em` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `alterado_em` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

#
# Data for table "usuarios"
#

