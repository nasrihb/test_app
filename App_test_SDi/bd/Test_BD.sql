-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Mer 09 Septembre 2020 à 15:21
-- Version du serveur :  5.6.21
-- Version de PHP :  5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `Test_BD`
--

-- --------------------------------------------------------

--
-- Structure de la table `conges`
--

CREATE TABLE IF NOT EXISTS `conges` (
`id_conge` int(8) NOT NULL,
  `date_debut` datetime NOT NULL,
  `date_fin` datetime NOT NULL,
  `type_conge` varchar(30) NOT NULL,
  `raison` varchar(30) NOT NULL,
  `id_user` int(8) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `conges`
--

INSERT INTO `conges` (`id_conge`, `date_debut`, `date_fin`, `type_conge`, `raison`, `id_user`) VALUES
(2, '2020-10-03 00:00:00', '2020-10-04 00:00:00', 'ee', 'zefe', 10);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`id_user` int(8) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `role` varchar(30) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `user`
--

INSERT INTO `user` (`id_user`, `nom`, `prenom`, `email`, `password`, `role`) VALUES
(10, 'admin', 'admin', 'admin@gmail.com', '0000', 'admin'),
(19, 'RAmi', 'sami', 'sami@gmail.com', '12345', 'user'),
(20, 'zzz', 'sami', 'sami@gmail.com', '1234', 'user'),
(21, 'sami', 'sami', 'sami@gmail.com', '12345', 'user'),
(23, 'rihab', 'rihb', 'nas@gmail.com', '2233', 'user');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `conges`
--
ALTER TABLE `conges`
 ADD PRIMARY KEY (`id_conge`), ADD KEY `id_user` (`id_user`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `conges`
--
ALTER TABLE `conges`
MODIFY `id_conge` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
MODIFY `id_user` int(8) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
