import Image from "next/image";
import Link from "next/link";
import { Button, Card } from "theme-ui";
import { styled } from "styled-components";
import { ProductI } from "../../context/Product";

const localCurrencySymbol = {
  USD: "$",
  EURO: "€",
};
type CurrencyType = "USD" | "EURO";

export const ProductCard = ({ productData }: { productData: ProductI }) => {
  const currencySymbol =
    localCurrencySymbol[productData.price.currency as CurrencyType];

  return (
    <StyledCard data-testid="product-card">
      <ImageAndMetaDataContainer>
        <Image
          src={productData.image}
          alt={productData.name}
          width="100"
          height="100"
          data-testid="product-image"
        />
        <StyledProductName data-testid="product-name">
          {productData.name}
        </StyledProductName>
        <StyledProductDescription data-testid="product-description">
          {productData.description}
        </StyledProductDescription>
      </ImageAndMetaDataContainer>

      <PriceAndButtonContainer>
        <StyledPrice data-testid="product-price">
          {`${currencySymbol}${productData.price.amount}`}
        </StyledPrice>
        <StyledBuyButton data-testid="product-buy-now">
          <Link
            data-testid="product-buy-now-link"
            href={{
              pathname: "/en/US/product-info",
              query: {
                id: productData.id,
              },
            }}
          >
            Buy Now
          </Link>
        </StyledBuyButton>
      </PriceAndButtonContainer>
    </StyledCard>
  );
};
const StyledCard = styled(Card)`
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  width: 250px;
`;

const StyledProductName = styled.h3`
  color: #989898;
  text-align: center;
  margin-bottom: 5px;
`;

const StyledProductDescription = styled.p`
  color: #989898;
  text-align: center;
  margin: 0;
`;

const StyledBuyButton = styled(Button)`
  background-color: #00a3e9;
  font-size: 14px;
  cursor: pointer;
  a {
    color: white;
    text-decoration: none;
  }
`;
const StyledPrice = styled.p``;

const PriceAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageAndMetaDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
`;
