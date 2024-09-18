let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a. Remove the first company
companies.shift();

// b. Remove Uber & Add Ola in its place
const indexOfUber = companies.indexOf("Uber");
if (indexOfUber !== -1) {
    companies.splice(indexOfUber, 1, "Ola");
}

// c. Add Amazon at the end
companies.push("Amazon");

console.log(companies);
