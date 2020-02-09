import React from 'react';
import styled from 'styled-components';
import Star from '../components/Star';
import { device } from '../components/DeviceInfo';

const ProductItem = ({ sortData }: any) => {

  return (
    <>
      {
        sortData && sortData.map((ele: any) => {
          return (
            <ItemWrap>
              <ItemLink>
                <ItemImageWrap>
                  <ImageSideGard />
                  <ImageBox>
                    <Image src={ele.imgUrl} />
                  </ImageBox>
                  <ImageSideGard>
                    <ItemInfoImageWrap>
                      {
                        ele.includeCare &&
                        <ItemInfoImage src={"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6c2f30a5-879c-4ebd-880d-233bdb694ddc%2Fcaution_red_.png?table=block&id=e9365c92-6756-48ea-9599-6c7dfb3eefe2&width=120&cache=v2"} />
                      }
                    </ItemInfoImageWrap>
                  </ImageSideGard>
                </ItemImageWrap>
                <ItemContentsWrap>
                  <TextContentsWrap>
                    <TextContentsBrand>
                      {ele.brand}
                    </TextContentsBrand>
                    <TextContentsName>
                      {ele.name}
                    </TextContentsName>
                  </TextContentsWrap>
                  <RatingContentsWrap>
                    <RatingContentsBox>
                      <StarImageWrap>
                        <Star point={ele.starPoint} />
                      </StarImageWrap>
                      <RateNumber>0</RateNumber>
                      <ReviewCount>
                        (0)
                      </ReviewCount>
                    </RatingContentsBox>
                  </RatingContentsWrap>
                </ItemContentsWrap>
              </ItemLink>
            </ItemWrap>
          )
        })
      }
    </>
  )
}
const ItemWrap = styled.div`
  height: 420px;
  border: 0.5px solid #979797;

  @media ${device.mobile} {
    margin: 0 0 20.5px 0;
    width: 100%;
    /* max-width: 336px; */
  }
  @media ${device.tablet} {
    margin: 0 10px 20.5px;
    width: 47.2%;
  }
  @media ${device.bigTablet} {
    width: 31.1%;
  }
`;
const ItemLink = styled.a``;
const ItemImageWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60%;
`;
const ImageSideGard = styled.div`
  padding: 20px 20px 0 0;
  display: flex;
  align-items: center;
  width: 17%;
  height: 100%;
`;
const ImageBox = styled.figure`
  /* width: 66%; */
  height: 100%;
`;
const Image = styled.img`
  margin-top: 40px;
  width: 195px;
  height: 195px;
  object-fit: contain;
`;
const ItemInfoImageWrap = styled.figure`
  margin-bottom: 8px;
  width: 30px;
  height: 30px;
`;
const ItemInfoImage = styled.img`
  width: 100%;
`;
const ItemContentsWrap = styled.div`
  width: 100%;
  height: 40%;
`;
const TextContentsWrap = styled.div`
  margin: 0 auto;
  padding-top: 2px;
  width: 200px;
  height: 100px;
  text-align: center;
`;
const TextContentsBrand = styled.header`
  margin: 6px 0 .5rem 0;
  height: 25px;
  text-decoration: underline;
  font-size: 13px;
  font-weight: 500;
  color: grey;
  line-height: 1.2;
`;
const TextContentsName = styled.header`
  max-height: 68px;
  font-size: 19px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #000;
  line-height: 1.2;
`;
const RatingContentsWrap = styled.div`
  display: flex;
  height: 65px;
  width: 230px;
  margin: 0 auto;
  border-top: 1px solid grey;
`;
const RatingContentsBox = styled.div`
  margin: 15px auto;
  display: flex;
`;
const StarImageWrap = styled.figure`
  margin-right: 5px;
  display: flex;
`;
// const Star = styled.img`
//   width: 15px;
//   height: 15px;
// `;
const RateNumber = styled.span`
  margin: 0 5px;
  font-size: 22px;
  font-weight: 700;
  font-style: italic;
  color: #000;
  line-height: 1.2
`;
const ReviewCount = styled.span`
  font-size: 10px;
  font-weight: 900;
  color: #60b3a2;
  line-height: 1.4285em;
`;

export default ProductItem;