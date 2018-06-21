import test from 'ava';
import w from '.';

test('main', t => {
	t.is(w('sindresorhus.com'), 'http://sindresorhus.com');
	t.is(w('sindresorhus.com '), 'http://sindresorhus.com');
	t.is(w('sindresorhus123.com.'), 'http://sindresorhus123.com');
	t.is(w('HTTP://sindresorhus.com'), 'http://sindresorhus.com');
	t.is(w('//sindresorhus.com'), 'http://sindresorhus.com');
	t.is(w('http://sindresorhus.com'), 'http://sindresorhus.com');
	t.is(w('http://sindresorhus.com:80'), 'http://sindresorhus.com');
	t.is(w('https://sindresorhus.com:443'), 'https://sindresorhus.com');
	t.is(w('ftp://sindresorhus.com:21'), 'ftp://sindresorhus.com');
	t.is(w('http://www.sindresorhus.com'), 'http://sindresorhus.com');
	t.is(w('www.sindresorhus.com'), 'http://sindresorhus.com');
	t.is(w('http://sindresorhus.com/foo/'), 'http://sindresorhus.com/foo');
});
