CREATE TABLE `ds_blipcreator` (
            `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
            `name` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_unicode_ci',
            `data` LONGTEXT NOT NULL COLLATE 'utf8mb4_unicode_ci',
            PRIMARY KEY (`id`) USING BTREE
        ) COLLATE='utf8mb4_unicode_ci' ENGINE=InnoDB;
