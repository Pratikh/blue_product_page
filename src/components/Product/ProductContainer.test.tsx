import { render, screen } from "@testing-library/react";
import { ProductContextProvider } from "../../context/Product";
import product from "../../../__mocks__/products.json";
import { ProductContainer } from "./ProductContainer";

describe("Products should render", () => {
  it("Show all products", () => {
    render(
      <ProductContextProvider value={product}>
        <ProductContainer />
      </ProductContextProvider>
    );

    expect(screen.getByTestId("prodct-container")).toBeInTheDocument();
    const allElements = document.querySelectorAll(
      '[data-testid="product-card"]'
    );

    expect(allElements).toHaveLength(product.length);
  });
});
