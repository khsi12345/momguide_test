import React, { useState } from 'react';
import styled from 'styled-components';
interface Props {
  point: number;
}
const ZeroStar = () => {
  return (
    <>
      <NonStarPoint />
      <NonStarPoint />
      <NonStarPoint />
      <NonStarPoint />
      <NonStarPoint />
    </>
  )
}
const OneStar = () => {
  return (
    <>
      <StarPoint />
      <NonStarPoint />
      <NonStarPoint />
      <NonStarPoint />
      <NonStarPoint />
    </>
  )
}
const TwoStar = () => {
  return (
    <>
      <StarPoint />
      <StarPoint />
      <NonStarPoint />
      <NonStarPoint />
      <NonStarPoint />
    </>
  )
}
const ThreeStar = () => {
  return (
    <>
      <StarPoint />
      <StarPoint />
      <StarPoint />
      <NonStarPoint />
      <NonStarPoint />
    </>
  )
}
const FourStar = () => {
  return (
    <>
      <StarPoint />
      <StarPoint />
      <StarPoint />
      <StarPoint />
      <NonStarPoint />
    </>
  )
}
const FiveStar = () => {
  return (
    <>
      <StarPoint />
      <StarPoint />
      <StarPoint />
      <StarPoint />
      <StarPoint />
    </>
  )
}
const Star: React.FC<Props> = ({ point }) => {
  if (point === 5) return <FiveStar />
  if (point === 4) return <FourStar />
  if (point === 3) return <ThreeStar />
  if (point === 2) return <TwoStar />
  if (point === 1) return <OneStar />
  if (point === 0) return <ZeroStar />
  return (
    <>
    </>
  )
}
const StarPoint = styled.div`
  width: 15px;
  height: 15px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmCAYAAACyAQkgAAAAAXNSR0IArs4c6QAABGRJREFUWAnNmF9oHGUQwGe+PRITPLG0uYJaFVESKaQ1ufSMUWkwuQSthSo9aS7Qh6JIrfhSlPogRYUKIn0qPgvNJZ74p1hD86deBWkr6eWtpeKDvkTxIhbMJfX23zjfJVs2d7u336Ub04Vjd2dmZ3473/fNN3sA63B0TmQOHycSYboO1ZkE676YbSKiD89Oje25o0H1opkGoE1E9pE7GtQBJIC++PfZ1rBgQx36junRZ4BgRxmOCG3TCC2roYKiZb/pziDadLDnxzNRt2yt16GBdp/P3s8Q+9wgPPzRUrF40C1b63VooLppvM6rPVIJQghvsBwr5fXehwK6/2q2gQO/6hWcIdu6Jkf7vHT1yEIB/W3OTDHQVr/AdgilKhRQBZA9T+ZGH/Z7ERX5bYN2TY91EUEiIJgwdetwgE1N9W2D2palVCsJ8JDcXmvS1FDWXI27c7nIgvZ3S0QvtdhAMdukGIGICaAWLj18TTEAHOQtUy6mwAMRLnMB+AUFFsCmeQFYsDUscP2djzSKghG9u5CPv7jk5agMKotyaXHhfRtwG5IMDjFAlDCbIITS4hXYT8ZAS5z9Ar9UgWPPE7+UJrRPb2U0Pnm6h+faGf5t9nOyEXLO/nv5ZPqDW6ASIjE58phBNM779aMbAbU6JuqawEMzyaHTUr4KVAo6c5ktoNM3XBd75P3GHHiDIfcx5A9O/CpQqeBFdNdCae4znqMpx/D/OvPc/BVAPJ8fGLrujukJKg3k/hyfypwgm95xP7Ce1wz5UyM077048FKhMo4vqGPYMTHyGhudYvCqhsOxCePMkF83RBvSl55K3fTyFwgqH+o6lxm0wc7yVAilt6wCQTy5Nzl09DiiXaVbESiBSttd58Z2mGh+xxVB9p2hHAhokaC3ZpPDp4IcKoNKR7I5LhnGOM/g9iDHQXoOvMRd6iuzA8Nng2ylvq69/tJzqTmeS5MqjgNtEP5ShawbdDk4PR0IoWDAO+CDidyXDyiYlk3qyqisr1y1OlSdB9lZ+r/KL10X6KL++y7VTikIsqwnWB9QC9Udq4DyYlLepuvKKJcm5QwogRK1Jy6P36Niqwy6/O8cdas4RcRxLj//KNgKY+GGkk9l0G+nR7ZzRu+tFZwL+FVNiN35gfQL0NzUxsCZWvZSh5ba8CuDgo3+w45Y5AwejTbet9NpzfLPvvwHA6eFpvUyzzVfYMV5rw4KPm+O+HkTitb84PAnF3p7zUqgK/0HLuCWtp2A4m3+vClW6rlNS8hvsyp5hSDQwLHnAr0qozys1wWKIzPJA+cdG79zPh43WPcxb8EZ/uvnJHdi+x1bbnSaF60/n+D7GUfmdVbK6PIOQg+VHSAsIopjsLm1XQXSHVRuwTwdUloE+3mq/OzoyLJWJcGRu89KoLZ+c6Xe4VcaaI9z9/3RSpbcvpSvZ/rS049sa2jnvuFdBl6yK0bLy5HS0PNn9FbQYHC2Pz3h5WQtsi+2p3R+7kTnVHYELeNYkI//AKTme1TjqnDiAAAAAElFTkSuQmCC") no-repeat;
  background-size: contain;
  object-fit: contain;
  border-style: none;
`;
const NonStarPoint = styled.div`
  width: 15px;
  height: 15px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmCAYAAACyAQkgAAAAAXNSR0IArs4c6QAAA9ZJREFUWAnNl1tLVFEUgJ1x1DEwknIETROcUSPQCkrKgoIJhCTwxQIffJAirOhFCnvooQKDiJ6iP1BBBV2ghKKg3uoHFMWog0gTzAhpeMMZx741uEXPzJyzj+doHdjs29prfWvvtS+noGADvkgk0re0tOR1U7WrygRsfHy8lOzW8PBwx38NOj8/381slgN58b8GBVIBhkdHRxvdgnV16QE7CliLwAHsWVxcVNCOeV0FBezSaiJgexKJRNnqtvWWXQNlE1UD1mkAKZuamuoxtK2r6hro3NzceQh8Rop0On1BwsDYbrfuCiggxR6P52we402cq+E8fdrNroByZnYBW5nPKk443lSugAJpBdIRjUbr8jmi0+4YdGRk5ACGWs2M4Yg3mUz2mclY9TkGZbNYzaZi6F2+XlXdVm66G5kJ39jYWAUwFZQDnJMB4i2AhQqS5AHa28mLSZYfYz8jFCHFSQnGxgsLC+O0J0jxkpKSeFVV1WwuRRlQOZQnJydvIFAjQOQZGAaXUzd1JpdSJ23YnBUH0JFxRhzwer0PViDYuW3M3CsEtjsxtAFjrzc0NNxcARUDbIwQsEN4FNwAg3ZVLjCbvaFQ6KEMXAMqDbFYbMfMzMxLYNuk/i8+AH9jtxPIT8p+1q4nmCd8Pl8Y4adKaJPzKPYPr4YU+1kzqqBkExG3g+RXVdsm5F/YOKeCwaBspDVfXlAlBew54vY+9awHh5JxKX9RWlraXVNTM5dLnyWoDAK2HVgJBVfelkYQwuwes9hPnjb2qboWqAjzem9JpVJvKFarwU5zwBbRcZl4lBUz/bRBRYs8jnl3DlFsNtWq0QmkHOynOSNfa4gXZO16s0HEz0/635nJ2Oib0IUUnbZAZQAzcURypx+zWcuDeqeuHlugvCn9GNivq9xKzo7TtkCBPIhxrZeSFaT0o097dWyB8szTVqwJqn1N2wLFuKugLH0zcbpVxyltUJZJZA/pKEVmCIg/VrJ2dGqDcuDvQfE2M+PAfSUd49g5WVRU1ET5sZm89CGjtfzaoFyhZss+zWOin2twr3r11NXV/aLcDchx0rd8wLobShsUQzk9B+KJ3+9vBPIu5ZQRCNiP4gCOXKFv2thPvRVYywePHVDjjH7nxywMyJna2tpYDoCVJhxIAnuH15GEw7OVDgpAbiGs9q1uy1XWApUbBIW7lhXMYGwAwOb6+voPuZTma5MrmHFdOHgCmR9KziKsMmJaoICpZX/OEu7G2G2ZJWXIbo6D78VRdFwjyePEuFpZKi1jY3lEJQrbUf42S8M6G9C3wNBBfigfATpgpeYvRwdkEATiSLIAAAAASUVORK5CYII=") no-repeat;
  background-size: contain;
  object-fit: contain;
  border-style: none;
`;
export default Star;