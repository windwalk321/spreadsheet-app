function wait(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function start() {
  console.log("0");
  await wait(3000);
  console.log("1");
}

start();

console.log("modulasd 'sdsad' sasdad");
