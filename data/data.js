const productList = [
  {
    id: 1,
    name: "베지터블 홈 고농축 세탁세제",
    brand: "(주)홈케어",
    viewCnt: 443,
    starPoint: 5,
    created_at: "2019-03-30 13:00:09",
    includeCare: false,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/(주)홈케어/베지터블 홈 고농축 세탁세제.jpg"
  },
  {
    id: 2,
    name: "베지터블 홈 고농축 주방세제",
    brand: "(주)홈케어",
    viewCnt: 334,
    starPoint: 5,
    created_at: "2019-04-30 13:00:09",
    includeCare: true,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/(주)홈케어/베지터블 홈 고농축 주방세제.jpg"
  },
  {
    id: 3,
    name: "ALL PURPOSE CLEANER(올 퍼포즈 클리너)",
    brand: "Better Life",
    viewCnt: 189,
    starPoint: 2,
    created_at: "2019-03-31 13:00:09",
    includeCare: false,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/Better Life/ALL PURPOSE CLEANER(올 퍼포즈 클리너).jpg"
  },
  {
    id: 4,
    name: "CLEANING WIPES",
    brand: "Better Life",
    viewCnt: 201,
    starPoint: 4,
    created_at: "2019-01-30 13:00:09",
    includeCare: false,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/Better Life/CLEANING WIPES.jpg"
  },
  {
    id: 5,
    name: "DRYER SHEETS 라벤더향",
    brand: "Better Life",
    viewCnt: 100,
    starPoint: 3,
    created_at: "2018-03-30 13:00:09",
    includeCare: true,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/Better Life/DRYER SHEETS 라벤더향.jpg"
  },
  {
    id: 6,
    name: "DRYER SHEETS 무향",
    brand: "Better Life",
    viewCnt: 89,
    starPoint: 3,
    created_at: "2017-03-30 13:00:09",
    includeCare: true,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/Better Life/DRYER SHEETS 무향.jpg"
  },
  {
    id: 7,
    name: "FLOOR CLEANER(바닥클리너)",
    brand: "Better Life",
    viewCnt: 77,
    starPoint: 0,
    created_at: "2017-05-30 13:00:09",
    includeCare: false,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/Better Life/FLOOR CLEANER(바닥클리너).jpg"
  },
  {
    id: 8,
    name: "KITCHEN AND BATH SCRUBBER",
    brand: "Better Life",
    viewCnt: 131,
    starPoint: 1,
    created_at: "2019-10-30 13:00:09",
    includeCare: true,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/Better Life/KITCHEN AND BATH SCRUBBER.jpg"
  },
  {
    id: 9,
    name: "NURSERY CLEANER(널서리 클리너)",
    brand: "Better Life",
    viewCnt: 331,
    starPoint: 3,
    created_at: "2020-05-30 13:00:09",
    includeCare: true,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/Better Life/NURSERY CLEANER(널서리 클리너).jpg"
  },
  {
    id: 10,
    name: "Mr.홈스타 Perfect세탁조클리너",
    brand: "Mr.홈스타",
    viewCnt: 146,
    starPoint: 3,
    created_at: "2019-06-30 13:00:09",
    includeCare: false,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/Mr.홈스타/Mr.홈스타 Perfect세탁조클리너.jpg"
  },
  {
    id: 11,
    name: "Mr.홈스타 심플리보타닉 배스룸클리너",
    brand: "Mr.홈스타",
    viewCnt: 456,
    starPoint: 4,
    created_at: "2018-10-21 13:00:09",
    includeCare: true,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/Mr.홈스타/Mr.홈스타 심플리보타닉 배스룸클리너.jpg"
  },
  {
    id: 12,
    name: "Mr.홈스타 눈에보이는거품락스",
    brand: "Mr.홈스타",
    viewCnt: 189,
    starPoint: 2,
    created_at: "2015-10-21 13:00:09",
    includeCare: false,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/Mr.홈스타/Mr.홈스타 눈에보이는거품락스.jpg"
  },
  {
    id: 13,
    name: "Mr.홈스타 락스와세제 허벌시트러스",
    brand: "Mr.홈스타",
    viewCnt: 112,
    starPoint: 2,
    created_at: "2015-09-21 13:00:09",
    includeCare: true,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/Mr.홈스타/Mr.홈스타 락스와세제 허벌시트러스.jpg"
  },
  {
    id: 14,
    name: "V.DT 레더워시 웨어 섬유유연제",
    brand: "V.DT(브이디티)",
    viewCnt: 155,
    starPoint: 0,
    created_at: "2015-11-19 13:00:09",
    includeCare: true,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/V.DT(브이디티)/V.DT 레더워시 웨어 섬유유연제.jpg"
  },
  {
    id: 15,
    name: "V.DT 레더워시 프리미엄 스프레이",
    brand: "V.DT(브이디티)",
    viewCnt: 34,
    starPoint: 2,
    created_at: "2015-11-23 13:00:09",
    includeCare: false,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/V.DT(브이디티)/V.DT 레더워시 프리미엄 스프레이.jpg"
  },
  {
    id: 16,
    name: "V.DT 유아용 효소 액상 세탁세제",
    brand: "V.DT(브이디티)",
    viewCnt: 22,
    starPoint: 1,
    created_at: "2015-11-19 13:00:09",
    includeCare: false,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/V.DT(브이디티)/V.DT 유아용 효소 액상 세탁세제.jpg"
  },
  {
    id: 17,
    name: "V.DT 효소 섬유유연제",
    brand: "V.DT(브이디티)",
    viewCnt: 15,
    starPoint: 1,
    created_at: "2015-01-01 13:00:09",
    includeCare: true,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/V.DT(브이디티)/V.DT 효소 섬유유연제.jpg"
  },
  {
    id: 18,
    name: "V.DT 효소 액상 세탁세제",
    brand: "V.DT(브이디티)",
    viewCnt: 105,
    starPoint: 1,
    created_at: "2019-02-22 13:00:09",
    includeCare: true,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/V.DT(브이디티)/V.DT 효소 액상 세탁세제.jpg"
  },
  {
    id: 19,
    name: "V.DT 여성속옷전용 효소 세제",
    brand: "V.DT(브이디티)",
    viewCnt: 50,
    starPoint: 0,
    created_at: "2014-01-22 13:00:09",
    includeCare: true,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/V.DT(브이디티)/V.DT 여성속옷전용 효소 세제.jpg"
  },
  {
    id: 20,
    name: "무첨가 주방용 가루비누",
    brand: "강청",
    viewCnt: 118,
    starPoint: 0,
    created_at: "2014-02-19 13:00:09",
    includeCare: true,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/강청/무첨가 주방용 가루비누.jpg"
  },
  {
    id: 21,
    name: "순천연 다목적 세정제",
    brand: "강청",
    viewCnt: 115,
    starPoint: 4,
    created_at: "2018-03-15 13:00:09",
    includeCare: false,
    imgUrl:
      "https://dvjj88bxavkp8.cloudfront.net/product-images/living-product-images/강청/순천연 다목적 세정제.jpg"
  }
];

export default productList;
