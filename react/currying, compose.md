## curring & compose

- 커링은 인자를 여러개 받는 함수를 분리하여, 인자를 하나씩만 받는 함수의 체인으로 만드는 방법이다

```javascript
const userTalk = (userType) => (message) =>
  console.log(`${userType} said ${message}`);

const log = userTalk("first citizen");
log("i am first citizen"); // first citizen said i am first citizen
```

- compose는 함수들을 조합하여 새로운 함수를 만드는 것이다. 인자로 x가 주어진 함수 a의 결과값을 함수 b에 적용한다.

```javascript
const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((compose, f) => f(compose), arg);

const plusOne = (num) => num + 1;

const plusTwo = (num) => num + 2;

const twoFunc = compose(plusOne, plusTwo);

console.log(twoFunc(2));
```
