import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coveragePathIgnorePatterns: ['main.ts', '.module.ts', '.entity.ts', '.dto.ts'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  detectOpenHandles: true,
};

export default config;
