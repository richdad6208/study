### HOOKS

- functional component에서 state를 가질 수 있게 해줌
- functional programming이 된다.
- Hook의 시초는 recompose라는 라이브러리이다. [링크](https://github.com/acdlite/recompose)

```javascript
const enhance = withState("counter", "setCounter", 0);
const Counter = enhance(({ counter, setCounter }) => (
  <div>
    Count: {counter}
    <button onClick={() => setCounter((n) => n + 1)}>Increment</button>
    <button onClick={() => setCounter((n) => n - 1)}>Decrement</button>
  </div>
));
```
