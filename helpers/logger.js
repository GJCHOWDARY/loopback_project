'use strict';

const winston = require('winston');

module.exports = {
	getLogger: (tag) => {
		return new (winston.Logger)({
			transports: [
				new (winston.transports.Console)({
					colorize: true,
					prettyPrint: true,
					timestamp: true,
					label: tag
				}),
				new (winston.transports.File)({
					name: 'error-file',
					json: false,
					filename: '/var/log/loopback-error.log',
					label: tag,
					level: 'error'
				}),
				new (winston.transports.File)({
					name: 'warning-file',
					json: false,
					filename: '/var/log/loopback-warn.log',
					label: tag,
					level: 'warn'
				})
			]
		})
	}
};