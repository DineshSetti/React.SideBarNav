import React from "react";
import { styled } from "@mui/material/styles";

const H1 = styled("h1")({
  color: "red",
});

const Products = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 25,
        height: "100vh",
      }}
    >
      <div>
        <H1>Products</H1>
      </div>
    </div>
  );
};

export default Products;