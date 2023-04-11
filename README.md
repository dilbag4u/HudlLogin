# hudl login

## Introduction
This project will contain [playwright](https://playwright.dev/) UI web browser tests for [hudl login] user journeys.

### Setup

1. Clone the repo locally
2. Install dependencies
3. Install Chrome browser locally if not installed
```
npm ci
```
or
```
yarn --frozen-lockfile
```
3. `.env` file have `USER_EMAIL` and `USER_PASSWORD` . Use the same credential or replace with another valid one .
2. Download VS code.
2. Download the latest node version. Check version by running the command:
npm module

### Environment variables

| Variable                      | Description                                                |
| ----------------------------- | ---------------------------------------------------------- |
| `URL`                         | Domain of target environment. `https://www.hudl.com`       |
| `BASE_PATH`                   | Path prefixed with slash e.g. `/`                          |
| `QUERY_PARAM`                 | Query param prefixed with ? e.g. `login`                   |
| `CI`                          | Flag used to switch config when run in CI e.g. `false`     |
 
 ### Running tests

 `npm test` _(will use `.env` values)_

 or

 `yarn test` _(will use `.env` values)_

 ### Command and steps to run locally
 
1. Open Visual studio editor
2. Open the project in VS - file > open
3. Open new terminal - Terminal > New Terminal
2. Run command `npm test`

### folder structure

| folder name                   | Description                                                               |
| ----------------------------- | ------------------------------------------------------------------------- |
| `pages`                       | pages folder contains page sepcific object properties and  functions      |
| `playwright-report`           | This folder contains index.html report file                               |
| `testdata`                    | This folder contains any test data                                        |
| `tests`                       | This folder contains actual tests test def specifiction                   |
| `package.json`                | This file contains scripts/run command and dependencies list              |
| `playwright.config.ts`        | This file contains all configuration related to project                   |
| `github`                      | This folder contains workflow- CI/CD report and PR template file          |

 ### Once test has finished then use below command to show html report

`npx playwright show-report`

 ### Command for Code style and formating

 `npm run lint:fix`
 