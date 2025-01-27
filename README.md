# React setInterval useEffect Bug

This repository demonstrates a common error in React when using setInterval within the useEffect hook. The interval function correctly logs to the console, but it fails to update the component's state, leading to a stale UI.

## Bug Description
The provided `MyComponent` uses `setInterval` inside `useEffect` to log a message every second.  However, it doesn't actually update the `count` state, resulting in the counter remaining at 0 despite the interval running.  This is because `setInterval` runs independently of React's state update mechanism.

## Solution
The solution uses `setCount` inside the `setInterval` callback to update the component's state directly.