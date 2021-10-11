# Kiwi coding challenge 👨🏻‍💻

  Implement a number to word list converter as a Node backend and React
frontend.

- The backend should provide an endpoint that converts a given numeric string into a list of corresponding words in the style of T9 [https://en.wikipedia.org/wiki/T9_(predictive_text)] or Phonewords [https://en.wikipedia.org/wiki/Phoneword]. For example, given the input 23 the output should be: ad, ae, af, bd, be, bf, cd, ce, cf.

- The frontend should allow the user to enter a number, query the backend for the corresponding expansions, and display them.

- The solution should be shared with us in a git repository with real history included. It's OK not to deliver 100%, but the more working parts the better. For example if you struggle with the backend, focus on frontend and just mock the API calls.

- The task should contain unit tests

Take this task as a chance to present your skills. If you are good in UI, let us see that. If you are more into the backend, it's OK to have simple FE. If you know what tests are for, don't keep it for yourself, show it in the code.

+ Ways to go beyond the minimal solution could include for example:
    - phone keyboard; 
    -like UI;
    - great project setup; 
    - mobile app in React Native - filtering to include only real words based on a suitable word list.

## Setup

In order to start the backend server, follow these steps:

- Open a terminal in the `../backend` folder
- Install packages using `yarn`
- Run the server using `yarn start`
- Check the server is running correctly by perform a GET request to http://localhost:3001/health

In order to start the frontend server, follow these steps:

- Open a terminal in the `../frontend` folder
- Install packages using `yarn`
- Run the server using `yarn start`

### Tests

You can run the test suites via the `yarn test` command in the `../backend` folder.
