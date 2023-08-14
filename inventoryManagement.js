
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


    categoryContainer.appendChild(categoryElement);
    categoryElement.appendChild(categoryName);


    category.products.forEach(product => {
        const productItem = document.createElement("li");
        productItem.textContent = product;
        productList.appendChild = productItem.outerHTML;

        categoryElement.appendChild(productItem);
    });

});


console.log(categoryContainer);





//Later we will extend this const categories such that we can add pricing, short description and long description for our products.

