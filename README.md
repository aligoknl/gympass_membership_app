# Virtuagym-Assignment GYMPASS

This is the project for the Virtuagym I did using the MERN stack. A quick guide to what I built:

Gympass

RESTful API endpoints to perform CRUD operations.

- An Invoice has a date, status, description, amount and invoice lines
- An Invoice state can have these values: Outstanding, Paid, Void
- An Invoice can have many lines. Each line should contain an amount and a description
- A Membership is associated with a user
- A Membership can be Active or Canceled
- A Membership has an amount of credits and a state (start date and end date)
- A User can check-in to a club. When they do, their membership gets credits subtracted
- A User cannot check-in and use credits if their membership is canceled
- A User cannot check-in if they have no credits available or if the membership’s end date
  is reached
- When the user checks in, an invoice line gets created for the month’s invoice. If the
  invoice doesn’t exist, it gets created

[Click here for the Demo version](https://gympass-membership.herokuapp.com/)

# Built with

<p dir="auto">
  <a target="_blank" rel="noopener noreferrer" href=""><img alt="html5" src="https://camo.githubusercontent.com/0c3a16a22ae058cfe38a06dc9ea16404cf006409262f547c9ccfa3ec8b30f71e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d48544d4c352d4533344632363f7374796c653d666c61742d737175617265266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&amp;logo=html5&amp;logoColor=white" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer" ><img alt="CSS" src="https://camo.githubusercontent.com/af676aa114d3e054bb2d7b823f8b1dbf1814214d2c6f49e6a6cb70ab1837bd59/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4353532d3066363166613f7374796c653d666c61742d737175617265266c6f676f3d43535333266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/-CSS-0f61fa?style=flat-square&amp;logo=CSS3&amp;logoColor=white" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer"><img alt="JS" src="https://camo.githubusercontent.com/1c4e4cd646ae3703d4a774f42acf2ef62f44f811b28d9a1170e09e65ebad2315/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4a6176615363726970742d6666626130383f7374796c653d666c61742d737175617265266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d626c61636b" data-canonical-src="https://img.shields.io/badge/-JavaScript-ffba08?style=flat-square&amp;logo=JavaScript&amp;logoColor=black" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer" ><img alt="React" src="https://camo.githubusercontent.com/d8971eb578649b5861b3b3694bc2684ff4bf5bb346042b20f8f6e26010dce374/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3631444146423f7374796c653d666c6174266c6f676f3d7265616374266c6f676f436f6c6f723d7768697465" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer" ><img alt="React" src="https://camo.githubusercontent.com/9bb2580411576db130fee2e51a0d2f6187563d00eff4ff80b5aba8b97de5fbd2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656475782d3736344142432e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d7265647578266c6f676f436f6c6f723d666666" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer"><img alt="Nodejs" src="https://camo.githubusercontent.com/cc96d7d28a6ca21ddbb1f2521d751d375230ed840271e6a4c8694cf87cc60c14/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732532302d2532333433383533442e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465" data-canonical-src="https://img.shields.io/badge/-JavaScript-ffba08?style=flat-square&amp;logo=JavaScript&amp;logoColor=black" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer"><img alt="Nodejs" src="https://camo.githubusercontent.com/a13091c112f3caf333125d48188cda0292a5d64467f19703aee213d85c11362e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d657870726573732d3030303030303f6c6f676f3d65787072657373266c6f676f436f6c6f723d7768697465267374796c653d666f722d7468652d6261646765" data-canonical-src="https://img.shields.io/badge/-JavaScript-ffba08?style=flat-square&amp;logo=JavaScript&amp;logoColor=black" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer"><img alt="MongoDB" src="https://camo.githubusercontent.com/80e402d218879161eb056a6f1f6fe5b74c198898b09b0e8b8ae668ae2b6eb335/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d6666663f7374796c653d736f6369616c266c6f676f3d6d6f6e676f6462" data-canonical-src="https://img.shields.io/badge/-JavaScript-ffba08?style=flat-square&amp;logo=JavaScript&amp;logoColor=black" style="max-width: 100%;"></a>

 </p>

## 1. Setup

First, to setup all the directories run the following in the main directory:

`npm install`

`npm run setup`

To run the app in dev mode you can run the following command in the main directory:

`npm run dev`

## 2. Code structure

```
client
├── public
└── src
|   └── __tests__
|   └── __testUtils__
|   └── assets
|   └── assets
|   └── components
|   └── hooks
|   └── pages
|   └── slices
|       App.jsx
|       AppWrapper.jsx
|       index.jsx
    constants.js
    Dockerfile
    superTests.js

cypress
|   └── fixtures
|   └── integration
|   └── plugins
|   └── support

server
└── src
    └── __tests__
    └── __testUtils__
    └── controllers
    └── db
    └── middlewares
    └── models
    └── routes
    └── util
    app.js
    index.js
    testRouter.js
    DockerFile
```

### 2.1 Client structure

- `public` || public facing client code
- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `components` || all of our shared components that are used over multiple pages
- `hooks` || all of our custom hooks
- `pages` || the page components of our app, any routing will go between these components
- `pages/components` || components used specifically on those pages
- `util` || any utility functions that can be used anywhere on the client side
- `index.jsx` || the start point of the client

### 2.2 Cypress structure

- `fixtures` || any data/files that `cypress` needs can be placed here
- `integration` || all of our tests are in here, separated in folders based on the pages in our app
- `plugins` || any plugins for our `cypress` configuration can be placed here
- `support` || custom commands and other support files for `cypress` can be placed here

### 2.3 Server structure

- `__tests__` || any `jest` tests for the api endpoints as that is our testing strategy for the backend
- `__testUtils__` || any code that is only being used in the tests is put in the `__testUtils__` folder to separate that away from the rest of the code
- `controllers` || all of our controller functions that interact with the database
- `db` || all of our configuration for the database
- `models` || all of our `mongoose` models will be placed here
- `routes` || code to match up the API with our controllers
- `util` || any utility functions that can be used anywhere on the server side
- `index.js` || the start point of the server

## 3. Stack / external libraries

The base stack of the app is a MERN stack (Mongoose, Express, React, Node). Next to that we make use of the following extras:

### 3.1 Configuration libraries

- `dotenv` || To load the .env variables into the process environment. See [docs](https://www.npmjs.com/package/dotenv)
- `webpack` / `html-webpack-plugin` || To bundle our React app and create a static app to host. See [docs](https://webpack.js.org/)
- `husky` || To run our tests and linter before committing. See [docs](https://typicode.github.io/husky/#/)
- `eslint` || To check our code. We have different configurations for frontend and backend. You can check out the configuration in the `.eslintrc.(c)js` files in the respective `client` and `server` folders. See [docs](https://eslint.org/)
- `prettier` || To automatically format our code. See [docs](https://prettier.io/)
- `concurrently` || To run commands in parallel. See [docs](https://github.com/open-cli-tools/concurrently#readme)

For more information on how these work together including the automatic deployment to heroku, have a look at our detailed [DEV](./DEV.md) file.

### 3.2 Client-side libraries

- `@testing-library/*` || We use React Testing Library to write all of our tests. See [docs](https://testing-library.com/docs/react-testing-library/intro/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `jest-fetch-mock` || To mock out the backend for our testing purposes. See [docs](https://github.com/jefflau/jest-fetch-mock#readme)
- `prop-types` || To type-check our components. See [docs](https://github.com/facebook/prop-types)

### 3.3 Server-side libraries

- `nodemon` || To automatically restart the server when in development mode. See [docs](https://nodemon.io/)
- `jest` || To run our tests and coverage. See [docs](https://jestjs.io/)
- `supertest` || To more easily test our endpoints. See [docs](https://github.com/visionmedia/supertest#readme)
- `mongodb-memory-server` || To mock out our database in our backend tests. See [docs](https://github.com/nodkz/mongodb-memory-server)
- `cors` || To open up our API. See [docs](https://github.com/expressjs/cors#readme)
- `mongoose` || To add schemas to our database. See [docs](https://mongoosejs.com/)

## 4. Testing

On both the client and the server side we use the `jest` framework for testing. The jest configuration of each side is in the `jest.config.js` file.

In both the client and the server you can run the command `npm run test:watch` to have the tests automatically run whenever you change something. This will speed up your ability to fix tests.

If you want to check the code coverage of the tests, run the command `npm run test:coverage`! This can help you identify if you have missed some parts. 100% coverage is generally not possible, nor does 100% means that it is tested perfectly, but it is a tool you can use.

### 4.1 Client

On the client side, we want to unit test our components by isolating them. You can use `jest-fetch-mock` to mock any fetches made to the api. We use the `__testUtils__` folder to combine these responses in one place so that all of our tests can use them. Our api is subject to change, so it will also help make these changes less impactful.

Any utility functions should have their own test, there is a `__test__` folder in the `util` folder for exactly that purpose.

Remember to clean up the mocks before you start each test that is going to use those mocks by writing the code below at the top of your file:

```
beforeEach(() => {
  fetch.resetMocks();
});
```

For the client code we want to use the `data-testid` attributes as ways to target the elements in our tests. This will serve as points for our QA engineers to interact with the elements as well in the `cypress` tests. This is also the reason why every component has a `.testid.js` file to store the test ids in. We can then access those in `cypress` without having to load all of the client code.

### 4.2 Server

On the server side, we want to test our end points, not our specific controllers/routes. For that we can use `supertest` to send requests and then use the mocked database provided by `mongodb-memory-server` to make assertions on the database. To create a certain state of the database the `__testUtils__` folder provides functions to add things to the database.

Remember that you always want to start every test with a clean database so that other test will not interfere. This is why we have the following code in every test file:

```
beforeAll(async () => {
  await connectToMockDB();
});

afterEach(async () => {
  await clearMockDatabase();
});

afterAll(async () => {
  await closeMockDatabase();
});
```

### 4.3 Cypress

To do our integration test we use `cypress`. This will run a browser and allow you to assert using the DOM. `Cypress` is a little more difficult to run as it requires all communication with the client and server to go via the browser. It should be totally separate as it needs to test an application as close to reality as possible.

When you want to add or run a `cypress` test, you have to first make sure that you are connecting to the `cypressDatabase` with your server by adjusting the `.env` file. You can open the test GUI by running `npm run cypress` from the main directory. From there you can run the tests individually with a view of the browser.

In our CI/CD the tests will be run headless, the command to try that locally is `npm run test:cypress`.

The tests should be in the `integration` folder. In that folder we try to mimic a bit how the pages are structured in the app, but some deviation is expected.

To access elements in the page, make sure to use the `data-testid` or `data-elementid` values. There are custom commands to get those in the `support` folder. Feel free to add to those!

If your test interacts with the database, remember to add the following code to your test:

```
  beforeEach(() => {
    cy.task("db:seed");
  });
```

This will run the `/api/test/seed` function which will seed our database with our standard data. If you need more data initially then feel free to add to this function. You will also need to access this data so your test will not fail if the data is slightly changed. To do that you can use the `requestFromDatabase` custom command. This will send a request to the database and give you back the information. Using a `.then` you can then design a test that takes the data into account. The code that does the interaction with the database is in the `plugins` folder.
