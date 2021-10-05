import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
    return {
        verbose: true,
        preset: 'ts-jest',
        testEnvironment: 'node',
        coverageThreshold: {
            global: {
                statements: 60,
                branches: 50,
                functions: 50,
                lines: 50,
            },
        },
        testPathIgnorePatterns: [
            "<rootDir>/dist"
        ],
        watchPlugins: [
            'jest-watch-typeahead/filename',
            'jest-watch-typeahead/testname',
        ],
    };
};