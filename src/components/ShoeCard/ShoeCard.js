import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const STYLES = {
  "on-sale": {
    "--delete-line": "line-through",
    "--original-price-color": COLORS.gray["700"],
    "--sales-price-color": COLORS.primary
  },
  "new-release": {
    "--original-price-color": COLORS.gray["900"],
    "--delete-line": "none",
  },
  "default": {
    "--original-price-color": COLORS.gray["900"],
    "--delete-line": "none"
  }

}

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const style = STYLES[variant]

  return (
    <Link href={`/shoe/${slug}`} style={style}>
      <Wrapper>

        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <ColumnWrapper>
          <LeftColumn>
            <Name>{name}</Name>
            <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          </LeftColumn>
          <PriceWrapper>
            <Price>{formatPrice(price)}</Price>
            {salePrice && <SalePrice>${salePrice / 100}</SalePrice>}
            {variant==="on-sale" && <SaleSticker>Sale</SaleSticker>}
            {variant==="new-release" && <ReleasedSticker>Just Released!</ReleasedSticker>}
          </PriceWrapper>
        </ColumnWrapper>

      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1;
  flex-basis: 250px;
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  
  position: relative;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageWrapper = styled.div`
  
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;


const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  color: var(--original-price-color);
  text-decoration: var(--delete-line);
`;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

const SaleSticker = styled.div`
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  background-color: ${COLORS.primary};
  padding: 7px 9px 9px 10px;
  border-radius: 2px;
  position: absolute;
  top: 12px;
  right: -4px;
`

const ReleasedSticker = styled(SaleSticker)`
  background-color: ${COLORS.secondary};
`

export default ShoeCard;
