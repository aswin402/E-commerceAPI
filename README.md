# E-commerceAPI 
This is a simple e-commerce API that allows you to create and delete products. It uses Node.js, Express.js, MongoDB and Mongoose.

## Installation
To install the dependencies run:
```bash
npm i
```
Then start the server with:
node index.js   

## Used technologies
- Node.js
- Express.js
- MongoDB
- Mongoose

## Dependencies
- express: ^4.17.3 -[express](https://expressjs.com/)
- mongoose: ^6.2.5 -[mongoose](https://mongoosejs.com/)
- dotenv: ^16.0.3 -[dotenv](https://www.npmjs.com/package/dotenv)
- nodemon: ^2.0.19 -[nodemon](https://www.npmjs.com/package/nodemon)
- cors: ^2.8.5 -[cors](https://www.npmjs.com/package/cors)
-multer: ^1.4.2 - [multer](https://www.npmjs.com/package/multer)

# 🚀 Features
* Backend (Express + MongoDB + Mongoose)

* Add new products (name, brand, price, image)

* Upload product images using Multer

* Store image URLs in MongoDB

* Fetch all products

* Fetch single product

* Update product

* Delete product

* Serve images statically

* CORS enabled

## 🌐 API Endpoints
Method   	  Endpoint	            Description
POST      	/api/products	     Upload product with image
GET	        /api/products	     Get all products
GET      	/api/products/:id	 Get single product
PUT	        /api/products/:id	 Update product
DELETE   	/api/products/:id	 Delete product


## Add .env
```
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
PORT=5000
```

### Start server

` npm run dev `

### Server runs at:

`  http://localhost:5000 `

## Uploading Products

You can upload using:

* Postman form-data

* React admin panel (if created)

* Any HTML upload form


## Displaying Images in React

` <img src={`http://localhost:5000${product.image}`} alt={product.name} /> `

# Example React Usage (ProductCard.jsx)

```
import React, { useEffect, useState } from "react";
import { getProducts } from "../../Api/api";
import "./ProductCard.scss";

export function ProductCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-card-container">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <img
            src={`http://localhost:5000${product.image}`}
            alt={product.name}
          />
          <h3>{product.name}</h3>
          <p>{product.brand}</p>
          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
}

```


### 🤝 Contributing

Feel free to open issues and pull requests.

