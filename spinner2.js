process.stdout.write('hello from spinner2.js... \rheyyy\n');
let delay = 100;
let increment = 200;
const spinner2 = ['\r|','\r/','\r-','\r\\','\r|  \n'];
for (let i = 0; i < spinner2.length; i++) {
  delay += increment;
  setTimeout(() => {
    process.stdout.write(spinner2[i]);
  }, delay);
}



// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);
// setTimeout(() => {
//   process.stdout.write('\r| ');
// },900);