// ESM syntax is supported.
export {};

import * as fs from 'node:fs';
/*
let form = document.getElementById("welcomeFormular");
form.addEventListener("submit", formularAbsenden);

function formularAbsenden(event) {
  event.preventDefault(); 
console.log("Hi Team")
}*/

class UserData {
  constructor(firstname, lastName, email,password ) {
    this.firstname = firstname;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

let form = document.getElementById("registrationFormular");
form.addEventListener("submit", formularCreateAccount);


export function formularCreateAccount(event) {
  console.log("hii")
  event.preventDefault(); // Verhindert das Standardverhalten des Absendens

  let firstName = document.getElementById("FirstName").value;
  let lastName = document.getElementById("LastName").value;
  let eingabeEmail = document.getElementById("NewEmail").value;
  let eingabePassword = document.getElementById("NewPassword").value;
  let eingabePassword2 = document.getElementById("NewPassword2").value;

// Funktion zur Überprüfung der Email-Adresse mit einem einfachen regulären Ausdruck
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
let regName = /\d+$/g;	

if (firstName == "" || regName.test(firstName)) {
  window.alert("Please enter your first name properly.");
  return false;
}

if (lastName == "" || regName.test(lastName)) {
  window.alert("Please enter your last name properly.");
  return false;
}

  // Eingabevalidierung
  if (!eingabeEmail || eingabeEmail.trim() === "") {
    alert("Bitte geben Sie eine Email-Adresse ein.");
    return;
  }

  if (!validateEmail(eingabeEmail)) {
    alert("Bitte geben Sie eine gültige Email-Adresse ein.");
    return;
  }

  if (
    !eingabePassword ||
    eingabePassword.trim() === "" ||
    eingabePassword.length < 8 ||
    eingabePassword != eingabePassword2
  ) {
    alert(
      "Bitte geben Sie ein Passwort ein. Das Passwort muss mindestens 8 Zeichen lang sein."
    );
    return;
  }

console.log("Eingegebener Vorname: " + firstName);
console.log("Eingegebener Nachname: " + lastName);
console.log("Eingegebene Email: " + eingabeEmail);
console.log("Eingegebenes Passwort: " + eingabePassword);

// Create a new instance of UserData with the entered data
const newUser = new UserData(firstName,lastName,eingabeEmail,eingabePassword);

// Add the new user to the system
//addUser(newUser);

// Reset the form
//event.target.reset();

// Display a success message or perform any other desired actions
console.log("New user created:", newUser);

}



function addUser(UserData) {
  // Check if the file exists before reading
  if (!fs.existsSync("userdata.json")) {
    console.error("userdata.json does not exist.");
    return;
  }

  // Read the existing data from the JSON file
  let existingData = [];
  let jsonData;
  try {
    jsonData = fs.readFileSync("userdata.json", "utf-8");
    existingData = JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading userdata.json:", error);
    return;
  }

  // Check for duplicate registrations
  const isDuplicate = existingData.some(
    (user) =>
      user.firstname === userData.firstname || user.email === userData.email || user.lastName === userData.lastName
  );

  if (isDuplicate) {
    console.error("User with the same username or email already exists.");
    return;
  }

  // Add the new user data to the existing array
  existingData.push(userData);

  // Convert the updated data to JSON string
  const updatedData = JSON.stringify(existingData, null, 2);

  // Write the updated data back to the JSON file
  fs.writeFileSync("userdata.json", updatedData, "utf-8");

  console.log("User added successfully.");
}


/*
  // Create a new instance of UserData with the entered data
  const newUser = new UserData("", eingabePassword, eingabeEmail);

  // Add the new user to the system
  addUser(newUser);

  // Reset the form
  event.target.reset();

  // Display a success message or perform any other desired actions
  console.log("New user created:", newUser);
}

// Das Formular-Element über die ID abrufen
let formWelcome = document.getElementById("welcomeFormular");

// Die Funktion formularAbsenden aufrufen, wenn das Formular abgeschickt wird
formWelcome.addEventListener("submit", formularAbsenden);

// Funktion zur Überprüfung der Email-Adresse mit einem einfachen regulären Ausdruck
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


// -------------------Formular Anmelde Validierung------------------
export function formularAnmelden(event) {
  event.preventDefault(); // Verhindert das Standardverhalten des Absendens

  // Den Inhalt der Eingabefelder Email und Password über die IDs abrufen
  let eingabeEmail = document.getElementById("InputEmail").value;
  let eingabePassword = document.getElementById("InputPassword").value;

  // Eingabevalidierung
  if (!eingabeEmail || eingabeEmail.trim() === "") {
    alert("Bitte geben Sie eine Email-Adresse ein.");
    return;
  }

  if (!validateEmail(eingabeEmail)) {
    alert("Bitte geben Sie eine gültige Email-Adresse ein.");
    return;
  }

  if (
    !eingabePassword ||
    eingabePassword.trim() === "" ||
    eingabePassword.length < 8
  ) {
    alert(
      "Bitte geben Sie ein Passwort ein. Das Passwort muss mindestens 8 Zeichen lang sein."
    );
    return;
  }

  // Hier kannst du den eingegebenen Inhalt weiterverarbeiten, z. B. an das Backend senden
  console.log("Eingegebene Email: " + eingabeEmail);
  console.log("Eingegebenes Passwort: " + eingabePassword);
}

// Das Formular-Element über die ID abrufen
let formAnmelden = document.getElementById("formularAnmelden");

// Die Funktion formularAnmelden aufrufen, wenn das Formular abgeschickt wird
formAnmelden.addEventListener("submit", formularAnmelden);

// Funktion zur Überprüfung der Email-Adresse mit einem einfachen regulären Ausdruck
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
*/
//---------------------------------Formular Create an Account!-----------------


// Hier kannst du den eingegebenen Inhalt weiterverarbeiten, z. B. an das Backend senden
