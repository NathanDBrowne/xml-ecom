import React from "react";
import ProductData from "./products.xml";
import axios from "axios";
import XMLParser from "react-xml-parser";

import { useState, useEffect } from "react";

const Products = () => {
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    axios
      .get(ProductData, {
        "Content-Type": "application/xml; charset=utf-8",
      })
      .then((response) => {
        console.log("Your xml file as string", response.data);
        setProductInfo(new XMLParser().parseFromString(response.data).children);
        console.log(new XMLParser().parseFromString(response.data).children);
      });

    console.log("Product info ", productInfo);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {productInfo.map((elem) => (
        <div style={{ paddingBottom: "30px" }}>
          <h2>{elem.children[0].value}</h2>
          <p>{elem.children[1].value}</p>
          <h3>{elem.children[2].value}</h3>
          <p>{elem.children[3].value}</p>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
