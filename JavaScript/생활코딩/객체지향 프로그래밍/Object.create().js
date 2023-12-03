let superObj = { superVal: "super" };
// let subObj = { subVal: "sub" };
// subObj.__proto__ = superObj; //자바스크립트 표준은 아님, 대부분 브라우저는 실제로는 구현해서 제공하고 있음. 사실상 표준
let subObj = Object.create(superObj);
subObj.subVal = "sub";
debugger;
console.log("subObj.subVal=> ", subObj.subVal);
console.log("subObj.superVal=> ", subObj.superVal);
subObj.superVal = "sub"; //객체를 바꾸는 거지 프로토타입의 객체를 바꾸는 것이 아님
console.log("superObj.superVal=> ", superObj.superVal);
