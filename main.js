// phone increase btn handler
const phoneIncrease = document.getElementById("phoneIncrease").addEventListener("click", () => {
	const phoneInput = document.getElementById("phoneCount");
	const phoneCount = parseInt(phoneInput.value);
	const phoneIncrease = phoneCount + 1;

	// value insert
	const phoneNewValue = (phoneInput.value = phoneIncrease);

	// price handling
	const phoneTotal = phoneIncrease * 1219;
	const phoneCurrentPrice = document.getElementById("phoneTotal");

	// phone price insert
	const phoneNewPrice = (phoneCurrentPrice.innerText = `$${phoneTotal}`);
});

// phone decrease btn handler
const phoneDecrease = document.getElementById("phoneDecrease").addEventListener("click", () => {
	const phoneInput = document.getElementById("phoneCount");
	const phoneCount = parseInt(phoneInput.value);

	if (phoneCount > 0) {
		const phoneDecrease = phoneCount - 1;

		// value insert
		const phoneNewValue = (phoneInput.value = phoneDecrease);

		// price handling
		const phoneTotal = phoneDecrease * 1219;
		const phoneCurrentPrice = document.getElementById("phoneTotal");

		// phone price insert
		const phoneNewPrice = (phoneCurrentPrice.innerText = `$${phoneTotal}`);
	}
});

// case increase btn handler
const caseIncrease = document.getElementById("caseIncrease").addEventListener("click", () => {
	const caseInput = document.getElementById("caseCount");
	const caseCount = parseInt(caseInput.value);
	const caseIncrease = caseCount + 1;

	// value insert
	const caseNewValue = (caseInput.value = caseIncrease);

	// case price handling
	const caseTotal = caseIncrease * 59;
	const caseCurrentPrice = document.getElementById("caseTotal");

	// case price insert
	const caseNewPrice = (caseCurrentPrice.innerText = `$${caseTotal}`);
});

// case decrease btn handler
const caseDecrease = document.getElementById("caseDecrease").addEventListener("click", () => {
	const caseInput = document.getElementById("caseCount");
	const caseCount = parseInt(caseInput.value);

	if (caseCount > 0) {
		const caseDecrease = caseCount - 1;

		// value insert
		const caseNewValue = (caseInput.value = caseDecrease);

		// case price handling
		const caseTotal = caseDecrease * 59;
		const caseCurrentPrice = document.getElementById("caseTotal");

		// case price insert
		const caseNewPrice = (caseCurrentPrice.innerText = `$${caseTotal}`);
	}
});
