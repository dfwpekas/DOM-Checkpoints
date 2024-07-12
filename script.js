document.addEventListener('DOMContentLoaded', () => {
    // Select all plus and minus buttons
    const addIcons = document.querySelectorAll(".fa-plus-circle");
    const minusIcons = document.querySelectorAll(".fa-minus-circle");
    // Select the total price element
    const totalElement = document.querySelector(".total");
    // To Delete with the delete Icon from each
    const deleteIcons = document.querySelectorAll(".fa-trash-alt");
    const likeIcons = document.querySelectorAll(".fa-heart")

    // Function to update the total price
    const updateTotalPrice = () => {
        let totalPrice = 0;
        // Iterate over each card to calculate the total price
        document.querySelectorAll(".card").forEach((card) => {
            const quantityElement = card.querySelector(".quantity");
            const unitPriceElement = card.querySelector(".unit-price");
            const quantity = parseInt(quantityElement.innerText);
            const unitPrice = parseFloat(unitPriceElement.innerText.replace('$', ''));
            totalPrice += quantity * unitPrice;
        });
        // Update the total price element
        totalElement.innerText = `$ ${totalPrice.toFixed(2)}`;
    };

    // Add event listeners to all plus icons
    addIcons.forEach((add) => {
        add.addEventListener("click", () => {
            const card = add.closest(".card");
            const quantityElement = card.querySelector(".quantity");
            let quantity = parseInt(quantityElement.innerText);
            quantity++;
            quantityElement.innerText = (quantity < 10) ? "" + quantity : quantity;
            updateTotalPrice();
        });
    });

    // Add event listeners to all minus icons
    minusIcons.forEach((minus) => {
        minus.addEventListener("click", () => {
            const card = minus.closest(".card");
            const quantityElement = card.querySelector(".quantity");
            let quantity = parseInt(quantityElement.innerText);
            if (quantity > 0) {
                quantity--;
                quantityElement.innerText = (quantity < 10) ? "" + quantity : quantity;
                updateTotalPrice();
            }
        });
    });

    // Add event listeners to all delete icons
    deleteIcons.forEach((deleteIcon) => {
        deleteIcon.addEventListener("click", () => {
            const card = deleteIcon.closest(".card");
            card.remove();
            updateTotalPrice();
        });
    });

    // Add event listeners to all like Icons
    likeIcons.forEach((likeIcon) => {
        likeIcon.addEventListener("click", () => {
            likeIcon.classList.toggle("liked");
        });
    });


});

