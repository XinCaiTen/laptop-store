const laptops = document.querySelector("#laptops");
const cart = document.querySelector("#cart tbody");
const total = document.querySelector("#total");

laptops.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    const laptop = event.target.parentElement;
    const name = laptop.querySelector("h2").textContent;
    const price = laptop.querySelector("p").textContent;
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${name}</td>
      <td>${price}</td>
      <td><input type="number" value="1"></td>
      <td>${price}</td>
    `;
    cart.appendChild(row);
    calculateTotal();
  }
});

cart.addEventListener("input", (event) => {
  if (event.target.tagName === "INPUT") {
    const row = event.target.parentElement.parentElement;
    const price = row.querySelector("td:nth-child(2)").textContent;
    const quantity = event.target.value;
    row.querySelector("td:nth-child(4)").textContent = (price * quantity).toFixed(2);
    calculateTotal();
  }
});

function calculateTotal() {
  let subtotal = 0;
  for (let row of cart.rows) {
    const price = row.querySelector("td:nth-child(2)").textContent;
    const quantity = row.querySelector("td:nth-child(3) input").value;
    subtotal += price * quantity;
  }
  total.textContent = `Total: ${subtotal.toFixed(2)} ₫`;
}
