
//Creating categories for the products
//Other products are stored in the uncategoriezed category
const categories =
[
    {name:"Electronics", catThumbnail:"phone.jpg", products:["Laptop", "Phone", "Tablet"]},
    {name:"Clothing", catThumbnail:"phone.jpg", products:["Pantalon", "Knickers", "SleepingDress"]},
    {name:"Uncategorized", catThumbnail:"phone.jpg", products:["Product1", "Product2", "Product3"]}
];

const categoryContainer = document.getElementById("categoryContainer");
categories.forEach(category =>{
    const   categoryElement = document.createElement("div");
            categoryElement.className = "category";

    const   categoryName = document.createElement("h2");
            categoryName.textContent = category.name;

    const   productList = document.createElement("ul");
    category.products.forEach(product => {
        const productItem = document.createElement("li");
        productItem.textContent = product;
        productList.appendChild = productItem;

        console.log(product);
    });

    categoryElement.appendChild(categoryName);
    categoryContainer.appendChild(categoryElement);
    categoryElement.appendChild(productList);


});





//Later we will extend this const categories such that we can add pricing, short description and long description for our products.

