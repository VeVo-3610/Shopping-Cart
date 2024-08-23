import React from "react";
import { Container } from "../components/Container";
import CartSection from "../components/CartSection";
import BreadCrumb from "../components/Breadcrumb";

const MyCart = () => {
  return (
    <Container className="flex-grow">
      <BreadCrumb currentPageTitle="My Cart" />
      <CartSection />
    </Container>
  );
};

export default MyCart;
