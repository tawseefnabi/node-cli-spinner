// const spinners = require('./spinners.json');

// module.exports = () => {
//   const randomIndex = Math.floor(Math.random() * Object.keys(spinners).length);
//   const spinner = Object.keys(spinners)[randomIndex];
//   console.log('spinner', spinners[spinner]);
//   return spinners[spinner]
// }


'use strict';

const spinners = Object.assign({}, require('./spinners.json'));

const spinnersList = Object.keys(spinners);

Object.defineProperty(spinners, 'random', {
	get() {
		const randomIndex = Math.floor(Math.random() * spinnersList.length);
		const spinnerName = spinnersList[randomIndex];
		return spinners[spinnerName];
	}
});

module.exports = spinners;
