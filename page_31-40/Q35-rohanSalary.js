function salaryOfRohan(X, Y, S) {
  let longestStreak = 0,
    contiStreak = 0,
    workingDay = 0;
  for (let num of S) {
    if (num === "1") {
      contiStreak++;
      workingDay++;
    } else {
      contiStreak = 0;
    }
    longestStreak = Math.max(longestStreak, contiStreak);
  }

  const result = workingDay * X + longestStreak * Y;
  return result;
}

const input1 = [6, 3, "111100110101100000101100011111"];
const input2 = [8, 2, "111010111101001010100100111101"];
console.log(salaryOfRohan(...input1));
