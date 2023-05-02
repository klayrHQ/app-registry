/*
 * Copyright © 2023 Lisk Foundation
 *
 * See the LICENSE file at the top-level directory of this distribution
 * for licensing information.
 *
 * Unless otherwise agreed in a custom licensing agreement with the Lisk Foundation,
 * no part of this software, including this file, may be copied, modified,
 * propagated, or distributed except according to the terms contained in the
 * LICENSE file.
 *
 * Removal or modification of this copyright notice is prohibited.
 */

const path = require('path');
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const config = require('../config');
const { readJsonFile } = require('./utils/fs');

const appSchema = require(`${config.schemaDir}/${config.filename.APP_JSON}`); // eslint-disable-line import/no-dynamic-require
const nativeTokenSchema = require(`${config.schemaDir}/${config.filename.NATIVE_TOKENS}`); // eslint-disable-line import/no-dynamic-require

const ajv = new Ajv();
addFormats(ajv);

const validateChainName = async (filePaths, validationErrors) => {
	for (let i = 0; i < filePaths.length; i++) {
		/* eslint-disable no-await-in-loop */
		const filePath = filePaths[i];
		const data = await readJsonFile(filePath);
		const parentDirName = path.basename(path.dirname(filePath));

		if (data && data.chainName) {
			if (data.chainName.toLowerCase() !== parentDirName.toLowerCase()) {
				validationErrors.push(new Error(`Parent directory name doesn't match the chainName in ${filePaths[i]}.`));
			}
		}
		/* eslint-enable no-await-in-loop */
	}
};

const validateSchema = async (schema, filePaths, validationErrors) => {
	for (let i = 0; i < filePaths.length; i++) {
		/* eslint-disable no-await-in-loop */
		const filePath = filePaths[i];
		const data = await readJsonFile(filePath);
		const valid = ajv.validate(schema, data);

		if (!valid) {
			validationErrors.push(new Error(JSON.stringify(ajv.errors)));
		}
		/* eslint-enable no-await-in-loop */
	}
};

const validateAllSchemas = async (files, validationErrors) => {
	// Get all app.json files
	const appFiles = files.filter((filename) => filename.endsWith(config.filename.APP_JSON));

	// Get all nativetokens.json files
	const nativeTokenFiles = files.filter((filename) => filename.endsWith(config.filename.NATIVE_TOKENS));

	// Validate schemas
	await validateSchema(appSchema, appFiles, validationErrors);
	await validateSchema(nativeTokenSchema, nativeTokenFiles, validationErrors);

	// Validate if dir name is same as network name
	await validateChainName(appFiles, validationErrors);
};

module.exports = {
	validateAllSchemas,
};
