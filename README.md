# Intro to MOVIES

`MOVIES` is grate chance to deep into world of your best movies' list. Your personality library.

## What you can do?

- Find already prepared list of best movies
- Add movie
- Delete movie
- Sort by name or date
- Find movie
- Enjoy

## Stack of Project

- TypeScript
- Redux
- Redux Thunk
- Reselect
- Axios
- Styled-Components
- Antd

# Project Navigation

All files for Redux you'll find in folder `store`, foe memoization of Redux I used reselect;

All files include to UI you'll find in folder `components`. All component has particular file `useComponent` with necessary logic. For child component what takes props I add `React.memo` and `useCallback`

# Load and run project

before it, install Docker on your device

- git clone https://github.com/IraMysko/movies.git
- npm install
- docker-compose up --build -d - run and build your Application

## run Docker image

- docker pull movies
- docker run --name movies -p 3000:3000 -d movies

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
