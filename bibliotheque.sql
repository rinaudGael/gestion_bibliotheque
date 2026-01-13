-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 13 jan. 2026 à 20:32
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bibliotheque`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`) VALUES
(1, 'admin', 'admin@gmail.com', 'password');

-- --------------------------------------------------------

--
-- Structure de la table `emprunts`
--

CREATE TABLE `emprunts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `livre_id` int(11) NOT NULL,
  `returned` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `emprunts`
--

INSERT INTO `emprunts` (`id`, `user_id`, `livre_id`, `returned`, `created_at`) VALUES
(41, 7, 1, 0, '2025-01-05 09:15:00'),
(42, 8, 2, 1, '2025-01-07 13:30:00'),
(43, 7, 3, 0, '2025-01-10 08:00:00'),
(44, 8, 4, 1, '2025-01-12 10:45:00'),
(45, 7, 5, 0, '2025-01-15 14:20:00'),
(46, 8, 6, 0, '2025-02-01 12:00:00'),
(47, 7, 7, 1, '2025-02-05 15:10:00'),
(48, 8, 8, 0, '2025-02-08 09:50:00'),
(49, 7, 9, 0, '2025-02-10 11:30:00'),
(50, 8, 10, 1, '2025-02-12 08:40:00'),
(51, 7, 11, 0, '2025-03-01 13:20:00'),
(52, 8, 12, 1, '2025-03-03 10:15:00'),
(53, 7, 13, 0, '2025-03-05 12:45:00'),
(54, 8, 14, 0, '2025-03-07 09:30:00'),
(55, 7, 15, 1, '2025-03-10 14:00:00'),
(56, 8, 16, 0, '2025-03-12 08:20:00'),
(57, 7, 17, 0, '2025-04-01 10:10:00'),
(58, 8, 18, 1, '2025-04-03 12:40:00'),
(59, 7, 19, 0, '2025-04-05 08:50:00'),
(60, 8, 20, 0, '2025-04-07 11:30:00'),
(61, 7, 21, 1, '2025-05-01 07:15:00'),
(62, 8, 22, 0, '2025-05-03 09:45:00'),
(63, 7, 23, 0, '2025-05-05 12:20:00'),
(64, 8, 24, 1, '2025-05-07 08:40:00'),
(65, 7, 1, 0, '2025-05-10 11:10:00'),
(66, 8, 2, 0, '2025-06-02 13:30:00'),
(67, 7, 3, 1, '2025-06-05 07:50:00'),
(68, 8, 4, 0, '2025-06-07 10:20:00'),
(69, 7, 5, 0, '2025-06-10 12:00:00'),
(70, 8, 6, 1, '2025-06-12 08:30:00'),
(71, 7, 7, 0, '2025-07-01 09:10:00'),
(72, 8, 8, 0, '2025-07-03 11:45:00'),
(73, 7, 9, 1, '2025-07-05 13:20:00'),
(74, 8, 10, 0, '2025-07-07 07:40:00'),
(75, 7, 11, 1, '2025-07-10 10:00:00'),
(76, 8, 12, 0, '2025-08-02 12:30:00'),
(77, 7, 13, 0, '2025-08-05 08:20:00'),
(78, 8, 14, 1, '2025-08-07 11:50:00'),
(79, 7, 15, 0, '2025-08-10 07:10:00'),
(80, 8, 16, 0, '2025-08-12 09:30:00'),
(81, 7, 17, 1, '2025-09-01 10:50:00'),
(82, 8, 18, 0, '2025-09-03 13:10:00'),
(83, 7, 19, 0, '2025-09-05 08:40:00'),
(84, 8, 20, 1, '2025-09-07 11:20:00'),
(85, 7, 21, 0, '2025-09-10 12:50:00'),
(86, 8, 22, 0, '2025-10-02 07:30:00'),
(87, 7, 23, 1, '2025-10-05 10:00:00'),
(88, 8, 24, 0, '2025-10-07 12:30:00'),
(89, 7, 1, 0, '2025-10-10 08:10:00'),
(90, 8, 2, 1, '2025-10-12 10:40:00'),
(91, 7, 23, 0, '2025-12-29 14:56:42'),
(92, 7, 3, 0, '2025-12-29 14:57:43'),
(93, 7, 1, 0, '2025-12-29 17:41:22'),
(94, 7, 1, 0, '2025-12-29 19:01:01');

-- --------------------------------------------------------

--
-- Structure de la table `livre`
--

CREATE TABLE `livre` (
  `id` int(11) NOT NULL,
  `titre` varchar(225) NOT NULL,
  `auteur` varchar(225) NOT NULL,
  `categories` varchar(255) NOT NULL,
  `quantite` int(11) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `livre`
--

INSERT INTO `livre` (`id`, `titre`, `auteur`, `categories`, `quantite`, `quantity`, `created_at`) VALUES
(1, 'Le Voyageur des Étoiles', 'Marie Dupont', 'Science-Fiction', 8, 0, '2025-12-23 08:23:20'),
(2, 'Les Jardins Cachés', 'Pierre Lefèvre', 'Roman', 50, 0, '2025-12-23 08:23:20'),
(3, 'mon amour ', 'Rebeca', 'Roman', 31, 0, '2025-12-23 08:23:20'),
(4, 'Kapcy', 'Princy', 'Science-Fiction', 21, 0, '2025-12-23 08:23:20'),
(5, 'L\'Étranger', 'Albert Camus', 'Philosophie', 5, 0, '2025-12-23 08:38:32'),
(6, 'Les Misérables', 'Victor Hugo', 'Roman', 8, 0, '2025-12-23 08:38:32'),
(7, 'Le Petit Prince', 'Antoine de Saint-Exupéry', 'Jeunesse', 12, 0, '2025-12-23 08:38:32'),
(8, '1984', 'George Orwell', 'Science-Fiction', 6, 0, '2025-12-23 08:38:32'),
(9, 'Animal Farm', 'George Orwell', 'Politique', 7, 0, '2025-12-23 08:38:32'),
(10, 'Don Quichotte', 'Miguel de Cervantes', 'Classique', 4, 0, '2025-12-23 08:38:32'),
(11, 'Le Rouge et le Noir', 'Stendhal', 'Roman', 5, 0, '2025-12-23 08:38:32'),
(12, 'Madame Bovary', 'Gustave Flaubert', 'Roman', 6, 0, '2025-12-23 08:38:32'),
(13, 'Candide', 'Voltaire', 'Philosophie', 9, 0, '2025-12-23 08:38:32'),
(14, 'Crime et Châtiment', 'Fiodor Dostoïevski', 'Psychologie', 3, 0, '2025-12-23 08:38:32'),
(15, 'Le Seigneur des Anneaux', 'J.R.R. Tolkien', 'Fantasy', 10, 0, '2025-12-23 08:38:32'),
(16, 'Harry Potter à l\'école des sorciers', 'J.K. Rowling', 'Fantasy', 15, 0, '2025-12-23 08:38:32'),
(17, 'Le Hobbit', 'J.R.R. Tolkien', 'Fantasy', 7, 0, '2025-12-23 08:38:32'),
(18, 'La Peste', 'Albert Camus', 'Philosophie', 6, 0, '2025-12-23 08:38:32'),
(19, 'L\'Alchimiste', 'Paulo Coelho', 'Développement personnel', 11, 0, '2025-12-23 08:38:32'),
(20, 'Da Vinci Code', 'Dan Brown', 'Thriller', 8, 0, '2025-12-23 08:38:32'),
(21, 'Le Nom de la rose', 'Umberto Eco', 'Historique', 4, 0, '2025-12-23 08:38:32'),
(22, 'Sapiens', 'Yuval Noah Harari', 'Histoire', 9, 0, '2025-12-23 08:38:32'),
(23, 'Homo Deus', 'Yuval Noah Harari', 'Histoire', 5, 0, '2025-12-23 08:38:32'),
(24, 'Rich Dad Poor Dad', 'Robert Kiyosaki', 'Finance', 10, 0, '2025-12-23 08:38:32');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(250) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `firstname`, `email`, `password`, `created_at`) VALUES
(7, 'Rakotomalala', 'Rebeca', 'rgtutoriel26@gmail.com', '$2b$10$ANxgtMoCijiZSPn20U8SUueYhhoMfK3NGudIjHincEzfal5Welh4K', '2025-12-23 08:27:25'),
(8, 'Rajaonarison', 'Gael', 'gaelrajaonarison@gmail.com', '$2b$10$gVn3A0hkub87aATp5rAJlOP5xul0uB9lw6/ttuagmjXAygAZ5zw.K', '2025-12-23 08:27:25'),
(9, 'Carlos', 'Roberto', 'robertocarlos@gmail.com', '$2b$10$8CQQ8eSLR8/hVvKhLjoqQOgf6DYC9/6K0IUk39VuqyIqM8Uc5NiB2', '2025-12-24 11:46:12');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `emprunts`
--
ALTER TABLE `emprunts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_emprunts_user` (`user_id`),
  ADD KEY `idx_emprunts_livre` (`livre_id`),
  ADD KEY `idx_emprunts_date` (`created_at`);

--
-- Index pour la table `livre`
--
ALTER TABLE `livre`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `emprunts`
--
ALTER TABLE `emprunts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT pour la table `livre`
--
ALTER TABLE `livre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `emprunts`
--
ALTER TABLE `emprunts`
  ADD CONSTRAINT `fk_emprunt_livre` FOREIGN KEY (`livre_id`) REFERENCES `livre` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_emprunt_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
