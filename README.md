# react-simple-spinner
> A simple, flexible spinner for React.js

> Based on [vue-simple-spinner](https://github.com/dzwillia/vue-simple-spinner)

react-simple-spinner is designed to be a lightweight [React.js](https://reactjs.org) spinner requiring minimal configuration.

## JsFiddle Demo

[https://jsfiddle.net/riazxrazor/nh9nuqhL/](https://jsfiddle.net/riazxrazor/nh9nuqhL/)

## Requirements
* [React.js](https://reactjs.org/) (^15.5.4)

## Installation

### NPM

```bash
npm install react-simple-spinner --save
```

## Usage
> All styling for this component is done and requires no external CSS files.

### ES6

```js
import React, { Component } from 'react';
import Spinner from 'react-simple-spinner'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Spinner message="Loading..." />
      </div>
    );
  }
}

export default App;
```

## License
react-simple-spinner is open source and released under the [MIT License](LICENSE).

Copyright (c) 2017 [Riaz Laskar](https://riazxrazor.in).

> A small step in react.js :D


