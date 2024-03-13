a.Using for loop:

const resumeData = {
  // Resume data here...
};

for (let key in resumeData) {
  console.log(key + ": " + resumeData[key]);
}

b.Using for...in loop:

for (let key in resumeData) {
  if (resumeData.hasOwnProperty(key)) {
    console.log(key + ": " + resumeData[key]);
  }
}
c.Using for...of loop (only works with iterable objects like arrays

const keys = Object.keys(resumeData);
for (let key of keys) {
  console.log(key + ": " + resumeData[key]);
}

d.Using forEach method (only works with arrays):

Object.entries(resumeData).forEach(([key, value]) => {
  console.log(key + ": " + value);
});