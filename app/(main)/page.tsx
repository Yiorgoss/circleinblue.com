"use client";
import { useProducts } from "medusa-react";

import { Button } from "@components/ui/button";

const Home = () => {
    const { products } = useProducts({
        expand: "variants",
    });

    console.log(products);
    return (
        <>
            <div>abc</div>
        </>
    );
};

export default Home;
