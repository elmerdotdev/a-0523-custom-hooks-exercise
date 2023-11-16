# React Custom Hooks Exercise

Demo: [https://drive.google.com/file/d/1xyYmlyDzy6S6qNcBUh5jRYrSiFJGFNCw/view?usp=sharing]

## Instructions

1. Install the project by running `npm install` after cloning the repository
2. Using a custom hook, store the input into the browser's *LocalStorage* upon clicking log in
3. Fetch the name from *LocalStorage* and display on the `<Welcome />` component
4. Clicking log out will remove the name from *LocalStorage*
5. Memoized the `<Quote />` component so that it doesn't re-render whenever you log in and log out

**IMPORTANT:** Unless you log out, closing and reopening the browser window should retain your login name (see demo)
