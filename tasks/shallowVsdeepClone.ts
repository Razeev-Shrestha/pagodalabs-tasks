const info = {
  name: "Rajeev Shrestha",
  age: 25,
  address: {
    street: "jorpati",
    city: "Kathnandu",
    state: "Bagmati",
  },
  hobbies: ["reading", "photography", "coding"],
};

// shallow cloning methods
const cloneInfo1 = { ...info };
//OR
const cloneInfo2 = Object.assign({}, info);

cloneInfo1.address.street = "Boudha";

// deep cloning methods
const cloneInfo3 = JSON.parse(JSON.stringify(info));
// OR
const clone4 = structuredClone(info);

// the cloneInfo1 and cloneInfo2 object is a shallow copy of the info object.
//  When we modify the street property of the address object in the cloneInfo1 or cloneInfo2 object, the same change is also reflected in the info object.
//  This is because the address object is copied by reference, not by value.
//BUT
// The cloneInfo3 or cloneInfo4 object, is a deep copy of the info object.
//  When we modify the street property of the address object in the cloneInfo3 object, the original object is not affected.
//   because the cloneInfo3 object creates a completely new copy of the nested address object.
