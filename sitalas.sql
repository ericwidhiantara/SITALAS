-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 13, 2019 at 05:01 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sitalas`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tlp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `tlp`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Dewok Satria', 'windowsdewa@gmail.com', '082340803646', '$2y$10$yjE52rscBV88e1PV12l5j.KaKvCFa4mxBlWNliGHVktCJc/2CQIKq', '7m6rkL5PIQ6vwAVE5uOZtyRfvWKPTUCSZxKRhr8fgke6BJk6FA9TzBYzaJRB', '2019-01-31 22:24:33', '2019-02-14 03:14:38');

-- --------------------------------------------------------

--
-- Table structure for table `ds_setting`
--

CREATE TABLE `ds_setting` (
  `id` int(4) NOT NULL,
  `ds_short` varchar(30) DEFAULT NULL,
  `ds_long` varchar(100) DEFAULT NULL,
  `copyright` varchar(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_01_31_142303_create_admin_table', 1),
(4, '2019_03_21_173744_add_username_field_to_users_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('windowsdewa@gmail.com', '$2y$10$rboWA2r4n0cR1WvHdrDMWuDlDffm5IIN8uh7A7PrJ1mHIbrgUy7hS', '2019-03-12 09:36:51');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `nim` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `nim`) VALUES
(1, 'Dewa Ketut Satriawan', 'dewok@example.com', NULL, '$2y$10$j1ykawodrUlWWN.A2xCcru88UOQwWoEZ2J3vStPSkkwseY7fJtysy', 'qCw88uaugfJag5WSnSMV50isOio39rTdaS3Uc4aRYUquBYtIV3NrBle0I22l', '2019-01-31 08:03:26', '2019-03-15 08:21:14', '1615051046'),
(2, 'Budi Artawan', 'budi@example.com', NULL, '$2y$10$/oSMm5G0l24xg0qpXGaMouJ5TTxfuPJHSQgSvtuAfXIi3Gxl4j2Z.', 'amLt1I40LcSHnsoVMhQqPV8meSn1IG8SrQRXFixOntunr6mqhfxYNSYPCvuM', '2019-03-21 11:31:44', '2019-03-21 11:31:44', '1615051047'),
(3, 'Satria', 'satria@example.com', NULL, '$2y$10$ltrQda1UFnNr6aKJIh5f5.M4NDuA4lcx6nZL8CH64YDL3IatyBAFu', 'vf1sjD1HVkM43lhXKD6JTblaAs6cVYyZRQoEraFN5hmT940APK9stitAEOxr', '2019-03-23 01:58:34', '2019-03-23 01:58:34', '1615051076'),
(4, 'Panji', 'panji@example.com', NULL, '$2y$10$J8AWVHip4cHqmUSnPpsPVO8EPxEineBovwGfdW9UtZ6Zg/j.ywihS', NULL, '2019-03-23 03:03:48', '2019-03-23 03:03:48', '1615051044'),
(6, 'Suryase', 'suryase@aja.com', NULL, '$2y$10$EU217LEmwxUQrD3A/I3ioem90sdsxr3OnoxfwPJBU25JV7Tjo.FTq', 'SpDxcEkZXsmNptLwqBAYcEYkVwa20wiLEz6y7BOTXIgXb96CUSSjdTEQjozT', '2019-03-23 03:03:03', '2019-03-23 03:03:03', '1615051078'),
(7, 'Yusril iza mahendra', 'yusril@example.com', NULL, '$2y$10$XufzovnhCvcVcl/uw0moSOpXPyU30QWPGR3nKF6ZSdeJqw19ISm/y', NULL, '2019-03-24 00:03:42', '2019-03-24 00:03:42', '1615051088'),
(8, 'Aditzia', 'adit@example.com', NULL, '$2y$10$88I2TjeN7R7gvXg43HmAp.R2dq4gkmMd/R/kniZSQn8tA7IIcqWhi', NULL, '2019-03-24 04:03:39', '2019-03-24 04:03:39', '16150547'),
(9, 'Yanti', 'yanti@example.com', NULL, '$2y$10$FhO8Xhou20LHObgHvPtaeu.fO19NaqvBUum9PAYc9vVe7wimOy71W', NULL, '2019-03-24 05:03:03', '2019-03-24 05:03:03', '1615051077');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `ds_setting`
--
ALTER TABLE `ds_setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ds_setting`
--
ALTER TABLE `ds_setting`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
