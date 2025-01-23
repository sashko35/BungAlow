document.addEventListener("DOMContentLoaded", () => {
    const fullName = document.getElementById("fullName");
    const reservationDate = document.getElementById("reservationDate");
    const daysCount = document.getElementById("daysCount");
    const bungalowType = document.getElementById("bungalowType");
    const totalPriceDisplay = document.getElementById("totalPrice");
    const reserveButton = document.getElementById("reserveButton");

    const paywallModal = document.getElementById("paywallModal");
    const modalTotalPrice = document.getElementById("modalTotalPrice");
    const confirmPayment = document.getElementById("confirmPayment");
    const cancelPayment = document.getElementById("cancelPayment");

    let totalPrice = 0;

    // Calculate the total price dynamically
    function calculateTotalPrice() {
        const days = parseInt(daysCount.value) || 0;
        const bungalowOption = bungalowType.options[bungalowType.selectedIndex];
        const pricePerDay = parseInt(bungalowOption.getAttribute("data-price")) || 0;

        totalPrice = days * pricePerDay;
        totalPriceDisplay.textContent = totalPrice;
    }

    // Event listeners for input changes
    daysCount.addEventListener("input", calculateTotalPrice);
    bungalowType.addEventListener("change", calculateTotalPrice);

    // Show the paywall modal
    reserveButton.addEventListener("click", () => {
        if (!fullName.value || !reservationDate.value || !daysCount.value) {
            alert("Моля, попълнете всички полета.");
            return;
        }

        modalTotalPrice.textContent = totalPrice;
        paywallModal.classList.remove("hidden");
    });

    // Confirm payment
    confirmPayment.addEventListener("click", () => {
        alert("Резервацията е успешно направена! Благодарим Ви.");
        paywallModal.classList.add("hidden");

        // Reset the form
        fullName.value = "";
        reservationDate.value = "";
        daysCount.value = "";
        bungalowType.selectedIndex = 0;
        totalPriceDisplay.textContent = "0";
    });

    // Cancel payment
    cancelPayment.addEventListener("click", () => {
        paywallModal.classList.add("hidden");
    });
});
