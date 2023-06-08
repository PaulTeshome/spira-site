-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2023 at 03:27 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spira_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `admin_id` int(11) NOT NULL,
  `admin_username` varchar(300) NOT NULL,
  `admin_email` varchar(300) NOT NULL,
  `admin_password` varchar(600) NOT NULL,
  `password_reset_token` varchar(300) DEFAULT NULL,
  `password_reset_expires` bigint(20) DEFAULT NULL,
  `added_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`admin_id`, `admin_username`, `admin_email`, `admin_password`, `password_reset_token`, `password_reset_expires`, `added_by`) VALUES
(1, 'System_master', 'paulman7792@gmail.com', '$2a$10$dQHsXGnyDvuJldJIlg0gfu7IBks0WAeE2RgSSyz03uQESlg34dtIW', NULL, NULL, 0),
(2, 'Kevin_J', 'Kevin@spiraagency.com', '$2a$10$v.VBfYJ3u/Om0R9f4nSpxOdfxMbVZjjxJW6gd6ghHGKuoREOZsTGO', NULL, NULL, 0),
(3, 'ptnew', 'pt@gmail.com', '$2a$10$v.VBfYJ3u/Om0R9f4nSpxOdfxMbVZjjxJW6gd6ghHGKuoREOZsTGO', NULL, NULL, 2),
(4, 'Red_B', 'rb@gmail.com', '$2a$10$v.VBfYJ3u/Om0R9f4nSpxOdfxMbVZjjxJW6gd6ghHGKuoREOZsTGO', NULL, NULL, 3),
(5, 'Jared_D', 'JD@gmail.com', '$2a$10$v.VBfYJ3u/Om0R9f4nSpxOdfxMbVZjjxJW6gd6ghHGKuoREOZsTGO', NULL, NULL, 4),
(8, 'Jared_D23', 'JD23@gmail.com', '$2a$10$v.VBfYJ3u/Om0R9f4nSpxOdfxMbVZjjxJW6gd6ghHGKuoREOZsTGO', NULL, NULL, 4),
(9, 'aa', 'aa@gmail.com', '$2a$10$69OqkDVjetsEI4ReJCMH6uDaKNLT0DBZ42xhW//i3O7DdnXYpavCm', NULL, NULL, 5);

-- --------------------------------------------------------

--
-- Table structure for table `hire_requests`
--

CREATE TABLE `hire_requests` (
  `request_id` int(11) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `email` varchar(300) NOT NULL,
  `comp_name` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `chosen_service` varchar(200) NOT NULL,
  `specify` varchar(500) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hire_requests`
--

INSERT INTO `hire_requests` (`request_id`, `first_name`, `last_name`, `email`, `comp_name`, `phone`, `chosen_service`, `specify`, `status`) VALUES
(1, 'Paulos', 'Teshome', 'paulman7792@gmail.com', 'ptComp', '+25192936215', 'accounting management', 'This is a demo specification. This is a demo specification. This is a demo specification. This is a demo specification.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `main_data`
--

CREATE TABLE `main_data` (
  `data_id` int(11) NOT NULL,
  `comp_motto` varchar(500) NOT NULL,
  `comp_mission` varchar(500) NOT NULL,
  `comp_abt` varchar(600) NOT NULL,
  `comp_email` varchar(500) NOT NULL,
  `comp_phone1` varchar(200) NOT NULL,
  `comp_phone2` varchar(200) NOT NULL,
  `comp_location` varchar(500) NOT NULL,
  `insta_link` varchar(500) NOT NULL,
  `other_socials` varchar(500) DEFAULT NULL,
  `recipient_email` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `main_data`
--

INSERT INTO `main_data` (`data_id`, `comp_motto`, `comp_mission`, `comp_abt`, `comp_email`, `comp_phone1`, `comp_phone2`, `comp_location`, `insta_link`, `other_socials`, `recipient_email`) VALUES
(1, 'EMPOWERING YOUR BRAND IN THE DIGITAL SPACE ', 'At Spira, our mission is to provide personalized and result-driven solutions to help our clients achieve their business goals. We believe in building strong relationships with our clients and working closely with them to understand their unique needs and challenges.', 'Welcome to Spira, your go-to digital marketing agency for all your social media and accounting management needs. We specialize in content creation, marketing, and graphic design to help your brand stand out in the digital world. \r\n\r\nAt Spira, our mission is to provide personalized and results-driven solutions to help our clients achieve their business goals. We believe in building strong relationships with our clients and working closely with them to understand their unique needs and challenges.', 'info@spiraagency.com', '+46731443749', '+46762727223', 'Stockholm, Sweden', 'https://instagram.com/spiraagency?igshid=MzRlODBiNWFlZA==', 'https://twitter.com', 'paulman7792@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `project_id` int(11) NOT NULL,
  `project_title` varchar(500) NOT NULL,
  `project_description` varchar(500) NOT NULL,
  `project_image` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`project_id`, `project_title`, `project_description`, `project_image`) VALUES
(1, 'project 1', 'This is a demo of the project description for project 1.', '1685981167033-stockholm1.jpg'),
(2, 'Project 2', 'This is a demo of the project description for project 2', '1685980326051-pc pic.jpg'),
(7, 'Project 3', 'This is a demo of the project description for project 3', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `service_id` int(11) NOT NULL,
  `service_name` varchar(500) NOT NULL,
  `service_description` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`service_id`, `service_name`, `service_description`) VALUES
(1, 'Social Media Management', 'In today\'s digital age, social media is a crucial component of any successful marketing strategy. Our social media management service takes the hassle out of managing your social media accounts, enabling you to focus on growing your business. Our team of experts will create engaging content, post regularly, and analyze user engagement to ensure your social media accounts are reaching their full potential.'),
(2, 'Account Management', ' At our company, we understand that maintaining strong relationships with your clients is essential to your success. Our account management service takes a proactive approach to client relationships, ensuring that your clients feel valued and heard. We\'ll handle the day-to-day management of your accounts, freeing up your time to focus on growing your business.'),
(3, 'Content Creation', 'At Spira, we know that high-quality content is essential to engaging your audience and driving traffic to your website. Our content creation service takes the hassle out of developing engaging content that resonates with your target market. Our team of talented writers and designers will craft custom content that showcases your brand and captures the attention of your audience.'),
(4, 'Marketing', 'Marketing is the lifeblood of any successful business. Our marketing service takes a comprehensive approach to promoting your brand, from market research to advertising campaigns to public relations. We\'ll work with you to develop a customized marketing strategy that maximizes your ROI and helps you achieve your business goals.'),
(5, 'Graphic Design', ' At Spira, we believe that great design is the cornerstone of a successful brand. Our graphic design service takes your brand to the next level with stunning visuals that capture attention and engage your audience. From logos to marketing materials to website design, our team of experts will deliver custom designs that reflect your brand\'s unique personality and style.');

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `member_id` int(11) NOT NULL,
  `member_name` varchar(200) NOT NULL,
  `member_position` varchar(400) NOT NULL,
  `member_image` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`member_id`, `member_name`, `member_position`, `member_image`) VALUES
(1, 'Sidiki Daiwara', 'Creative Director', 'stockholm1.jpg'),
(2, 'Evelina Goussi\r\n', 'Graphic Designer', NULL),
(3, 'Kevin Jabro\r\n', 'Marketer', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `testimonial_id` int(11) NOT NULL,
  `testimonial_owner` varchar(200) NOT NULL,
  `testimonial_text` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`testimonial_id`, `testimonial_owner`, `testimonial_text`) VALUES
(1, 'unknown user 1', 'Best marketing agency to work with. Amazing services Best marketing agency to work with. Amazing services Best marketing agency to work with. Amazing services Best marketing agency to work with. Amazing services Best marketing agency to work with. Amazing services\"\n'),
(2, 'unknown user 2 new', 'this is a demo testimonial');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`admin_id`,`admin_username`,`admin_email`),
  ADD UNIQUE KEY `admin_username` (`admin_username`),
  ADD UNIQUE KEY `admin_email` (`admin_email`);

--
-- Indexes for table `hire_requests`
--
ALTER TABLE `hire_requests`
  ADD PRIMARY KEY (`request_id`);

--
-- Indexes for table `main_data`
--
ALTER TABLE `main_data`
  ADD PRIMARY KEY (`data_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`member_id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`testimonial_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `hire_requests`
--
ALTER TABLE `hire_requests`
  MODIFY `request_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `main_data`
--
ALTER TABLE `main_data`
  MODIFY `data_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `member_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `testimonial_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
