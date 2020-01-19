# TestCafe acceptance tests for Dribbble

## Getting the environment up
1. If you don't have installed node.js, please install it from this page: https://nodejs.org/en/download/
2. Clone this repositiry  `git clone https://github.com/wkisielewicz/DribbbleTestCafeTests.git`
3. Run `npm install` commmand inside project

## Test Specification

### Test scope
Acceptance front end testing for:
 - Edit account functionality for authenticated user
 - Job search functionality for unauthenticated user

### How to run tests
- To run all tests execute `npm test` command inside inside project
- To run tests for edit account functionality execute `npm run edit-account-test`command inside inside project
- To run tests job search functionality execute `npm run job-board-test`command inside inside project
- To run all tests on chrome with headless option execute `npm run test-chrome-headless` command inside project
- To run all tests on firefox with headless option execute `npm run test-firefox-headless` command inside project

### Additional information
- For generating test data there is added faker.js: https://github.com/Marak/faker.js
- Please notice tests are running with `-e` option witch means `--skip-js-errors`, since Dribbble website returns some errors in console and they are tracked by TestCafe, for our purposes we need to skip them


