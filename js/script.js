// Get references to the input elements and the button
const streetNumberInput = document.getElementById("streetNumber");
const streetNameInput = document.getElementById("streetName");
const displayAddressButton = document.getElementById("displayAddress");
const addressDisplay = document.getElementById("address");

// Add an event listener to the button
displayAddressButton.addEventListener("click", function() {
	// Get the values of the input elements
	const streetNumber = streetNumberInput.value;
	const streetName = streetNameInput.value;

	// Display the address
	addressDisplay.textContent = `Your address is: ${streetNumber} ${streetName}`;
});
