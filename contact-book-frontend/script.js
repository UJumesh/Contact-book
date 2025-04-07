function addContact() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
  
    if (!name || !phone) return alert("Please fill all fields");
  
    const li = document.createElement("li");
    li.textContent = `${name} - ${phone}`;
  
    const btn = document.createElement("button");
    btn.textContent = "Delete";
    btn.onclick = () => li.remove();
    btn.style.marginLeft = "10px";
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
  
    li.appendChild(btn);
    document.getElementById("contact-list").appendChild(li);
  
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
  }
  