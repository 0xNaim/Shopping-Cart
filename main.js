// phone increase btn handler
const phoneIncrease = document.getElementById("phoneIncrease").addEventListener("click", () => {
	const phoneInput = document.getElementById("phoneCount");
	const phoneCount = parseInt(phoneInput.value);
	const phoneIncrease = phoneCount + 1;
	const phoneNewValue = (phoneInput.value = phoneIncrease);

	// price handling
	const phoneTotal = phoneIncrease * 1219;
	const phoneCurrentPrice = document.getElementById("phoneTotal");

	// phone price insert
	const phoneNewPrice = (phoneCurrentPrice.innerText = `$${phoneTotal}`);

	// function called
	calculateTotal();
});

// phone decrease btn handler
const phoneDecrease = document.getElementById("phoneDecrease").addEventListener("click", () => {
	const phoneInput = document.getElementById("phoneCount");
	const phoneCount = parseInt(phoneInput.value);

	if (phoneCount > 0) {
		const phoneDecrease = phoneCount - 1;
		const phoneNewValue = (phoneInput.value = phoneDecrease);

		// price handling
		const phoneTotal = phoneDecrease * 1219;
		const phoneCurrentPrice = document.getElementById("phoneTotal");

		// phone price insert
		const phoneNewPrice = (phoneCurrentPrice.innerText = `$${phoneTotal}`);
	}
	else {
		alert("Hey! Negative value not allow...!")
	}

	// function called
	calculateTotal();
});

// case increase btn handler
const caseIncrease = document.getElementById("caseIncrease").addEventListener("click", () => {
	const caseInput = document.getElementById("caseCount");
	const caseCount = parseInt(caseInput.value);
	const caseIncrease = caseCount + 1;
	const caseNewValue = (caseInput.value = caseIncrease);

	// case price handling
	const caseTotal = caseIncrease * 59;
	const caseCurrentPrice = document.getElementById("caseTotal");

	// case price insert
	const caseNewPrice = (caseCurrentPrice.innerText = `$${caseTotal}`);

	// function called
	calculateTotal();
});

// case decrease btn handler
const caseDecrease = document.getElementById("caseDecrease").addEventListener("click", () => {
	const caseInput = document.getElementById("caseCount");
	const caseCount = parseInt(caseInput.value);

	if (caseCount > 0) {
		const caseDecrease = caseCount - 1;
		const caseNewValue = (caseInput.value = caseDecrease);

		// case price handling
		const caseTotal = caseDecrease * 59;
		const caseCurrentPrice = document.getElementById("caseTotal");

		// case price insert
		const caseNewPrice = (caseCurrentPrice.innerText = `$${caseTotal}`);
	}
	else {
		alert("Hey! Negative value not allow...!")
	}

	// function called
	calculateTotal();
});

// calculate total price
const calculateTotal = () => {
	const phoneInput = document.getElementById("phoneCount");
	const phoneCount = parseInt(phoneInput.value);

	const caseInput = document.getElementById("caseCount");
	const caseCount = parseInt(caseInput.value);

	// subtotal price calculate
	const subTotal = phoneCount * 1219 + caseCount * 59;
	const currentSubTotal = document.getElementById("totalPrice");
	const newSubTotal = (currentSubTotal.innerText = `$${subTotal}`);

	// tax calculate
	const tax = document.getElementById("totalTax");
	// tax 3%
	const totalTax = (subTotal * 3) / 100;
	const newTotalTax = (tax.innerText = `$${totalTax}`);

	// total price calculate
	const totalPrice = document.getElementById("grandTotal");
	const grandTotal = subTotal + totalTax;
	const newGrandTotal = (totalPrice.innerText = `$${grandTotal}`);
};
