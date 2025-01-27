```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: The interval function doesn't update the count
    const intervalId = setInterval(() => {
      console.log('Incrementing count');
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```