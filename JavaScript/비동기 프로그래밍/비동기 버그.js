function anyStorage(nest, source, name) {
  if (source == nest.name) return Storage(nest, name);
  else return routeRequest(nest, source, "storage", name);
}

async function chicks(nest, year) {
  let list = "";
  await Promise.all(
    network(nest).map(async (name) => {
      list += `${name}: ${await anyStorage(nest, name, `chicks in ${year}`)}\n`;
    })
  );
  return list;
}

async function chicks(nest, yaer) {
  let lines = network(nest).map(async (name) => {
    return name + ": " + (await anyStorage(nest, name, `chicks in ${year}`));
  });
  return (await Promise.all(lines)).join("");
}
