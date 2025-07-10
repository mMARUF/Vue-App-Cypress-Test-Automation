// jest.config.ts
import type { JestConfigWithTsJest } from 'ts-jest';
const jestConfig: JestConfigWithTsJest = {
  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The new, correct way to configure ts-jest
  transform: {
    // This regex tells Jest to use ts-jest for all .ts and .tsx files
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // This is the crucial line that points to your Jest-specific tsconfig
        tsconfig: 'tsconfig.jest.json',
      },
    ],
  },
};

export default jestConfig;