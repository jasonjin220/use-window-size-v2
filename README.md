# useWindowSize()

[![Node version](https://img.shields.io/npm/v/use-window-size-v2.svg?style=flat)](https://www.npmjs.com/package/use-window-size-v2)
[![NPM total downloads](https://img.shields.io/npm/dt/use-window-size-v2.svg?style=flat)](https://npmcharts.com/compare/use-window-size-v2?minimal=true)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/use-window-size-v2.svg)](https://www.npmjs.com/package/use-window-size-v2)
![NPM license](https://img.shields.io/npm/l/use-window-size-v2.svg?style=flat)

React hook to obtain the current window size in React apps.

useWindowSize() automatically updates width and height values when screen size changes. You can get your application window's width and height like this:

```jsx
const { height, width } = useWindowSize();
```

## Installation

```sh
npm install use-window-size-v2
```

or

```sh
yarn add use-window-size-v2
```

## Usage

This hook returns the current height of the window. It is debounced, meaning it will wait `delay` milliseconds (0ms by default) for the resize events to stop firing before it actually updates its state with the new width and height.

### Parameter (optional)

| Key     | Type   | Default | Description                                                                                                                        |
| ------- | ------ | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `delay` | number | `0`     | The amount of time in milliseconds you want to wait after the latest resize event before updating the size of the window in state. |

### Return object

|        | Type     | Description                        |
| ------ | -------- | ---------------------------------- |
| width  | `number` | The current `width` of the window  |
| height | `number` | The current `height` of the window |

## Example

[![Edit react-hook-usewindowsize](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-window-size-v2-w85fs5)

```jsx
import useWindowSize from "use-window-size-v2";

const App = () => {
  const { width, height } = useWindowSize(100); // wait 100ms for the resize events

  return <div>{`height: ${height}, width: ${width}`}</div>;
};

export default App;
```
