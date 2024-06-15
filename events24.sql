-- MariaDB dump 10.19  Distrib 10.6.16-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: ecsa_conf
-- ------------------------------------------------------
-- Server version	10.6.16-MariaDB-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `country` varchar(100) NOT NULL,
  `short_code` varchar(5) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `country` (`country`),
  UNIQUE KEY `short_code` (`short_code`)
) ENGINE=InnoDB AUTO_INCREMENT=196 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Afghanistan','AF','2024-05-25 18:17:30','2024-05-25 18:17:30'),(2,'Albania','AL','2024-05-25 18:17:30','2024-05-25 18:17:30'),(3,'Algeria','DZ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(4,'Andorra','AD','2024-05-25 18:17:30','2024-05-25 18:17:30'),(5,'Angola','AO','2024-05-25 18:17:30','2024-05-25 18:17:30'),(6,'Antigua and Barbuda','AG','2024-05-25 18:17:30','2024-05-25 18:17:30'),(7,'Argentina','AR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(8,'Armenia','AM','2024-05-25 18:17:30','2024-05-25 18:17:30'),(9,'Australia','AU','2024-05-25 18:17:30','2024-05-25 18:17:30'),(10,'Austria','AT','2024-05-25 18:17:30','2024-05-25 18:17:30'),(11,'Azerbaijan','AZ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(12,'Bahamas','BS','2024-05-25 18:17:30','2024-05-25 18:17:30'),(13,'Bahrain','BH','2024-05-25 18:17:30','2024-05-25 18:17:30'),(14,'Bangladesh','BD','2024-05-25 18:17:30','2024-05-25 18:17:30'),(15,'Barbados','BB','2024-05-25 18:17:30','2024-05-25 18:17:30'),(16,'Belarus','BY','2024-05-25 18:17:30','2024-05-25 18:17:30'),(17,'Belgium','BE','2024-05-25 18:17:30','2024-05-25 18:17:30'),(18,'Belize','BZ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(19,'Benin','BJ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(20,'Bhutan','BT','2024-05-25 18:17:30','2024-05-25 18:17:30'),(21,'Bolivia','BO','2024-05-25 18:17:30','2024-05-25 18:17:30'),(22,'Bosnia and Herzegovina','BA','2024-05-25 18:17:30','2024-05-25 18:17:30'),(23,'Botswana','BW','2024-05-25 18:17:30','2024-05-25 18:17:30'),(24,'Brazil','BR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(25,'Brunei','BN','2024-05-25 18:17:30','2024-05-25 18:17:30'),(26,'Bulgaria','BG','2024-05-25 18:17:30','2024-05-25 18:17:30'),(27,'Burkina Faso','BF','2024-05-25 18:17:30','2024-05-25 18:17:30'),(28,'Burundi','BI','2024-05-25 18:17:30','2024-05-25 18:17:30'),(29,'Cabo Verde','CV','2024-05-25 18:17:30','2024-05-25 18:17:30'),(30,'Cambodia','KH','2024-05-25 18:17:30','2024-05-25 18:17:30'),(31,'Cameroon','CM','2024-05-25 18:17:30','2024-05-25 18:17:30'),(32,'Canada','CA','2024-05-25 18:17:30','2024-05-25 18:17:30'),(33,'Central African Republic','CF','2024-05-25 18:17:30','2024-05-25 18:17:30'),(34,'Chad','TD','2024-05-25 18:17:30','2024-05-25 18:17:30'),(35,'Chile','CL','2024-05-25 18:17:30','2024-05-25 18:17:30'),(36,'China','CN','2024-05-25 18:17:30','2024-05-25 18:17:30'),(37,'Colombia','CO','2024-05-25 18:17:30','2024-05-25 18:17:30'),(38,'Comoros','KM','2024-05-25 18:17:30','2024-05-25 18:17:30'),(39,'Congo','CG','2024-05-25 18:17:30','2024-05-25 18:17:30'),(40,'Costa Rica','CR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(41,'Croatia','HR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(42,'Cuba','CU','2024-05-25 18:17:30','2024-05-25 18:17:30'),(43,'Cyprus','CY','2024-05-25 18:17:30','2024-05-25 18:17:30'),(44,'Czech Republic','CZ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(45,'Denmark','DK','2024-05-25 18:17:30','2024-05-25 18:17:30'),(46,'Djibouti','DJ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(47,'Dominica','DM','2024-05-25 18:17:30','2024-05-25 18:17:30'),(48,'Dominican Republic','DO','2024-05-25 18:17:30','2024-05-25 18:17:30'),(49,'East Timor','TL','2024-05-25 18:17:30','2024-05-25 18:17:30'),(50,'Ecuador','EC','2024-05-25 18:17:30','2024-05-25 18:17:30'),(51,'Egypt','EG','2024-05-25 18:17:30','2024-05-25 18:17:30'),(52,'El Salvador','SV','2024-05-25 18:17:30','2024-05-25 18:17:30'),(53,'Equatorial Guinea','GQ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(54,'Eritrea','ER','2024-05-25 18:17:30','2024-05-25 18:17:30'),(55,'Estonia','EE','2024-05-25 18:17:30','2024-05-25 18:17:30'),(56,'Eswatini','SZ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(57,'Ethiopia','ET','2024-05-25 18:17:30','2024-05-25 18:17:30'),(58,'Fiji','FJ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(59,'Finland','FI','2024-05-25 18:17:30','2024-05-25 18:17:30'),(60,'France','FR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(61,'Gabon','GA','2024-05-25 18:17:30','2024-05-25 18:17:30'),(62,'Gambia','GM','2024-05-25 18:17:30','2024-05-25 18:17:30'),(63,'Georgia','GE','2024-05-25 18:17:30','2024-05-25 18:17:30'),(64,'Germany','DE','2024-05-25 18:17:30','2024-05-25 18:17:30'),(65,'Ghana','GH','2024-05-25 18:17:30','2024-05-25 18:17:30'),(66,'Greece','GR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(67,'Grenada','GD','2024-05-25 18:17:30','2024-05-25 18:17:30'),(68,'Guatemala','GT','2024-05-25 18:17:30','2024-05-25 18:17:30'),(69,'Guinea','GN','2024-05-25 18:17:30','2024-05-25 18:17:30'),(70,'Guinea-Bissau','GW','2024-05-25 18:17:30','2024-05-25 18:17:30'),(71,'Guyana','GY','2024-05-25 18:17:30','2024-05-25 18:17:30'),(72,'Haiti','HT','2024-05-25 18:17:30','2024-05-25 18:17:30'),(73,'Honduras','HN','2024-05-25 18:17:30','2024-05-25 18:17:30'),(74,'Hungary','HU','2024-05-25 18:17:30','2024-05-25 18:17:30'),(75,'Iceland','IS','2024-05-25 18:17:30','2024-05-25 18:17:30'),(76,'India','IN','2024-05-25 18:17:30','2024-05-25 18:17:30'),(77,'Indonesia','ID','2024-05-25 18:17:30','2024-05-25 18:17:30'),(78,'Iran','IR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(79,'Iraq','IQ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(80,'Ireland','IE','2024-05-25 18:17:30','2024-05-25 18:17:30'),(81,'Israel','IL','2024-05-25 18:17:30','2024-05-25 18:17:30'),(82,'Italy','IT','2024-05-25 18:17:30','2024-05-25 18:17:30'),(83,'Jamaica','JM','2024-05-25 18:17:30','2024-05-25 18:17:30'),(84,'Japan','JP','2024-05-25 18:17:30','2024-05-25 18:17:30'),(85,'Jordan','JO','2024-05-25 18:17:30','2024-05-25 18:17:30'),(86,'Kazakhstan','KZ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(87,'Kenya','KE','2024-05-25 18:17:30','2024-05-25 18:17:30'),(88,'Kiribati','KI','2024-05-25 18:17:30','2024-05-25 18:17:30'),(89,'Korea, North','KP','2024-05-25 18:17:30','2024-05-25 18:17:30'),(90,'Korea, South','KR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(91,'Kosovo','XK','2024-05-25 18:17:30','2024-05-25 18:17:30'),(92,'Kuwait','KW','2024-05-25 18:17:30','2024-05-25 18:17:30'),(93,'Kyrgyzstan','KG','2024-05-25 18:17:30','2024-05-25 18:17:30'),(94,'Laos','LA','2024-05-25 18:17:30','2024-05-25 18:17:30'),(95,'Latvia','LV','2024-05-25 18:17:30','2024-05-25 18:17:30'),(96,'Lebanon','LB','2024-05-25 18:17:30','2024-05-25 18:17:30'),(97,'Lesotho','LS','2024-05-25 18:17:30','2024-05-25 18:17:30'),(98,'Liberia','LR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(99,'Libya','LY','2024-05-25 18:17:30','2024-05-25 18:17:30'),(100,'Liechtenstein','LI','2024-05-25 18:17:30','2024-05-25 18:17:30'),(101,'Lithuania','LT','2024-05-25 18:17:30','2024-05-25 18:17:30'),(102,'Luxembourg','LU','2024-05-25 18:17:30','2024-05-25 18:17:30'),(103,'Madagascar','MG','2024-05-25 18:17:30','2024-05-25 18:17:30'),(104,'Malawi','MW','2024-05-25 18:17:30','2024-05-25 18:17:30'),(105,'Malaysia','MY','2024-05-25 18:17:30','2024-05-25 18:17:30'),(106,'Maldives','MV','2024-05-25 18:17:30','2024-05-25 18:17:30'),(107,'Mali','ML','2024-05-25 18:17:30','2024-05-25 18:17:30'),(108,'Malta','MT','2024-05-25 18:17:30','2024-05-25 18:17:30'),(109,'Marshall Islands','MH','2024-05-25 18:17:30','2024-05-25 18:17:30'),(110,'Mauritania','MR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(111,'Mauritius','MU','2024-05-25 18:17:30','2024-05-25 18:17:30'),(112,'Mexico','MX','2024-05-25 18:17:30','2024-05-25 18:17:30'),(113,'Micronesia','FM','2024-05-25 18:17:30','2024-05-25 18:17:30'),(114,'Moldova','MD','2024-05-25 18:17:30','2024-05-25 18:17:30'),(115,'Monaco','MC','2024-05-25 18:17:30','2024-05-25 18:17:30'),(116,'Mongolia','MN','2024-05-25 18:17:30','2024-05-25 18:17:30'),(117,'Montenegro','ME','2024-05-25 18:17:30','2024-05-25 18:17:30'),(118,'Morocco','MA','2024-05-25 18:17:30','2024-05-25 18:17:30'),(119,'Mozambique','MZ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(120,'Myanmar','MM','2024-05-25 18:17:30','2024-05-25 18:17:30'),(121,'Namibia','NA','2024-05-25 18:17:30','2024-05-25 18:17:30'),(122,'Nauru','NR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(123,'Nepal','NP','2024-05-25 18:17:30','2024-05-25 18:17:30'),(124,'Netherlands','NL','2024-05-25 18:17:30','2024-05-25 18:17:30'),(125,'New Zealand','NZ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(126,'Nicaragua','NI','2024-05-25 18:17:30','2024-05-25 18:17:30'),(127,'Niger','NE','2024-05-25 18:17:30','2024-05-25 18:17:30'),(128,'Nigeria','NG','2024-05-25 18:17:30','2024-05-25 18:17:30'),(129,'North Macedonia','MK','2024-05-25 18:17:30','2024-05-25 18:17:30'),(130,'Norway','NO','2024-05-25 18:17:30','2024-05-25 18:17:30'),(131,'Oman','OM','2024-05-25 18:17:30','2024-05-25 18:17:30'),(132,'Pakistan','PK','2024-05-25 18:17:30','2024-05-25 18:17:30'),(133,'Palau','PW','2024-05-25 18:17:30','2024-05-25 18:17:30'),(134,'Palestine','PS','2024-05-25 18:17:30','2024-05-25 18:17:30'),(135,'Panama','PA','2024-05-25 18:17:30','2024-05-25 18:17:30'),(136,'Papua New Guinea','PG','2024-05-25 18:17:30','2024-05-25 18:17:30'),(137,'Paraguay','PY','2024-05-25 18:17:30','2024-05-25 18:17:30'),(138,'Peru','PE','2024-05-25 18:17:30','2024-05-25 18:17:30'),(139,'Philippines','PH','2024-05-25 18:17:30','2024-05-25 18:17:30'),(140,'Poland','PL','2024-05-25 18:17:30','2024-05-25 18:17:30'),(141,'Portugal','PT','2024-05-25 18:17:30','2024-05-25 18:17:30'),(142,'Qatar','QA','2024-05-25 18:17:30','2024-05-25 18:17:30'),(143,'Romania','RO','2024-05-25 18:17:30','2024-05-25 18:17:30'),(144,'Russia','RU','2024-05-25 18:17:30','2024-05-25 18:17:30'),(145,'Rwanda','RW','2024-05-25 18:17:30','2024-05-25 18:17:30'),(146,'Saint Kitts and Nevis','KN','2024-05-25 18:17:30','2024-05-25 18:17:30'),(147,'Saint Lucia','LC','2024-05-25 18:17:30','2024-05-25 18:17:30'),(148,'Saint Vincent and the Grenadines','VC','2024-05-25 18:17:30','2024-05-25 18:17:30'),(149,'Samoa','WS','2024-05-25 18:17:30','2024-05-25 18:17:30'),(150,'San Marino','SM','2024-05-25 18:17:30','2024-05-25 18:17:30'),(151,'Sao Tome and Principe','ST','2024-05-25 18:17:30','2024-05-25 18:17:30'),(152,'Saudi Arabia','SA','2024-05-25 18:17:30','2024-05-25 18:17:30'),(153,'Senegal','SN','2024-05-25 18:17:30','2024-05-25 18:17:30'),(154,'Serbia','RS','2024-05-25 18:17:30','2024-05-25 18:17:30'),(155,'Seychelles','SC','2024-05-25 18:17:30','2024-05-25 18:17:30'),(156,'Sierra Leone','SL','2024-05-25 18:17:30','2024-05-25 18:17:30'),(157,'Singapore','SG','2024-05-25 18:17:30','2024-05-25 18:17:30'),(158,'Slovakia','SK','2024-05-25 18:17:30','2024-05-25 18:17:30'),(159,'Slovenia','SI','2024-05-25 18:17:30','2024-05-25 18:17:30'),(160,'Solomon Islands','SB','2024-05-25 18:17:30','2024-05-25 18:17:30'),(161,'Somalia','SO','2024-05-25 18:17:30','2024-05-25 18:17:30'),(162,'South Africa','ZA','2024-05-25 18:17:30','2024-05-25 18:17:30'),(163,'South Sudan','SS','2024-05-25 18:17:30','2024-05-25 18:17:30'),(164,'Spain','ES','2024-05-25 18:17:30','2024-05-25 18:17:30'),(165,'Sri Lanka','LK','2024-05-25 18:17:30','2024-05-25 18:17:30'),(166,'Sudan','SD','2024-05-25 18:17:30','2024-05-25 18:17:30'),(167,'Suriname','SR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(168,'Sweden','SE','2024-05-25 18:17:30','2024-05-25 18:17:30'),(169,'Switzerland','CH','2024-05-25 18:17:30','2024-05-25 18:17:30'),(170,'Syria','SY','2024-05-25 18:17:30','2024-05-25 18:17:30'),(171,'Taiwan','TW','2024-05-25 18:17:30','2024-05-25 18:17:30'),(172,'Tajikistan','TJ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(173,'Tanzania','TZ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(174,'Thailand','TH','2024-05-25 18:17:30','2024-05-25 18:17:30'),(175,'Togo','TG','2024-05-25 18:17:30','2024-05-25 18:17:30'),(176,'Tonga','TO','2024-05-25 18:17:30','2024-05-25 18:17:30'),(177,'Trinidad and Tobago','TT','2024-05-25 18:17:30','2024-05-25 18:17:30'),(178,'Tunisia','TN','2024-05-25 18:17:30','2024-05-25 18:17:30'),(179,'Turkey','TR','2024-05-25 18:17:30','2024-05-25 18:17:30'),(180,'Turkmenistan','TM','2024-05-25 18:17:30','2024-05-25 18:17:30'),(181,'Tuvalu','TV','2024-05-25 18:17:30','2024-05-25 18:17:30'),(182,'Uganda','UG','2024-05-25 18:17:30','2024-05-25 18:17:30'),(183,'Ukraine','UA','2024-05-25 18:17:30','2024-05-25 18:17:30'),(184,'United Arab Emirates','AE','2024-05-25 18:17:30','2024-05-25 18:17:30'),(185,'United Kingdom','GB','2024-05-25 18:17:30','2024-05-25 18:17:30'),(186,'United States','US','2024-05-25 18:17:30','2024-05-25 18:17:30'),(187,'Uruguay','UY','2024-05-25 18:17:30','2024-05-25 18:17:30'),(188,'Uzbekistan','UZ','2024-05-25 18:17:30','2024-05-25 18:17:30'),(189,'Vanuatu','VU','2024-05-25 18:17:30','2024-05-25 18:17:30'),(190,'Vatican City','VA','2024-05-25 18:17:30','2024-05-25 18:17:30'),(191,'Venezuela','VE','2024-05-25 18:17:30','2024-05-25 18:17:30'),(192,'Vietnam','VN','2024-05-25 18:17:30','2024-05-25 18:17:30'),(193,'Yemen','YE','2024-05-25 18:17:30','2024-05-25 18:17:30'),(194,'Zambia','ZM','2024-05-25 18:17:30','2024-05-25 18:17:30'),(195,'Zimbabwe','ZW','2024-05-25 18:17:30','2024-05-25 18:17:30');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event_type_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `organiser_id` int(11) NOT NULL,
  `event` varchar(100) NOT NULL,
  `location` varchar(200) NOT NULL,
  `description` text DEFAULT NULL,
  `capacity` text DEFAULT NULL,
  `start_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `end_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `registration_start_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `registration_end_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `event` (`event`),
  UNIQUE KEY `location` (`location`),
  KEY `event_type_id` (`event_type_id`),
  KEY `country_id` (`country_id`),
  KEY `organiser_id` (`organiser_id`),
  CONSTRAINT `event_ibfk_1` FOREIGN KEY (`event_type_id`) REFERENCES `event_type` (`id`),
  CONSTRAINT `event_ibfk_2` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`),
  CONSTRAINT `event_ibfk_3` FOREIGN KEY (`organiser_id`) REFERENCES `organiser` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (2,2,173,2,'50 years of Leadership and Excellence in regional health collaboration','Gran Melina Hotel','This is an event to celebrate ECSA existence','12','2024-06-02 21:00:00','2024-06-19 21:00:00','2024-06-19 21:00:00','2024-06-19 21:00:00','2024-05-28 15:42:29','2024-06-07 12:40:18');
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event_type`
--

DROP TABLE IF EXISTS `event_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `event_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event_type` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `event_type` (`event_type`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event_type`
--

LOCK TABLES `event_type` WRITE;
/*!40000 ALTER TABLE `event_type` DISABLE KEYS */;
INSERT INTO `event_type` VALUES (2,'Conference','Conference','2024-05-26 07:10:41','2024-05-31 19:34:54'),(4,'Workshop','Workshop','2024-05-28 03:09:31','2024-05-28 03:09:31');
/*!40000 ALTER TABLE `event_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organiser`
--

DROP TABLE IF EXISTS `organiser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `organiser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `organiser` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `organiser` (`organiser`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organiser`
--

LOCK TABLES `organiser` WRITE;
/*!40000 ALTER TABLE `organiser` DISABLE KEYS */;
INSERT INTO `organiser` VALUES (2,'ECSA-HC','ECSA','2024-05-26 07:12:10','2024-06-03 11:23:19'),(5,'COSECSA','COSECSA','2024-05-28 05:50:43','2024-05-28 06:14:02'),(6,'Thanzi La Onse','Thanzi La Onse','2024-06-04 07:25:07','2024-06-04 07:25:07'),(7,'CANECSA','CANECSA','2024-06-04 12:37:56','2024-06-04 12:37:56');
/*!40000 ALTER TABLE `organiser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participant`
--

DROP TABLE IF EXISTS `participant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `participant` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `title` varchar(10) DEFAULT NULL,
  `institution` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `picture` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `country_id` (`country_id`),
  KEY `title` (`title`),
  KEY `institution` (`institution`),
  CONSTRAINT `participant_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `participant_ibfk_2` FOREIGN KEY (`country_id`) REFERENCES `country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participant`
--

LOCK TABLES `participant` WRITE;
/*!40000 ALTER TABLE `participant` DISABLE KEYS */;
INSERT INTO `participant` VALUES (1,1,15,'Mr','CANECSA','2024-06-02 11:21:05','2024-06-13 21:47:01','uploads/profile_pictures/011ed25b-4380-407f-a091-fea3884e4371.png'),(2,2,195,'Dr','Zimbabwe College of Public Health Physicians','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(3,3,87,'Dr','Aga Khan University, Nairobi','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(4,4,87,'Dr','ECSAPACH','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(5,5,87,'Mr','Ministry of Health Kenya','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(6,6,173,'Mr','ECSACOG','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(7,7,163,'Mr','Ministry of Health Eastern Cape South Africa','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(8,8,56,'Dr','Ministry of Health','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(9,9,173,'Dr','National Public Health Laboratory','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(10,10,56,'Ms','Ministry of Health-National Tuberculosis Control Program','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(11,11,87,'Mr','Distory Communication limited','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(12,12,173,'Dr','ECSA-HC','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(13,13,87,'Ms','KENYA MEDICAL RESEARCH INSTITUTE','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(14,14,173,'Ms','ECSA-HC','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(15,15,163,'Mrs','Nonesi','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(16,16,173,'Dr','Afya Plus','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(17,17,57,'Mr','Action Against Hunger','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(18,18,173,'Mr','East, Central and Southern Africa Health Community','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(19,19,163,'Mr','SAMA','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(20,20,56,'Ms','Ministry of Health-National Nutrition Council','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(21,21,87,'Ms','Amref Health Africa','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(22,22,87,'Ms','Amref Health Africa','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(23,23,173,'Ms','AMREF HEALTH AFRICA','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(24,24,173,'Ms','Amref Health Africa','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(25,25,87,'Ms','KEMRI','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(26,26,173,'Prof','ECSA-HC','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(27,27,87,'Ms','Amref','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(28,28,173,'Mr','Amref Health Africa','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(29,29,173,'Ms','Amref Health Africa','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(30,30,194,'Mrs','National Health Research Authority','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(31,31,163,'Prof','Walter Sisulu University - South Africa','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(32,32,163,'Mr','Southern Africa Miners Association (SAMA)','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(33,33,173,'Ms','Sciex Limited','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(34,34,124,'Mr','Save the Children','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(35,35,173,'Dr','Ifakara Health Institute','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(36,36,87,'Dr','FP2030 East and Southern Africa Regional Hub','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(37,37,195,'Dr','Baines Occupational Health Services','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(38,38,87,'Ms','University of New Mexico Health Sciences Center - Project ECHO Institute','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(39,39,87,'Mr','Nutrition International','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(40,40,87,'Mr','Action Against Hunger','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(41,41,182,'Dr','Ministry of Education and Sports','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(42,42,173,'Mrs','Nutrition International','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(43,43,87,'Mr','FP2030','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(44,44,173,'Ms','SCIEX LIMITED','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(45,45,173,'Dr','Africa Academy for Public Health','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(46,46,173,'Ms','Ifakara Health Institute','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(47,47,173,'Dr','Ifakara Health Institute (IHI)','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(48,48,87,'Ms','Talk AB(M)R/Int Society for Infectious Diseases','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(49,49,57,'Mr','Action Against Hunger','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(50,50,194,'Ms','Thermo Fisher Scientific','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(51,51,195,'Mrs','Axis Solutions Africa','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(52,52,182,'Dr','Target Malaria','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(53,53,39,'Dr','World Health Organization','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(54,54,173,'Mr','ARC','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(55,55,173,'Dr','URC HEARD Project','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(56,56,185,'Esq','University Research Co. LLC','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(57,57,87,'Dr','KAKAMEGA COUNTY GENERAL HOSPITAL-KENYA','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(58,58,182,'Dr','Innovations for Development (I4DEV)','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(59,59,185,'Ms','Project ECHO','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(60,60,173,'Dr','Ministry of Health','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(61,61,87,'Dr','vyashamba','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(62,62,87,'Dr','UNM ECHO Africa','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(63,63,87,'Dr','Kakamega County General Hospital - Kenya','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(64,64,195,'Dr','TARSC/EQUINET','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(65,65,173,'Dr','KIDH,RUCHBO','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(66,66,195,'Mr','SEATINI/EQUINET','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(67,67,173,'Mr','NM-AIST','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(68,68,173,'Ms','Ministry of Health','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(69,69,87,'Ms','Pan African Climate Justice Alliance (PACJA)','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(70,70,195,'Mr','Axis Solutions','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(71,71,87,'Ms','Nutrition International','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(72,72,194,'Dr','Kitwe Teaching Eye Hospital, Kitwe, Zambia','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(73,73,173,'Mr','Prime Minister\'s Office','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(74,74,195,'Dr','Kwekwe city council','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(75,75,87,'Dr','Kakamega County General Hospital','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(76,76,173,'Dr','URC HEARD','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(77,77,87,'Dr','MOH Kenya/ Peek vision','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(78,78,87,'Mr','Nutrition International','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(79,79,194,'Mr','Ministry of Health','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(80,80,87,'Dr','MOH Kenya','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(81,81,87,'Dr','Global One Health Advocacy Affairs','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL),(82,82,173,'Mr','Tanzania Field Epidemiology and Laboratory Training Program','2024-06-13 23:18:45','2024-06-13 23:18:45',NULL);
/*!40000 ALTER TABLE `participant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permission` varchar(45) NOT NULL,
  `permission_code` varchar(45) NOT NULL,
  `system_code` varchar(45) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `permission` (`permission`),
  UNIQUE KEY `permission_code` (`permission_code`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
INSERT INTO `permission` VALUES (1,'View Dashboard','VIEW_DASHBOARD','ECSA_CONF','2024-05-25 14:09:54','2024-05-25 14:09:54'),(2,'Add User','ADD_USER','ECSA_CONF','2024-05-25 14:10:33','2024-05-25 14:10:33'),(3,'View User','VIEW_USER','ECSA_CONF','2024-05-25 14:10:33','2024-05-25 14:10:33'),(4,'Update User','UPDATE_USER','ECSA_CONF','2024-05-25 14:10:33','2024-05-25 14:10:33'),(5,'Delete User','DELETE_USER','ECSA_CONF','2024-05-25 14:10:33','2024-05-25 14:10:33'),(6,'View Roles','VIEW_ROLE','ECSA_CONF','2024-05-25 14:10:47','2024-05-25 14:10:47'),(7,'Add Role','ADD_ROLE','ECSA_CONF','2024-05-25 14:10:47','2024-05-25 14:10:47'),(8,'Update Role','UPDATE_ROLE','ECSA_CONF','2024-05-25 14:10:47','2024-05-25 14:10:47'),(9,'Delete Role','DELETE_ROLE','ECSA_CONF','2024-05-25 14:10:47','2024-05-25 14:10:47'),(10,'View Permission','VIEW_PERMISSION','ECSA_CONF','2024-05-25 14:11:57','2024-05-25 14:11:57'),(11,'Add Permission','ADD_PERMISSION','ECSA_CONF','2024-05-25 14:11:57','2024-05-25 14:11:57'),(12,'Update Permission','UPDATE_PERMISSION','ECSA_CONF','2024-05-25 14:11:57','2024-05-25 14:11:57'),(13,'Delete Permission','DELETE_PERMISSION','ECSA_CONF','2024-05-25 14:11:57','2024-05-25 14:11:57'),(14,'View Organiser','VIEW_ORGANISER','ECSA_CONF','2024-05-25 14:22:50','2024-05-25 14:22:50'),(15,'Add Organiser','ADD_ORGANISER','ECSA_CONF','2024-05-25 14:22:50','2024-05-25 14:22:50'),(16,'Update Organiser','UPDATE_ORGANISER','ECSA_CONF','2024-05-25 14:22:50','2024-05-25 14:22:50'),(17,'Delete Organiser','DELETE_ORGANISER','ECSA_CONF','2024-05-25 14:22:50','2024-05-25 14:22:50'),(18,'View Event Type','VIEW_EVENT_TYPE','ECSA_CONF','2024-05-25 14:39:54','2024-05-25 14:39:54'),(19,'Add Event Type','ADD_EVENT_TYPE','ECSA_CONF','2024-05-25 14:39:54','2024-05-25 14:39:54'),(20,'Update Event Type','UPDATE_EVENT_TYPE','ECSA_CONF','2024-05-25 14:39:54','2024-05-25 14:39:54'),(21,'Delete Event Type','DELETE_EVENT_TYPE','ECSA_CONF','2024-05-25 14:39:54','2024-05-25 14:39:54'),(22,'View Participant','VIEW_PARTICIPANT','ECSA_CONF','2024-05-25 15:41:51','2024-05-25 15:41:51'),(23,'Add Participant','ADD_PARTICIPANT','ECSA_CONF','2024-05-25 15:41:51','2024-05-25 15:41:51'),(24,'Update Participant','UPDATE_PARTICIPANT','ECSA_CONF','2024-05-25 15:41:51','2024-05-25 15:41:51'),(25,'Delete Participant','DELETE_PARTICIPANT','ECSA_CONF','2024-05-25 15:41:51','2024-05-25 15:41:51'),(26,'View Event','VIEW_EVENT','ECSA_CONF','2024-05-26 06:37:19','2024-05-26 06:37:19'),(27,'Add Event','ADD_EVENT','ECSA_CONF','2024-05-26 06:37:19','2024-05-26 06:37:19'),(28,'Update Event','UPDATE_EVENT','ECSA_CONF','2024-05-26 06:37:19','2024-05-26 06:37:19'),(29,'Delete Event','DELETE_EVENT','ECSA_CONF','2024-05-26 06:37:19','2024-05-26 06:37:19');
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(45) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `role` (`role`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Administrator','Overall system administrator','2024-05-25 14:14:02','2024-05-28 07:23:00'),(2,'Participant','Participant','2024-06-13 07:43:51','2024-06-13 07:43:51');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_permission`
--

DROP TABLE IF EXISTS `role_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_id` (`role_id`,`permission_id`),
  KEY `permission_id` (`permission_id`),
  CONSTRAINT `role_permission_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  CONSTRAINT `role_permission_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permission` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_permission`
--

LOCK TABLES `role_permission` WRITE;
/*!40000 ALTER TABLE `role_permission` DISABLE KEYS */;
INSERT INTO `role_permission` VALUES (1,1,1,'2024-05-25 14:15:40','2024-05-25 14:15:40'),(2,1,2,'2024-05-25 14:15:48','2024-05-25 14:15:48'),(3,1,3,'2024-05-25 14:15:55','2024-05-25 14:15:55'),(4,1,4,'2024-05-25 14:15:58','2024-05-25 14:15:58'),(5,1,5,'2024-05-25 14:16:02','2024-05-25 14:16:02'),(6,1,6,'2024-05-25 14:16:05','2024-05-25 14:16:05'),(7,1,7,'2024-05-25 14:16:10','2024-05-25 14:16:10'),(8,1,8,'2024-05-25 14:16:15','2024-05-25 14:16:15'),(9,1,9,'2024-05-25 14:16:22','2024-05-25 14:16:22'),(10,1,10,'2024-05-25 14:16:29','2024-05-25 14:16:29'),(11,1,11,'2024-05-25 14:16:33','2024-05-25 14:16:33'),(12,1,12,'2024-05-25 14:16:37','2024-05-25 14:16:37'),(13,1,13,'2024-05-25 14:16:41','2024-05-25 14:16:41'),(14,1,14,'2024-05-25 14:27:07','2024-05-25 14:27:07'),(15,1,15,'2024-05-25 14:27:12','2024-05-25 14:27:12'),(16,1,16,'2024-05-25 14:27:20','2024-05-25 14:27:20'),(17,1,17,'2024-05-25 14:27:26','2024-05-25 14:27:26'),(20,1,18,'2024-05-25 14:41:49','2024-05-25 14:41:49'),(21,1,19,'2024-05-25 14:41:56','2024-05-25 14:41:56'),(22,1,20,'2024-05-25 14:42:03','2024-05-25 14:42:03'),(23,1,21,'2024-05-25 14:42:10','2024-05-25 14:42:10'),(25,1,22,'2024-05-25 15:44:31','2024-05-25 15:44:31'),(26,1,23,'2024-05-25 15:44:38','2024-05-25 15:44:38'),(27,1,24,'2024-05-25 15:44:48','2024-05-25 15:44:48'),(28,1,25,'2024-05-25 15:44:55','2024-05-25 15:44:55'),(30,1,26,'2024-05-26 06:40:19','2024-05-26 06:40:19'),(31,1,27,'2024-05-26 06:40:28','2024-05-26 06:40:28'),(32,1,28,'2024-05-26 06:40:30','2024-05-26 06:40:30'),(36,1,29,'2024-06-03 11:40:43','2024-06-03 11:40:43'),(37,2,1,'2024-06-14 06:30:05','2024-06-14 06:30:05');
/*!40000 ALTER TABLE `role_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_event`
--

DROP TABLE IF EXISTS `user_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `participant_category` varchar(100) DEFAULT NULL,
  `confirm_attendance` tinyint(1) NOT NULL DEFAULT 0,
  `event_badge` tinyint(1) NOT NULL DEFAULT 0,
  `event_payment` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `event_id` (`event_id`),
  KEY `id` (`id`),
  KEY `participant_category` (`participant_category`),
  CONSTRAINT `user_event_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_event_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_event`
--

LOCK TABLES `user_event` WRITE;
/*!40000 ALTER TABLE `user_event` DISABLE KEYS */;
INSERT INTO `user_event` VALUES (1,1,2,'Organiser',0,0,0,'2024-06-13 21:49:18','2024-06-13 21:49:18'),(2,2,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(3,3,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(4,4,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(5,5,2,'Delegate',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(6,6,2,'Delegate',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(7,7,2,'Delegate',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(8,8,2,'Delegate',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(9,9,2,'Delegate',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(10,10,2,'Delegate',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(11,11,2,'Secretariat',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(12,12,2,'Secretariat',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(13,13,2,'Secretariat',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(14,14,2,'Secretariat',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(15,15,2,'Secretariat',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(16,16,2,'Secretariat',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(17,17,2,'Secretariat',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(18,18,2,'Secretariat',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(19,19,2,'Secretariat',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(20,20,2,'Secretariat',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(21,21,2,'Exhibitor',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(22,22,2,'Exhibitor',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(23,23,2,'Exhibitor',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(24,24,2,'Exhibitor',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(25,25,2,'Exhibitor',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(26,26,2,'Exhibitor',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(27,27,2,'Exhibitor',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(28,28,2,'Exhibitor',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(29,29,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(30,30,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(31,31,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(32,32,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(33,33,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(34,34,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(35,35,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(36,36,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(37,37,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(38,38,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(39,39,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(40,40,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(41,41,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(42,42,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(43,43,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(44,44,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(45,45,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(46,46,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(47,47,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(48,48,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(49,49,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(50,50,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(51,51,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(52,52,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(53,53,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(54,54,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(55,55,2,'Participant',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(56,56,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(57,57,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(58,58,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(59,59,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(60,60,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(61,61,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(62,62,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(63,63,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(64,64,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(65,65,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(66,66,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(67,67,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(68,68,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(69,69,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(70,70,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(71,71,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(72,72,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(73,73,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(74,74,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(75,75,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(76,76,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(77,77,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(78,78,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(79,79,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(80,80,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(81,81,2,'Presenter',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07'),(82,82,2,'Student',1,0,0,'2024-06-13 22:39:07','2024-06-13 22:39:07');
/*!40000 ALTER TABLE `user_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`role_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_role_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `user_role_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,1,1,'2024-06-13 21:48:03','2024-06-13 21:48:03'),(2,2,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(3,3,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(4,4,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(5,5,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(6,6,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(7,7,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(8,8,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(9,9,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(10,10,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(11,11,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(12,12,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(13,13,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(14,14,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(15,15,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(16,16,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(17,17,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(18,18,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(19,19,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(20,20,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(21,21,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(22,22,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(23,23,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(24,24,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(25,25,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(26,26,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(27,27,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(28,28,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(29,29,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(30,30,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(31,31,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(32,32,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(33,33,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(34,34,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(35,35,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(36,36,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(37,37,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(38,38,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(39,39,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(40,40,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(41,41,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(42,42,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(43,43,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(44,44,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(45,45,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(46,46,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(47,47,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(48,48,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(49,49,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(50,50,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(51,51,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(52,52,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(53,53,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(54,54,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(55,55,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(56,56,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(57,57,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(58,58,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(59,59,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(60,60,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(61,61,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(62,62,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(63,63,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(64,64,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(65,65,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(66,66,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(67,67,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(68,68,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(69,69,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(70,70,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(71,71,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(72,72,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(73,73,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(74,74,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(75,75,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(76,76,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(77,77,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(78,78,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(79,79,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(80,80,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(81,81,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(82,82,2,'2024-06-13 22:34:13','2024-06-13 22:34:13'),(83,84,2,'2024-06-14 02:22:51','2024-06-14 02:22:51'),(84,85,2,'2024-06-14 02:45:55','2024-06-14 02:45:55');
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `email` varchar(45) NOT NULL,
  `hashed_password` varchar(200) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Joel','Kumwenda','+265999371088','jkumwenda@gmail.com','$2b$12$ZLqV.j82RF8rLcXJlUs8JO2X8WoMgF/TkDmGv61/e241PhrmHQ/du',1,'2024-05-25 14:03:53','2024-06-13 21:46:43'),(2,'Shiva','Murugasampillay','0041792546824','shivapublichealth@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(3,'Wangui','Thang\'a','+254721380886','wangui.thanga@aku.edu','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(4,'John Maganga','Tole','+254 729 044 390','jtole@icloud.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(5,'Justus','Bundi','+254724556733','justus.bundi@health.go.ke','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(6,'Adam Simon','Kanyonyi','0787006467','adam@ecsahc.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(7,'Litha Lukhanyo','Klaas','+27 609546601','lithaklaas50@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(8,'Bongiwe Prudence','Malinga','+26876583579','malingabongiwe15@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(9,'Nyambura','Moremi','+255713098555','nyamburasogone@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(10,'Cebisile','Ntshangase-Shabangu','+26876174838','cebimgazi@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(11,'Nelson','Masese','+254720936386','aruya.nelson19@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(12,'Jones','Kaponda','0695324655','jkmasiye@ecsahc.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(13,'Doris','Night','0722736368','dnight@kemri.go.ke','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(14,'Lillian Brenda','Njuba','+255756535428','lnjuba@ecsahc.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(15,'Thandile Sbulele','Sawula','+27789180100','t.sawula87@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(16,'Pastory William','Sekule','0754305366','pastory.sekule@afyaplus.or.tz','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(17,'Gutama Mokonnen','Shui','0911337925','dfc-bo@et-actionagainsthunger.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(18,'Sibusiso','Sibandze','+255743998217','s_sibandze@ecsahc.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(19,'Sonwabile Jabulile','Xaba','+27797899232','sonijx@yahoo.co.uk','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(20,'Siniketiwe Edith','Zwane','+268 76084136','siniketiwemdaka@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(21,'Febronne Beryl','ACHIENG','0722697579','febronne.achieng@amref.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(22,'Amref Health','Africa','0722650807','catherine.ombasa@amref.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(23,'Ninabina','Davie','5','ninabina.davie@amref.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(24,'Sheila','Lumumba','+254717627468','Sheila.Lumumba@amref.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(25,'Anne Wangui','Maina','0715993321','awmaina22@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(26,'Chris','Minja','+255754073586','CHRIS@ECSAHC.ORG','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(27,'Wairimu','Muthaka','0713379800','wairimu.muthaka@amref.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(28,'Collins B','Otieno','1','collins.otieno@amref.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(29,'Irene','Alenga','3','irene.alenga@amref.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(30,'Sandra','Chilengi-Sakala','0977533554','sandrasakala@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(31,'Francis LM','HYERA','+27 82 307 2336','Francishyera@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(32,'Vama','Jele','76258705','vamajele@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(33,'Grace Phinehas','Kahabi','0764566284','grace@sciexafrica.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(34,'Steven','Lanting','0622442240','steven.lanting@savethechildren.nl','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(35,'Dickson Wilson','Lwetoijera','786862818','dwilson@ihi.or.tz','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(36,'Sheila Nyawira','Macharia','+254-722-522787','smacharia@fp2030.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(37,'FLORENCE of Health and Child Care','MOYO','+263776319128','flormoyo@iwayafrica.co.zw','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(38,'Christine W.','Mugo-Sitati','+254721319460','cmugositati@salud.unm.edu','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(39,'Titus','Mung\'ou','0722866830','tmungou@Nutritionintl.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(40,'Alvin Tofler','Munyasia','0722542880','amunyasia@actionagainsthunger.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(41,'Safina Kisu','Museene','0774463085','safinahm2002@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(42,'Laureta Lucas','Mushi','0688479742','llucas@nutritionintl.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(43,'Twambilire Harris','Mwabungulu','+265999152454','TMwabungulu@fp2030.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(44,'Zulfa Ramadhani','Nzali','0753230180','zulfa@sciexafrica.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(45,'Mary Mwanyika','Sando','0713269063','mmwanyika.sando@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(46,'Felista Tarimo','Simon','+255612601488','ftarimo@ihi.or.tz','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(47,'Brian B.','Tarimo','+255 756 220 287','btarimo@ihi.or.tz','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(48,'Constance Georgina','Walyaro','+254722937102','connie@talkabr.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(49,'Asmamaw Eshete','Alemu','0913460095','Aalemu@et-actionagainsthunger.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(50,'Kasanda','Chiwele','+260979035700','kasanda.chiwele@thermofisher.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(51,'Janette Chandapiwa','Maredza','+263771180001','jmaredza@axissol.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(52,'Charles Francis','Mugoya','+256772966662','mugoyac@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(53,'Ambrose Otau','Talisuna','+242057977908','talisunaa@who.int','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(54,'James Tumbikani','Mlagha','0783043645','jmlagha@ecsahc.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(55,'Jim','Sherry','4','jsherry@urc-chs.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(56,'Damien','Chevaillier','13526148686','dchevaillier@urc-chs.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(57,'LINET KANAGA','ELAMENYA','+254 724883203','kanaga.lyn@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(58,'Danny Devito','Gotto','+256703149786','gdanny2000@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(59,'Amy','Groom','1 5053663976','agroom@salud.unm.edu','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(60,'JAMES ANDREW','HELLAR','0716960846','hellarjay@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(61,'Vic','Kesh','0721361621','vyashamba@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(62,'Caroline','Kisia','+254722960433','Ckisia@salud.unm.edu','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(63,'Emmanuel Kipkurui','Kurgat','+254716304727','manuhkurui@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(64,'Rene','Loewenson','+27721831265','rene@tarsc.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(65,'Bature Ibrahim','Lukiko','+255757909399','baturelukiko@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(66,'Rangarirai','Machemedze','+263772916879','rangarirai.machemedze@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(67,'Asifiwe John','Makawa','+255743192293','makawaa@nm-aist.ac.tz','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(68,'Elizabeth Ezekiel','Malingumu','+255742874815','elizabeth.malingumu20@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(69,'Isabella','Mongina','+254786555303','mongina.isabelle@pacja.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(70,'Peter','Mukudzavhu','+12404185331','peter@thrivesolutionsafrica.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(71,'Lucy','Murage','0722377677','lmurage@NUTRITIONINTL.ORG','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(72,'Consity','Mwale','+260967807080','consitymwale@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(73,'Mololo Noah','Mwanjala','+255753391612','noahmololo@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(74,'Sheunesu','Ngwenya','+263 773 867150','ngwenyasheunesu@yahoo.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(75,'Sharon Kadeka','Oginda','0724716641','kadoginda@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(76,'Emily','Peca','2','epeca@urc-chs.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(77,'Hillary K.','Rono','+254722627207','hkrono75@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(78,'Arthur','Samson','0728903575','asamson@nutritionintl.org','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(79,'Vichael','Silavwe','+260977365034','vichaelsilavwe@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(80,'BENARD WANYAMA','WAMBULWA','+254726708735','bdwanyama@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(81,'Victor','Yamo','+254738361631','dryamovic@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(82,'Jonhas Masatu','Malija','+255718707498','masatu.jm@gmail.com','password',0,'2024-06-13 22:31:17','2024-06-13 22:31:17'),(84,'Joel','Kumwenda','0939393','test@gmail.com','$2b$12$uw7T6Gppnq9.O/q2fMHm.OwnYeCUqyPDJxTufT3rY5u6tGrtfg3Z6',1,'2024-06-14 02:22:51','2024-06-14 02:22:51'),(85,'Joel','Kumwenda','0996460010','online@pmra.mw','$2b$12$VmHfwqVI97jUTvgVP4fN1uQMOpDV7QrAypDcUMZwsNXrTkUKbdPVu',1,'2024-06-14 02:45:55','2024-06-14 02:45:55');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-15 19:29:44
