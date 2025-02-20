
const products = [
    {
        product_name: "Double-Seater chairs",
        price: "$19.99",
        image: "assets/image/img-1.jpeg"
    },
    {
        product_name: "Wooden chair",
        price: "$18.99",
        image: "assets/image/img-2.jpg"
    },
    {
        product_name: "Steel chair",
        price: "$20.99",
        image: "assets/image/img-3.jpeg"
    },
    {
        product_name: "Cusion chair",
        price: "$21.99",
        image: "assets/image/img-4.jpg"
    },
    {
        product_name: "Set Sofa",
        price: "$22.99",
        image: "assets/image/img-5.jpg"
    },
    {
        product_name: "Cusion Steel Chair",
        price: "$29.99",
        image: "assets/image/img-6.jpg"
    },
    {
        product_name: "Round sofa",
        price: "$31.99",
        image: "assets/image/img-7.jpeg"
    },
    {
        product_name: "Sleeper Sofa",
        price: "$32.99",
        image: "assets/image/img-8.jpg"
    },
    {
        product_name: "Chair with Cusion",
        price: "$33.99",
        image: "assets/image/img-9.jpeg"
    },
    {
        product_name: "Luxuary Chair",
        price: "$49.99",
        image: "assets/image/img-10.jpeg"
    },
    {
        product_name: "Comfort chair",
        price: "$47.99",
        image: "assets/image/img-11.jpeg"
    },
    {
        product_name: "Compact sofa",
        price: "$39.99",
        image: "assets/image/img-12.jpeg"
    },
    {
        product_name: "Set sofa",
        price: "$39.99",
        image: "assets/image/img-13.jpeg"
    },
    {
        product_name: "Formal chair",
        price: "$49.99",
        image: "assets/image/img-14.jpeg"
    },
    {
        product_name: "Wooden grey sofa",
        price: "$49.99",
        image: "assets/image/img-15.jpeg"
    },
    {
        product_name: "Single set sofa",
        price: "$39.99",
        image: "assets/image/img-16.jpeg"
    },
    {
        product_name: "Teakwood chair",
        price: "$39.99",
        image: "assets/image/img-17.jpg"
    },
    {
        product_name: "Cusion sofa",
        price: "$49.99",
        image: "assets/image/img-18.jpg"
    },
    {
        product_name: "Round Sofa with cusion",
        price: "$45.99",
        image: "assets/image/img-19.jpg"
    },
    {
        product_name: "Diwan set",
        price: "$39.99",
        image: "assets/image/img-20.jpeg"
    }
];

const container = document.querySelector(".container");
console.log(container);


products.map(product => {
    const card = document.createElement("div");
    card.classList.add("card");
    console.log(card);
    card.innerHTML = `
                    <img src="${product.image}">
                    <h3>${product.product_name}</h3>
                    <p class="price">${product.price}</p>
                    <button class="add-to-cart">Add to Cart</button>`
    container.append(card);
});


const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartCount = document.getElementById("cart-count");

let count = 0; 

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        count++; 
        cartCount.textContent = count;
        });
});

