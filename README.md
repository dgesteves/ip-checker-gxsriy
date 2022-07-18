# IP Address Tracker

* Task Started at Fri 15 Jul 2022
* Author: Diogo Esteves

#### Table of Contents

1. [Coding Task](#task-solution)
2. [Installation Instructions](#installation-instructions)
3. [Test Instructions](#test-instructions)
4. [Architecture](#architecture-decisions)

## LightHouse Report:

<img width="565" alt="Screen Shot 2022-06-27 at 12 32 43 AM" src="https://user-images.githubusercontent.com/34245953/175841075-7996f151-e22c-449e-b2ac-af3acc867640.png">

## Application Solution Video:

https://user-images.githubusercontent.com/34245953/175841325-950c5363-36fe-4659-80fa-0efc41fde6e0.mov


## Frontend Challenge

Task can be found in the [Task info directory](task/README.md)

---

### Task Solution

## Installation Instructions

### Available Scripts

#### `npm start`

#### `npm run build`

## Test Instructions

#### `npm test`

#### `npm run coverage`

- Jest coverage reporter:

1. run `npm test` to get test snapshots and check passing tests.
2. run `npm run coverage` to get coverage and test results.

```zsh
----------------------------|---------|----------|---------|---------|-------------------
File                        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------------|---------|----------|---------|---------|-------------------
All files                   |   64.62 |    22.58 |   70.37 |   67.39 |                   
 src                        |       0 |        0 |       0 |       0 |                   
  App.tsx                   |       0 |      100 |       0 |       0 | 7                 
  index.tsx                 |       0 |      100 |     100 |       0 | 6-15              
  reportWebVitals.ts        |       0 |        0 |       0 |       0 | 3-10              
 src/assets/icons           |       0 |        0 |       0 |       0 |                   
  types.ts                  |       0 |        0 |       0 |       0 |                   
 src/assets/icons/Add       |     100 |      100 |     100 |     100 |                   
  index.tsx                 |     100 |      100 |     100 |     100 |                   
 src/assets/icons/Draggable |     100 |      100 |     100 |     100 |                   
  index.tsx                 |     100 |      100 |     100 |     100 |                   
 src/assets/icons/Remove    |     100 |      100 |     100 |     100 |                   
  index.tsx                 |     100 |      100 |     100 |     100 |                   
 src/assets/styles          |      50 |      100 |       0 |      50 |                   
  globalStyles.ts           |   33.33 |      100 |       0 |   33.33 | 14-15             
  theme.ts                  |     100 |      100 |     100 |     100 |                   
  types.ts                  |       0 |        0 |       0 |       0 |                   
 src/components/Description |     100 |      100 |     100 |     100 |                   
  index.tsx                 |     100 |      100 |     100 |     100 |                   
  styles.ts                 |     100 |      100 |     100 |     100 |                   
 src/components/Designer    |     100 |      100 |     100 |     100 |                   
  index.tsx                 |     100 |      100 |     100 |     100 |                   
  styles.ts                 |     100 |      100 |     100 |     100 |                   
 src/components/Pipeline    |      95 |     87.5 |   95.65 |   94.73 |                   
  index.tsx                 |    91.3 |     87.5 |      90 |   90.47 | 34,42             
  styles.ts                 |     100 |      100 |     100 |     100 |                   
 src/constants              |     100 |      100 |     100 |     100 |                   
  index.ts                  |     100 |      100 |     100 |     100 |                   
 src/hooks                  |   83.33 |      100 |     100 |   83.33 |                   
  useFetchNodes.ts          |   83.33 |      100 |     100 |   83.33 | 24-25             
 src/mocks                  |     100 |      100 |     100 |     100 |                   
  handlers.ts               |     100 |      100 |     100 |     100 |                   
  server.ts                 |     100 |      100 |     100 |     100 |                   
 src/pages                  |     100 |      100 |     100 |     100 |                   
  PipelinePage.tsx          |     100 |      100 |     100 |     100 |                   
  styles.ts                 |     100 |      100 |     100 |     100 |                   
 src/services               |     100 |      100 |     100 |     100 |                   
  api.ts                    |     100 |      100 |     100 |     100 |                   
  types.ts                  |       0 |        0 |       0 |       0 |                   
 src/utils/graph            |       0 |        0 |       0 |       0 |                   
  index.ts                  |       0 |        0 |       0 |       0 | 50-112            
----------------------------|---------|----------|---------|---------|-------------------
```

## Architecture Decisions

General:

- Only use leftlet map library, so you can check my code from scratch, I think that the usage of other libraries would
  remove the purpose of the task.
- The task in my point of view is well done, and it is possible to see some of my programmer skills specific on
  the `Front-end`.
- The data model is simple, and it is easy to understand, so I did not have to create any specific data structure algorithm.
- I did not have much time for the task, with more time could have been done some improvements.

Accessibility:

- The app is fully accessible but some aria attributes could be added to improve it.
- Markup is not fully semantic to be honest this could be improved.
- `SEO` could be improved thou if we had multiple pages.

Styles:

- I opted to use `CSS` in `JS` since, in my opinion, it is cleaner and easy to scale and maintain.
- Styles are fully responsive.
- Properties are fully dynamic.
- Variables are set on global variables.
- I implemented a Theme to be easy to scale the team working on the project since you can just change the variable on
  the theme to change all application styles.
- I think that the code is well organized and readable, but it could have better UX on some elements for example.

File Structure:

- The file structure was built with these task necessities in mind and is fully scalable and easy to navigate and
  maintain.
- Every aspect of the respective folder lives inside, so it will be easy to onboard new team members.

Code:

- All `TS` `Types` and `Interfaces` needed to correctly handle type check, of course, that some types will be
  automatically generated but `TS` assertion.
- Some `Type Guards` have to be added in the future.
- To connect to the APIs I used `React query` with a `facade design pattern` to extend implementation necessities.
- components are decoupled from different concerns and follow every `React` component creation pattern and best
  practices but more `Compoesition` could have been used for some components.
- For the normal `map` itself I would suggest to use a `web worker` to outsource to a new thread heavy computation
  tasks
  without blocking the `event loop` or spend resources of browser main thread.
- Code should be easily scalable and maintainable for future iterations of development.
- `Unit tests` are implemented to test the code and to make sure that it is working as expected.
- Should have more `integration tests` and `E2E tests` of-course but what is done should be more than enough to check how I test
  my code.

Documentation:

- Did not have much time, so I had to choose between extensive documentation on each
  folder like using [storybook](https://storybook.js.org/) or a quick explanation on `README.md`.
- Please don't take it like I did not mind about documentation, just did not seem a priority, in my opinion, does not
  mean that documentation is not important to the contrary.