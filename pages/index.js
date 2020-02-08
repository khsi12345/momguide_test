import React, { useState } from "react";
import styled from "styled-components";
import ProductFilter from "../components/ProductFilter";

const Home = () => {
  const [sortKind, setSortKind] = useState();
  const click = e => {
    setSortKind(e.target.textContent);
  };
  return (
    <Page>
      <ProductWrap>
        <PaddingWrap paddingValue={`0px 15px`}>
          <WipDiv>
            <PaddingWrap paddingValue={`10px`}>
              <Wrapping>
                <ProductKindWrap>
                  <ProductKind>섬유유연제</ProductKind>
                  <ProductCount>0</ProductCount>개
                </ProductKindWrap>
                <ProductSortWrap onClick={click}>
                  <ProductSortBox click={sortKind === "최신순"}>
                    <ProductSorting click={sortKind === "최신순"}>
                      최신순
                    </ProductSorting>
                  </ProductSortBox>
                  <ProductSortBox click={sortKind === "조회순"}>
                    <ProductSorting click={sortKind === "조회순"}>
                      조회순
                    </ProductSorting>
                  </ProductSortBox>
                  <ProductSortBox click={sortKind === "별점순"}>
                    <ProductSorting click={sortKind === "별점순"}>
                      별점순
                    </ProductSorting>
                  </ProductSortBox>
                </ProductSortWrap>
              </Wrapping>
              <ProductFilter />
            </PaddingWrap>
          </WipDiv>
        </PaddingWrap>
      </ProductWrap>
    </Page>
  );
};
const Page = styled.div`
  width: 980px;
  margin: 70px auto;
  overflow: hidden;
`;
const PaddingWrap = styled.div`
  padding: ${props => props.paddingValue};
`;
const WipDiv = styled.div``;
const ProductWrap = styled.section``;
const Wrapping = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dadada;
`;
const ProductKindWrap = styled.div`
  margin-bottom: 0.5rem;
  font-size: 20px;
  color: grey;
  letter-spacing: 1px;
  line-height: 1.2;
  font-weight: 500;
`;
const ProductKind = styled.title`
  display: inline-block;
`;
const ProductCount = styled.span``;
const ProductSortWrap = styled.div``;
const ProductSortBox = styled.div`
  display: inline-block;
  width: 70px;
  height: 33px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
  color: #4d4d4d;
  outline: none;
  border-bottom: ${props => (props.click ? "1px solid #32b8a4" : "none")};
`;
const ProductSorting = styled.a`
  width: 70px;
  cursor: pointer;
  outline: none;
  color: ${props => (props.click ? "#4d4d4d" : "#cfcfcf")};
  :hover {
    color: #4d4d4d;
  }
`;

export default Home;
