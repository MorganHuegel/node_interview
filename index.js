const { sortUsers } = require("./sortUsers");

const test1 = [
    { firstName: "Morgan", lastName: "Huegel" },
    { firstName: "Carmen", lastName: "Cox" },
    { firstName: "Jeremy", lastName: "The Raccoon" },
    { firstName: "Jeremiah", lastName: "The Oppossum" },
];

const result1 = sortUsers(test1);
if (
    result1 &&
    result1[0]?.lastName === "Cox" &&
    result1[1]?.lastName === "Huegel" &&
    result1[2]?.lastName === "The Oppossum" &&
    result1[3]?.lastName === "The Raccoon"
) {
    console.log("Passed :)");
} else {
    console.log("Failed :(");
}
