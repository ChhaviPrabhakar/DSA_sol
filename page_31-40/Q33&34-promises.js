const countries = ["India", "USA"];
const states = {
  India: [
    { name: "Karnataka", population: 123 },
    { name: "Maharashtra", population: 134 },
    { name: "Goa", population: 38 },
    { name: "Telangana", population: 67 },
    { name: "Manipur", population: 101 },
  ],
  USA: [
    { name: "Michigan", population: 124 },
    { name: "Virginia", population: 48 },
    { name: "Maine", population: 90 },
    { name: "Texas", population: 15 },
  ],
};

async function getCountry(countryIndex) {
  return new Promise((resolve, reject) => {
    if (countryIndex >= countries.length) {
      reject("Error");
    } else {
      resolve(countries[countryIndex]);
    }
  });
}

async function getStates(countryName) {
  return new Promise((resolve, reject) => {
    const countryStates = states[countryName];
    if (countryStates) {
      resolve(countryStates);
    } else {
      reject("Error");
    }
  });
}

// async function exampleUsage() {
//   try {
//     const countryName = await getCountry(0);
//     console.log("Country Name:", countryName);

//     const countryStates = await getStates(countryName);
//     console.log("Country States:", countryStates);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// exampleUsage();

//------------------------------------------------------

async function solution(index) {
  try {
    const countryName = await getCountry(index);
    const countryStates = await getStates(countryName);
    const totalPopulation = countryStates.reduce(
      (total, state) => total + state.population,
      0
    );
    return totalPopulation.toString();
  } catch (error) {
    return `ind = ${index} invalid`;
  }
}

//------------------------------------------------------

const input1 = 0;
const input2 = 1;
const input3 = 10000;

(async () => console.log(await solution(input1)))();
