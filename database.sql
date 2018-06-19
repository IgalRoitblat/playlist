-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 19, 2018 at 06:10 AM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `Playlist`
--

-- --------------------------------------------------------

--
-- Table structure for table `playlists`
--

CREATE TABLE `playlists` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `image` varchar(1000) CHARACTER SET hp8 COLLATE hp8_bin NOT NULL,
  `songs` text CHARACTER SET hp8 COLLATE hp8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `playlists`
--

INSERT INTO `playlists` (`id`, `name`, `image`, `songs`) VALUES
(1, 'Static & Ben El', '../playlist/playlist_images/BenEl_192x752.jpg', '[{\"name\":\"Static & Ben El - Namaste.mp3\",\"url\":\"https://docs.google.com/uc?id=19H3vHUe3-Kz8VaMWnj-38BmVf0xQR8gf\"},{\"name\":\"Static & Ben El - Kawai.mp3\",\"url\":\"https://docs.google.com/uc?id=1bEht7Qv0oq8pFURA3-xerfEjMxuOyJ5U\"},{\"name\":\"Static & Ben El - Barbie.mp3\",\"url\":\"https://docs.google.com/uc?id=15zeWo6anSQTkQBOQ4pSK0_elTcWDcKuR\"}]'),
(2, 'Britney Spears', '../playlist/playlist_images/britney-spears-babay-one-more-time-1297269172-list-handheld-0.jpg', '[{\"name\":\"Britney Spears - Work Bitch.mp3\",\"url\":\"https://docs.google.com/uc?id=11FwgrXe6k4aNcCaNmbm2PtIBPAEUNRm9\"},{\"name\":\"Britney Spears - Baby One More Time.mp3\",\"url\":\"https://docs.google.com/uc?id=1BDFOQSdlwQ3iL4s2oJP28nU0P5B4HC07\"}]');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `playlists`
--
ALTER TABLE `playlists`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
