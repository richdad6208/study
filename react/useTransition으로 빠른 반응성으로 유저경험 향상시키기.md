### useTransition

- input의 입력에 따라 컴포넌트가 리랜더링이 발생할 때, 컴포넌트의 리랜더링이 끝나야 input에 입력을 할 수 있는 지연시간이 존재한다.
- 그러므로 이 지연시간은 사용자 경험에 좋지 않다.
- useTranstion을 활용하여 컴포넌트의 리랜더링 중에도 input의 입력을 가능하게 처리할 수 있다.

```jsx
function WordList() {
  const [filter, setFilter] = useState("");
  const [deferedFilter, setDeferedFilter] = useState("");
  const [isPending, startTransition] = useTransition();
  const handleChange = ({ target: { value } }) => {
    setFilter(value);
    startTransition(() => {
      setDeferedFilter(value);
    });
  };
  return (
    <main>
      <label>
        Filter:
        <input type="search" value={filter} onChange={handleChange} />
      </label>
      {isPending ? (
        <p>Loading</p>
      ) : (
        <Words list={list} filter={deferedFilter} />
      )}
    </main>
  );
}
```
