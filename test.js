const userTalk = (userType) => (message) =>
  console.log(`${userType} said ${message}`);

const log = userTalk("first citizen");
log("i am first citizen");
