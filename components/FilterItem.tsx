import React from 'react';
import styled from 'styled-components';
import Img from '../images/favicon.png';
interface Props {
  text: string;
}

const FilterItem: React.FC<Props> = ({ text }) => {
  const click = (e: any) => {
    console.dir(e.target)
  }
  return (
    <ItemWrap>
      <ItemLabel onClick={click}>
        <Input type="checkbox" />
        <CustomInput />
        {text}
      </ItemLabel>
    </ItemWrap>
  )
}
const ItemWrap = styled.div``;
const ItemLabel = styled.label`
  display: flex;
  align-items : center;
  color: #999;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1px;
  padding-left: 10px;
  margin-bottom: .5rem;
`;
const Input = styled.input`
  display: none;
`;
const CustomInput = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAABGdBTUEAALGPC/xhBQAAAtBJREFUWAntV8uOEkEUrS5eCgsgPMMnuDWu/A2Ne2ahG1fzHa7c6GJmb/Q33Gjc+ge8IUACTHi259TkIs1UUz3YcUUlUFTVvefeus/CUxjdbne23W5z6XT6p1n4B0PzhFQytCGTlcytVsvnh2uP7HLAWR8urBsed5fLpQ/wY2LV6XSUIvip8UDGAxhutNttKwjRjQ6DweDtarX6JNxa6129Xn/ied76pA79fr/prddrP5lMCnNghmilww6F0nkLN8F8Phc0+wxNv9qMAMa/XgOBplFA7PNWYWO32/mz2cz4nsBGJI1IxnMGhWp6oFKp2PWPsOu0kgvj3wEYOLi/S1DouWbUmcgPJbEfLBYLlUgkFiacSQJPNOHCGzt5cJeMEGwSfg+Aa6SGw+H3zWbzHP622gaMc3yu4bXPAUgGBX3KIGGwhA0GGWOGtBj3Qqh6WMqGAbGKEIRaePzRaDQCGkVZIIIVUv6d9a5RAIrFokLl/HA2ACsFS+/ZAKLlBcDSgMQ4rhlBppjJZxuR2QhX/tLMLC4eO6bTqSqXyy9ZD3KTyUQ9BoT1I5VKfWP32qcz2v0ckZWNogmYr6rV6i1p9wDCyOxESn+MCiZ8rpmmgtHfi2Ch3yvAmoJ68QrXUvl8XmWzkS4jOM6ZJqbd6X2aD4q8JhMfNqlerzfhjQuFQuyCjzWjIvQ5LVKr1Qoe6tIPNMcXvHUuF3iXHfPGtuaDgtbgu0+zBxA5bpOf0lZkUbaWBkTf/68hsij77EoQl7IXBS4WYDcxr3ykRFxx5cQRWZRNBa7JMR6PnYxxEYgsyjbJzwbEly3zs1QqsULFJSuAg4qrRqOR9APTEffVBz1Boyx/YUMiFxqGqY6ZTIZ1m8/IAJhrwaaD/sJ/w6bXA9ewsBHhdf0GeDtuWFHZoPBUb+L8CiDPsH4qFdOgRPjiewdC7qD8b5Df4PVxi/W9Fgf8fwCMVIRZ7UTJ6wAAAABJRU5ErkJggg==");
  background-size: contain;
  background-repeat : no-repeat;
`;
export default FilterItem;