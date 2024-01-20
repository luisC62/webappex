-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-01-2024 a las 21:38:03
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `valores`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mitabla`
--

CREATE TABLE `mitabla` (
  `id` int(11) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `datos` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mitabla`
--

INSERT INTO `mitabla` (`id`, `titulo`, `datos`) VALUES
(1, '\"Ducati\"', '[{\"elNombre\":\"Desmocedici\",\"estrellas\":6}]'),
(4, '\"Honda\"', '[{\"elNombre\":\"R19\",\"estrellas\":2}]'),
(5, '\"BMW\"', '[{\"elNombre\":\"R12\",\"estrellas\":3},{\"elNombre\":\"R128B\",\"estrellas\":1}]'),
(10, '\"Kawasaki\"', '[{\"elNombre\":\"hayabusa\",\"estrellas\":2}]'),
(14, '\"Yamaha\"', '[{\"elNombre\":\"Osaka\",\"estrellas\":3},{\"elNombre\":\"Tokio\",\"estrellas\":2},{\"elNombre\":\"Nagoya\",\"estrellas\":4}]'),
(17, '\"Derbi\"', '[{\"elNombre\":\"Tormo\",\"estrellas\":1}]');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mitabla`
--
ALTER TABLE `mitabla`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mitabla`
--
ALTER TABLE `mitabla`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
