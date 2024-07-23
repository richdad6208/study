import { bigOak } from "./crow-tech";
import { defineRequestType } from "./crow-tech";

bigOak.readStorage("food caches", (caches) => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, (info) => {
    console.log(info);
  });
});

defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});
