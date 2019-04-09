DROP DATABASE IF EXISTS exjobb;
CREATE DATABASE IF NOT EXISTS exjobb;

USE exjobb;

SET NAMES utf8;

CREATE TABLE IF NOT EXISTS Product (
	`productID` INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    `productManufacturer` VARCHAR(80) NOT NULL,
    `productName` VARCHAR(80) NOT NULL,
    `productOriginCountry` VARCHAR(40) NOT NULL,
    `productWeight` INTEGER NOT NULL,
    `productSize` VARCHAR(3) NOT NULL,
    `productSellPrize` INTEGER NOT NULL,
    `productBuyPrize` INTEGER NOT NULL,
    `productColor` VARCHAR(20) NOT NULL,
    `productAmount` INTEGER,
    `productCategoryID` INTEGER,
	`productGender`   INTEGER NOT NULL,
    `productDeleted` VARCHAR(20) NOT NULL
) ENGINE INNODB CHARACTER SET utf8 COLLATE utf8_swedish_ci;