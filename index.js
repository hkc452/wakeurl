'use strict';
const URLParser = typeof URL === 'undefined' ? require('url').URL : URL;

module.exports = (urlString, opts) => {
	opts = Object.assign({
		removeTrailingSlash: true,
		stripWWW: true
	}, opts)
	urlString = urlString.trim();
	const hasRelativeProtocol = urlString.startsWith('//');
	const isRelativeUrl = !hasRelativeProtocol && /^\.*\//.test(urlString)
	if (!isRelativeUrl) {
		urlString = urlString.replace(/^(?!(?:\w+:)?\/\/)|^\/\//, 'http://')
	}
	const urlObj = new URLParser(urlString);
	if (urlObj.hostname) {
		// Remove trailing dot
		urlObj.hostname = urlObj.hostname.replace(/\.$/, '');

		// Remove `www.`
		if (opts.stripWWW) {
			urlObj.hostname = urlObj.hostname.replace(/^www\./, '');
		}
	}

	urlString = urlObj.toString();


	if (opts.removeTrailingSlash || urlObj.pathname === '/') {
		urlString =urlString.replace(/\/$/, '')
	}


	return urlString;
};
