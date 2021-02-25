// We aim to aim functional approaches when looping
// like map, fliter, reduce, find


const failures = ["misclick", "falling down", "skateboard accident", "tiktok fail"];

// looper igennem et array nemt
failures.map((i, index) => {
    console.log(i, index);
});

// på en linje
failures.map((i, index) => console.log(i, index));


const newFailures = failures.map((failure) => failure);

console.log();
console.log(newFailures);