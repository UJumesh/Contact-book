document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const contactList = document.getElementById("contact-list");

    // Add new contact
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        if (!name || !email || !phone) {
            alert("Please fill in all fields!");
            return;
        }

        // Add the contact to the table
        addContactToTable({ name, email, phone });

        // Reset form
        contactForm.reset();
    });

    // Event delegation for delete buttons
    contactList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            const row = e.target.closest("tr");
            if (row) row.remove();
        }
    });

    // Function to add a contact row to the table
    function addContactToTable(contact) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Profile" width="40" /></td>
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td><button class="btn delete-btn">🗑️ Delete</button></td>
        `;
        contactList.appendChild(tr);
    }
});
