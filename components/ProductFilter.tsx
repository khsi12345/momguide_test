import React from 'react';
import styled from 'styled-components';
import FilterItem from './FilterItem';
const ProductFilter = () => {
  return (
    <Wrap>
      <FilterItem text="주의 사항" />
      <FilterItem text="유해 성분 부족" />
      <FilterItem text="등급 성분 보충" rank />
      <FilterItem text="친환경 인증 제품" />
      <FilterItem text="성분 공개 제품" />
    </Wrap>
  )
}
const Wrap = styled.div`
margin: 20px 0;
display : inline-flexbox;
height : 45px;
align-items: center;
overflow-x: scroll;
::-webkit-scrollbar {
  display: none;
}
-ms-overflow-style: none;
`;
export default ProductFilter;