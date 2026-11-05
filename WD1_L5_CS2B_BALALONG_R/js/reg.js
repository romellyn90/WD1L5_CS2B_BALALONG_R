function saveUserRecord() {
    // 1. Get input elements and trim whitespace
    const fnameInput = document.getElementById("full_name");
    const addressInput = document.getElementById("address");
    const unameInput = document.getElementById("user_name");
    const emailInput = document.getElementById("email");
    const pwordInput = document.getElementById("pword");

    const fname = fnameInput.value.trim();
    const address = addressInput.value.trim();
    const uname = unameInput.value.trim();
    const email = emailInput.value.trim();
    const pword = pwordInput.value.trim();

    const regMessage = document.getElementById("regMessage");

    // 2. Validate that no field is blank or whitespace-only
    if (!fname || !address || !uname || !email || !pword) {
        regMessage.style.color = "red";
        regMessage.textContent = "Please complete all required details!";
        return;
    }

    // 3. Concatenate data with "|" delimiter
    // Format: Full Name | Address | Username | Email | Password
    let userRecord = `${fname}|${address}|${uname}|${email}|${pword}`;

    // 4. Save to localStorage
    localStorage.setItem("savedUser", userRecord);

    // 5. Display success feedback
    regMessage.style.color = "green";
    regMessage.textContent = "User details have been successfully recorded!";

    // 6. Redirect after a short moment so the user sees the success message
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1200);
}