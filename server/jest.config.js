module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: false,
  automock: false,
  setupFiles: ["<rootDir>/setEnvVars.js"],
};
