DROP TABLE IF EXISTS ‘products_t’;
CREATE TABLE `products_t` ( `PID` INT NOT NULL , `NAME` VARCHAR NOT NULL , `DESCRIPTION` TEXT NOT NULL , `PRICE` DECIMAL NOT NULL , `RATING` INT NOT NULL , `IMGURL` TEXT NOT NULL , `HOVERIMGURL` TEXT NOT NULL , PRIMARY KEY (`PID`)) ENGINE = InnoDB;