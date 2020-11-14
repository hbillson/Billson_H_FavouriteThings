-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 14, 2020 at 06:34 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_favthings`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_favthings`
--

DROP TABLE IF EXISTS `tbl_favthings`;
CREATE TABLE IF NOT EXISTS `tbl_favthings` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(60) COLLATE utf16_swedish_ci NOT NULL,
  `Description` text COLLATE utf16_swedish_ci NOT NULL,
  `Image_URL` varchar(60) COLLATE utf16_swedish_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf16 COLLATE=utf16_swedish_ci;

--
-- Dumping data for table `tbl_favthings`
--

INSERT INTO `tbl_favthings` (`ID`, `Name`, `Description`, `Image_URL`) VALUES
(1, 'Kenobi', 'My pet cat, Kenobi (yes, named after the Jedi...) is one of my favourite things. He was born on September 17th, 2019, when my rooomate\'s cat had four kittens while I was at home - so I\'ve been raising him since he was born! He is incredibly well-socialized, so he\'s very popular among my friends and family since he\'s unusually comfortable with being picked up and cuddling. The downside to this is that he\'s very clingy - I get woken up by him crying at my bedroom door quite often at night because he wants to sleep on my bed. ', 'images/kenobi.jpg'),
(2, 'The Moon', 'Since I was little, I\'ve been fascinated with space, celestial bodies, and the Moon especially. When the Moon is very bright, I find myself staring out my window or standing outside just to look at it for no real reason. I hope I can visit it someday. (The pictured image is a 3D model of the Moon that I created in Cinema 4D for an earlier project.)', 'images/moon.jpg'),
(4, '(A)manda', 'My favourite person to talk to and Kenobi\'s co-parent, she\'s someone very important to me :) (She also told me she \"better be\" on this page or else...)', 'images/amanda.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
