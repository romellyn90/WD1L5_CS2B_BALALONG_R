/**
 * loginUser - Retrieves saved user record from localStorage, 
 * compares input credentials, and redirects to list.html upon success.
 */
function loginUser() {
    // Step 1: Retrieve the saved registration string from browser localStorage
    let savedRecord = localStorage.getItem("savedUser");

    // Step 2: Check if any user record exists (if null or blank, alert to register first)
    if (!savedRecord || savedRecord.trim() === "") {
        document.getElementById("loginMessage").textContent = "No user found. Register first!";
        return;
    }

    // Step 3: Split the saved string record into an array using the "|" delimiter
    // Index layout based on your registration form:
    // [0] = Full Name | [1] = Address | [2] = Username | [3] = Email | [4] = Password
    let userData = savedRecord.split("|"); 

    let old_name = userData[0].trim();     // Extract Full Name for the welcome alert
    let old_uname = userData[2].trim();    // Extract stored Username
    let old_password = userData[4].trim(); // Extract stored Password

    // Step 4: Get the username and password values typed by the user in the login form
    let login_uname = document.getElementById("login_uname").value.trim();
    let login_pword = document.getElementById("login_pword").value.trim();
    
    // Step 5: Check if input credentials match the stored record using a conditional statement
    if (login_uname === old_uname && login_pword === old_password) {
        // Greet the user with their full name
        alert("Welcome " + old_name + "! You may now add items.");
        
        // Step 6: Redirect the browser window to your grocery list page
        window.location.href = "list.html";
    } else {
        // Display an error message inside the paragraph if credentials do not match
        document.getElementById("loginMessage").textContent = "Invalid User Credentials!";
    }
}