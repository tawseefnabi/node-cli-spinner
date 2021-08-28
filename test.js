import test from 'ava';
import cliSpinners from require('.');


console.log('Spinner count:', Object.keys(spinners).length);

test('main', t => {
  console.log('test starts');
	t.is(typeof cliSpinners, 'object');
	t.is(cliSpinners.dots.interval, 80);
	t.true(Array.isArray(cliSpinners.dots.frames));
});

