CREATE TABLE `Tema` (
	`id` bigint NOT NULL,
	`descricao` varchar(255) NOT NULL,
	`palavra_chave` varchar(255) NOT NULL,
	`nome` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Usuario` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`usuario` varchar(255) NOT NULL,
	`nome` varchar(255) NOT NULL,
	`tipoUsuario` varchar(255) NOT NULL,
	`senha` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Postagem` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`titulo` varchar(255) NOT NULL,
	`texto` varchar(1000) NOT NULL,
	`data` TIMESTAMP NOT NULL,
	`imagem_url` varchar(1000) NOT NULL,
	`tema_id` bigint NOT NULL,
	`usuario_id` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Postagem` ADD CONSTRAINT `Postagem_fk0` FOREIGN KEY (`tema_id`) REFERENCES `Tema`(`id`);

ALTER TABLE `Postagem` ADD CONSTRAINT `Postagem_fk1` FOREIGN KEY (`usuario_id`) REFERENCES `Usuario`(`id`);




