function addItem() {
    // 1. Get elements and trim whitespace from the item name
    const itemNameInput = document.getElementById("item_name");
    const itemQtyInput = document.getElementById("item_qty");
    
    const item = itemNameInput.value.trim();
    const qty = itemQtyInput.value.trim();

    // 2. Robust validation (checks for blanks or whitespace-only strings)
    if (item === "" || qty === "") {
        alert("Please enter both an item name and a quantity!");
        itemNameInput.focus();
        return;
    }

    // Ensure quantity is a positive number
    if (Number(qty) <= 0) {
        alert("Quantity must be greater than zero.");
        itemQtyInput.focus();
        return;
    }

    const groceryList = document.getElementById("groceryList");

    // 3. Create list item and content securely
    const newItem = document.createElement("li");
    newItem.textContent = `${item} — QTY: ${qty} `;

    // 4. Add a "Remove" button for each item
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function() {
        groceryList.removeChild(newItem);
    };
    newItem.appendChild(deleteBtn);

    // 5. Append to the list
    groceryList.appendChild(newItem);

    // 6. Clear inputs and return focus to the first field for quick entry
    itemNameInput.value = "";
    itemQtyInput.value = "";
    itemNameInput.focus();
}