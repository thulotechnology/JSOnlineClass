let jsonFile =`
{
    "name": "Rajan Poudel",
    "interest": ["Coding", "Technology"],
    "address": {
        "city": "Kathmandu",
        "country": "Nepal"
    }
}
`
// find data types

// Convert String to Object
let jsonData = JSON.parse(jsonFile);

console.log(jsonData.address.country);

//20 