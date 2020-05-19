import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import data from "../data/data";
import ProductFilter from "../components/ProductFilter";
import ProductItem from "../components/ProductItem";
import { device } from "../components/DeviceInfo";

const Home = () => {
  const [sortKind, setSortKind] = useState();
  const [sortData, setSortData] = useState([...data.slice(0, 10)]);
  let idx = useRef(10);
  console.log("test");

  const sortingClick = (e) => {
    setSortKind(e.target.textContent);
    if (e.target.textContent === "최신순") {
      sortData.sort(createdAtSorting);
    } else if (e.target.textContent === "조회순") {
      sortData.sort(viewCountSorting);
    } else if (e.target.textContent === "별점순") {
      sortData.sort(starPointSorting);
    }
  };
  const createdAtSorting = (a, b) => {
    let dateA = new Date(a["created_at"]).getTime();
    let dateB = new Date(b["created_at"]).getTime();
    return dateA > dateB ? 1 : -1;
  };
  const viewCountSorting = (a, b) => {
    return b["viewCnt"] - a["viewCnt"];
  };
  const starPointSorting = (a, b) => {
    return b["starPoint"] - a["starPoint"];
  };
  const filteringClick = (checkedValue) => {
    const resultData = sortData.filter((item) => {
      return item.includeCare === false;
    });

    if (checkedValue) {
      setSortData(resultData);
    } else {
      setSortData(data);
    }
  };
  function getCurrentScrollPercentage() {
    return (
      ((window.scrollY + window.innerHeight) / document.body.clientHeight) * 100
    );
  }
  const handleScroll = () => {
    if (getCurrentScrollPercentage() > 90) {
      let result = data.slice(idx.current, idx.current + 10);
      setSortData((sortData) => sortData.concat(result));
      idx.current += 10;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Page>
      <ProductWrap>
        <PaddingWrap paddingValue={`0px 15px`}>
          <WipDiv>
            <PaddingWrap paddingValue={`10px`}>
              <Wrapping>
                <ProductKindWrap>
                  <ProductKind>판매상품&nbsp;</ProductKind>
                  <ProductCount>{sortData.length}</ProductCount>&nbsp; 개
                </ProductKindWrap>
                <ProductSortWrap onClick={sortingClick}>
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
              <ProductFilter clicks={filteringClick} />
              <ProductItemWrap>
                <ProductItem sortData={sortData} />
              </ProductItemWrap>
            </PaddingWrap>
          </WipDiv>
        </PaddingWrap>
      </ProductWrap>
    </Page>
  );
};
const Page = styled.div`
  max-width: 980px;
  margin: 70px auto;
  overflow: hidden;
`;
const PaddingWrap = styled.div`
  padding: ${(props) => props.paddingValue};
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
  line-height: 1.2;
  font-weight: 500;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;
const ProductKind = styled.header`
  display: inline-block;
`;
const ProductCount = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: rgb(0, 0, 0);
`;
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
  border-bottom: ${(props) => (props.click ? "1px solid #32b8a4" : "none")};

  @media ${device.mobile} {
    width: 48px;
  }
  @media ${device.bigMobile} {
    width: 70px;
  }
`;
const ProductSorting = styled.a`
  width: 70px;
  cursor: pointer;
  outline: none;
  color: ${(props) => (props.click ? "#4d4d4d" : "#cfcfcf")};
  :hover {
    color: #4d4d4d;
  }
`;
const ProductItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Home;
