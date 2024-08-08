-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: social_media_links
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `links`
--

DROP TABLE IF EXISTS `links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `links` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `links`
--

LOCK TABLES `links` WRITE;
/*!40000 ALTER TABLE `links` DISABLE KEYS */;
INSERT INTO `links` VALUES (55,'gava','https://www.linkedin.com','güncelleme deneme'),(56,'Google','https://www.google.com','Arama motoru'),(57,'GitHub','https://www.github.com','Yazılım geliştirme platformu'),(58,'Stack Overflow','https://www.stackoverflow.com','Programcılar için soru-cevap sitesi'),(59,'Twitter','https://www.twitter.com','Sosyal medya platformu'),(60,'Facebook','https://www.facebook.com','Sosyal medya platformu'),(61,'LinkedIn','https://www.linkedin.com','Profesyonel ağ kurma platformu'),(62,'Reddit','https://www.reddit.com','Topluluk ve haber sitesi'),(63,'YouTube','https://www.youtube.com','Video paylaşım sitesi'),(64,'Instagram','https://www.instagram.com','Fotoğraf ve video paylaşım uygulaması'),(65,'Pinterest','https://www.pinterest.com','Görsel keşif ve fikir paylaşım platformu'),(67,'Telegram','https://www.telegram.org','Mesajlaşma ve sohbet uygulaması'),(68,'Snapchat','https://www.snapchat.com','Görüntülü mesajlaşma ve sosyal medya uygulaması'),(69,'Quora','https://www.quora.com','Bilgi ve soru-cevap platformu'),(70,'Medium','https://www.medium.com','Yazı paylaşım ve blog platformu'),(71,'Hacker News','https://news.ycombinator.com','Teknoloji ve girişimcilik haberleri'),(74,'GitLab','https://www.gitlab.com','Yazılım geliştirme ve CI/CD platformu'),(103,'LinkedInd','https://www.linkedin.com','deneme'),(104,'face','https://www.facebook.com','deneme'),(105,'a','https://www.linkedin.com','a'),(106,'b','https://www.linkedin.com','b'),(107,'c','https://www.linkedin.com','c'),(108,'d','https://www.linkedin.com','d'),(109,'e','https://www.linkedin.com','e');
/*!40000 ALTER TABLE `links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'aylin','123'),(2,'derya','123');
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

-- Dump completed on 2024-08-08 16:47:51
