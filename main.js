// ESM syntax is supported.
export {};
const fs = require("fs");
// Group Project registration and login functionality

// Erstellen einer login und registrier Webpage

// Arbeitsteilung:

// Team Member 1: Backend Development

// **Team Member 1: Backend Development**
// 1. Set up the project structure: Create the directory structure for the project and initialize a new Node.js project using npm.
// 2. Design the data structure: Define the structure of the user data, including username, password, and additional profile information, using JavaScript objects and arrays.
// 3. Implement user registration functionality:
//    - Create a function that takes user registration data as input and performs the necessary validations.
//    - Check for requirements like username uniqueness, password complexity, etc.
//    - If the registration data is valid, store the user details securely in a separate JSON file using the Node.js File System (fs) module.
// 4. Implement user login functionality:
//    - Create a function that takes user login credentials as input and verifies them against the stored user data in the JSON file.
//    - If the login credentials are valid, generate a session token or identifier and return it as a response.
// 5. Implement user profile management functionality:
//    - Create functions to handle profile retrieval and update requests.
//    - Read and update the user's profile information in the separate JSON file using the Node.js File System (fs) module.
// 6. Handle error cases:
//    - Implement proper error handling for scenarios like invalid inputs, duplicate usernames during registration, incorrect login credentials, etc.
//    - Define appropriate error messages and handle them gracefully in your code.
// 7. Test the backend functionality:
//    - Write unit tests to verify the registration, login, and profile management functionalities.
//    - Test different scenarios and edge cases to ensure the proper functioning of the backend code.

// To implement these adjustments, you can use the Node.js File System (fs) module to read from and write to a separate JSON file to store the user data securely on the server-side. The JSON file can be created, updated, and accessed using functions provided by the fs module, such as `fs.readFile`, `fs.writeFile`, `fs.readFileSync`, `fs.writeFileSync`, etc.

// Remember to handle file read/write operations asynchronously and handle errors appropriately. Additionally, ensure proper file paths and file permissions are set when accessing the JSON file.

class userData {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
}

function storeUserData(userData) {
  // Read the existing data from the JSON file (if any)
  let existingData = [];
  try {
    const jsonData = fs.readFileSync("userdata.json", "utf-8");
    existingData = JSON.parse(jsonData);
  } catch (error) {
    // Handle the case where the file doesn't exist yet or cannot be read
    console.error("Error reading userdata.json:", error);
  }

  // Check for duplicate registrations
  const isDuplicate = existingData.some(
    (user) =>
      user.username === userData.username || user.email === userData.email
  );
  if (isDuplicate) {
    console.error("User with the same username or email already exists.");
    return;
  }

  // Add the new user data to the existing data
  existingData.push(userData);

  // Convert the updated data to JSON string
  const updatedData = JSON.stringify(existingData, null, 2);

  // Write the updated data back to the JSON file
  fs.writeFile("userdata.json", updatedData, "utf-8", (error) => {
    if (error) {
      // Handle the case where the file cannot be written
      console.error("Error writing userdata.json:", error);
    } else {
      console.log("User data stored successfully.");
    }
  });
}
const user1 = new userData("John", "password123", "john@example.com");
const user2 = new userData("Jane", "password456", "jane@example.com");
// Add more instances as needed

storeUserData(user1);
storeUserData(user2);
// Call the function for additional instances
