import { render, screen } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import "jest-styled-components";
import product from "../../../__mocks__/products.json";

describe("product card test", () => {
  it("Should render and show", () => {
    render(<ProductCard productData={product[0]} />);

    expect(screen.getByTestId("product-name")).toHaveTextContent(
      product[0].name
    );
    expect(screen.getByTestId("product-description")).toHaveTextContent(
      product[0].description
    );
    expect(screen.getByTestId("product-price")).toHaveTextContent(
      product[0].price.amount
    );
    expect(screen.getByTestId("product-buy-now")).toHaveTextContent("Buy Now");
    expect(screen.getByTestId("product-image")).toBeInTheDocument();
  });
});
