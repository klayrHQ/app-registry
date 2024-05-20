const path = require('path');
const fs = require('fs').promises;
const config = require('../../config');

const tempDataDir = path.join(config.rootDir, 'tempDir');

const createTestEnvironment = async () => {
	await fs.mkdir(path.join(config.rootDir, 'tempDir'));
	await fs.mkdir(path.join(config.rootDir, 'tempDir', 'docs'));
	await fs.mkdir(path.join(config.rootDir, 'tempDir', 'mainnet'));
	await fs.mkdir(path.join(config.rootDir, 'tempDir', 'mainnet', 'Klayr'));
};

const cleanTestEnvironment = async () => {
	await fs.rm(path.join(config.rootDir, 'tempDir'), { recursive: true });
};

const createFileInNetwork = async (filename, data) => {
	await fs.writeFile(path.join(config.rootDir, 'tempDir', 'mainnet', 'Klayr', filename), data);
};

const getFileFromNetwork = (filename) => path.join(config.rootDir, 'tempDir', 'mainnet', 'Klayr', filename);

const removeFileFromNetwork = async (filename) => {
	await fs.rm(path.join(config.rootDir, 'tempDir', 'mainnet', 'Klayr', filename));
};

const createFileInDocs = async (filename, data) => {
	await fs.writeFile(path.join(config.rootDir, 'tempDir', 'docs', filename), data);
};

const removeFileFromDocs = async (filename) => {
	await fs.rm(path.join(config.rootDir, 'tempDir', 'docs', filename));
};

const getJSONFilesFromNetwork = () => {
	const files = [];
	files.push(path.join(config.rootDir, 'tempDir', 'mainnet', 'Klayr', config.filename.APP_JSON));
	files.push(path.join(config.rootDir, 'tempDir', 'mainnet', 'Klayr', config.filename.NATIVE_TOKENS));
	return files;
};

const getJSONFilesFromDocs = () => {
	const files = [];
	files.push(path.join(config.rootDir, 'tempDir', 'docs', config.filename.APP_JSON));
	files.push(path.join(config.rootDir, 'tempDir', 'docs', config.filename.NATIVE_TOKENS));
	return files;
};

const getNetworkDirs = () => [path.join(config.rootDir, 'tempDir', 'mainnet')];

const getAppDirs = () => [path.join(config.rootDir, 'tempDir', 'mainnet', 'Klayr')];

module.exports = {
	tempDataDir,
	createTestEnvironment,
	cleanTestEnvironment,
	createFileInNetwork,
	removeFileFromNetwork,
	getFileFromNetwork,
	createFileInDocs,
	removeFileFromDocs,
	getJSONFilesFromNetwork,
	getJSONFilesFromDocs,
	getNetworkDirs,
	getAppDirs,
};
