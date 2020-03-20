# dnd-list
Drag and drop cell-color on the board.

## Starting
You can start by `yarn start` to run program.
```
yarn start
``` 

## Building
To build production program, you can run:
```
yarn build && serve -s build
``` 

## Testing
You can follow test case by setting up and trying to run
```
yarn test
```

## Setup variable environment

We have 3 files `.env.*` which were used to set up variables for some environments: `production`, `development` and `test`.

```
# .env.development
REACT_APP_API=https://dev.api.io/

# .env.test
REACT_APP_API=https://test.api.io/

# .env --> production
REACT_APP_API=https://api.io/
```
