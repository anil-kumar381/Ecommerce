import React from "react";
import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

function Home() {
  return (
    <div className="home-container">
            <PageHeading>
                add a touch of creativity to your world with 
                our unique and vibrant stickers. Explore our collection and find the perfect design to express yourself!

            </PageHeading>
             <ProductListings products={products}/>
    </div>
  );
}
export default Home;