/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    coverageProvider: 'v8',
    clearMocks: true,
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    verbose: true,
}
