const rand = (min, max) => (min + Math.random() * (max - min)).toFixed(0);

const getRandomColor = () => `hsla(${rand(1, 360)},${rand(0, 100)}%,${rand(0, 100)}%,1)`;

module.exports = { getRandomColor };
