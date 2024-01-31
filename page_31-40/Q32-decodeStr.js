function decodeString(str) {
  let len = str.length;
  let result = "";

  for (let i = 0; i < len; i++) {
    let alphaNum = /[a-zA-Z0-9]/;
    let spclChar = ["@", "#", "%", "$"];
    if (str[i] == "@" && i + 1 < len && alphaNum.test(str[i + 1])) {
      result += str[i + 1].toUpperCase();
      i++;
    } else if (str[i] == "#" && i + 1 < len && alphaNum.test(str[i + 1])) {
      result += str[i + 1].toLowerCase();
      i++;
    } else if (str[i] == "%" && i + 1 < len && alphaNum.test(str[i + 1])) {
      result += str[i + 1];
    } else if (str[i] == "$" && i + 1 < len) {
      let j = i + 1;
      while (alphaNum.test(str[j])) {
        j++;
      }

      let subStr = str
        .slice(i + 1, j)
        .split("")
        .reverse()
        .join("");
      str = str.replace(str.slice(i + 1, j), subStr);
    } else if (!spclChar.includes(str[i]) && !alphaNum.test(str[i])) {
      continue;
    } else if (alphaNum.test(str[i])) {
      result += str[i];
    }
  }
  return result;
}

console.log(decodeString("S?e@@ee#M%o$oreH%^&@cfa%"));
