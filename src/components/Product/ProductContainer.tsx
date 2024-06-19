import { Container } from "theme-ui";
import { styled } from "styled-components";
import { useProductContext } from "../../context/Product";
import { ProductCard } from "./ProductCard";

export const ProductContainer = () => {
  const data = useProductContext();

  return (
    <StyledContainer data-testid="prodct-container">
      {data.map((productData) => (
        <ProductCard key={productData.id} productData={productData} />
      ))}
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
