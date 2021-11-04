export const permute = (n) => {
  const outputArray = [];
  for (let i = 0; i < Math.pow(2, n); ++i) {
    const boolArray = [];
    // eslint-disable-next-line no-new-wrappers
    let bin = new Number(i).toString(2);
    if (bin.length < n) {
      const zeros = "0".repeat(n - bin.length);
      bin = zeros + bin;
    }
    for (const c of bin) {
      if (c === "1") {
        boolArray.push(true);
      } else {
        boolArray.push(false);
      }
    }

    outputArray.push(boolArray);
  }
  return outputArray;
};

export const remove = (array, value) => {
  return array.filter((i) => i !== value);
};

export const parse = (str) => {
  // eslint-disable-next-line no-new-func
  return Function(`'use strict'; return (${str})`)();
};
export const replaceHTML = (str) => {
  str = str.replace(/[^a-zA-Z|&∨∧¬()!]/gi, "");
  // eslint-disable-next-line no-control-regex
  str = str.replace(/[^\x00-\x7F∨∧¬]/gi, "");
  str = str.replace("||", "∨");
  str = str.replace("&&", "∧");
  str = str.replace("!", "¬");
  return str;
};
