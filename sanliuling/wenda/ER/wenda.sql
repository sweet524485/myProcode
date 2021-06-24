SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

DROP SCHEMA IF EXISTS `wenda` ;
CREATE SCHEMA IF NOT EXISTS `wenda` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `wenda` ;

-- -----------------------------------------------------
-- Table `wenda`.`hd_admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wenda`.`hd_admin` ;

CREATE  TABLE IF NOT EXISTS `wenda`.`hd_admin` (
  `id` INT NOT NULL AUTO_INCREMENT ,
  `account` CHAR(20) NOT NULL DEFAULT '' COMMENT '管理员帐号' ,
  `password` CHAR(32) NOT NULL DEFAULT '' COMMENT '管理员密码' ,
  `logintime` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '上一次登录时间' ,
  `loginip` CHAR(20) NOT NULL DEFAULT '' COMMENT '上一次登录的IP' ,
  `lock` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1:锁定   0:未锁定' ,
  PRIMARY KEY (`id`) ,
  INDEX `account` (`account` ASC) )
ENGINE = MyISAM
COMMENT = '后台管理员';


-- -----------------------------------------------------
-- Table `wenda`.`hd_user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wenda`.`hd_user` ;

CREATE  TABLE IF NOT EXISTS `wenda`.`hd_user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `account` CHAR(20) NOT NULL DEFAULT '' COMMENT '用户帐号' ,
  `username` CHAR(20) NOT NULL DEFAULT '' COMMENT '用户昵称' ,
  `password` CHAR(32) NOT NULL DEFAULT '' COMMENT '用户密码' ,
  `face` VARCHAR(60) NOT NULL DEFAULT '' COMMENT '用户头像' ,
  `answer` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '回答数' ,
  `adopt` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '答案采纳数' ,
  `ask` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '提问数' ,
  `point` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '金币' ,
  `exp` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '经验' ,
  `logintime` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '上一次的登录时间' ,
  `loginip` CHAR(20) NOT NULL DEFAULT '' COMMENT '上一次的登录IP' ,
  `registime` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '注册时间' ,
  `lock` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1：锁定，2：未锁定' ,
  PRIMARY KEY (`id`) ,
  INDEX `account` (`account` ASC) )
ENGINE = MyISAM
COMMENT = '前台用户';


-- -----------------------------------------------------
-- Table `wenda`.`hd_category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wenda`.`hd_category` ;

CREATE  TABLE IF NOT EXISTS `wenda`.`hd_category` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `name` CHAR(20) NOT NULL DEFAULT '' COMMENT '分类名称' ,
  `pid` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '父级ID，0：顶级分类' ,
  PRIMARY KEY (`id`) ,
  INDEX `pid` (`pid` ASC) )
ENGINE = MyISAM
COMMENT = '问题分类';


-- -----------------------------------------------------
-- Table `wenda`.`hd_ask`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wenda`.`hd_ask` ;

CREATE  TABLE IF NOT EXISTS `wenda`.`hd_ask` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `content` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '问题内容' ,
  `reward` SMALLINT(6) UNSIGNED NOT NULL DEFAULT 0 COMMENT '奖励金币' ,
  `solve` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '1:已解决  0:未解决' ,
  `time` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '提问时间' ,
  `answer` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '回答数' ,
  `uid` INT UNSIGNED NOT NULL COMMENT '所属用户ID' ,
  `cid` INT UNSIGNED NOT NULL COMMENT '所属分类ID' ,
  PRIMARY KEY (`id`) ,
  INDEX `uid` (`uid` ASC) ,
  INDEX `cid` (`cid` ASC) )
ENGINE = MyISAM
COMMENT = '问题';


-- -----------------------------------------------------
-- Table `wenda`.`hd_answer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wenda`.`hd_answer` ;

CREATE  TABLE IF NOT EXISTS `wenda`.`hd_answer` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT ,
  `content` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '答题内容' ,
  `adopt` TINYINT(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否被采纳1：已采纳， 0：未采纳' ,
  `time` INT(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '回答时间' ,
  `aid` INT UNSIGNED NOT NULL COMMENT '所属问题ID' ,
  `uid` INT UNSIGNED NOT NULL COMMENT '所属用户ID' ,
  PRIMARY KEY (`id`) ,
  INDEX `adopt` (`adopt` ASC) ,
  INDEX `aid` (`aid` ASC) ,
  INDEX `uid` (`uid` ASC) )
ENGINE = MyISAM
COMMENT = '答案';

USE `wenda` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
