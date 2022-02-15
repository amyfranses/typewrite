const sentence = "hello there from lighthouse labs";

let delay = 0;

for (const char of sentence) {
  setTimeout(() => {
    // bug - next prompt (vagrant) appears on the same line
    process.stdout.write(char);
  }, (delay += 50));
}
setTimeout(() => {
  console.log("\n");
}, delay);
