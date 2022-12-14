import styled from "styled-components";

import { TitleFont } from "../../constants/fonts";
import { mobile, ipad, desktops } from "../../responsive";
import { useState, useEffect } from 'react';
import { getBanner } from '../../service/BaseApi';

const BannerContainer = styled.div`
  padding: 125px 0 425px;
  background: url(${(props) => props.urlImage});
  background-size: cover;
  background-position: center;
`;

const Container = styled.div``;

const BannerContent = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

const BannerTitle = styled.h1`
  visibility: visible;
  animation-duration: 3000ms;
  animation-delay: 900ms;
  color: white;
  animation-name: fadeInLeft;
  font-size: 55px;
  margin-bottom: 16px;
  text-transform: capitalize;
  font-weight: 700;
  font-family: ${TitleFont};
  font-display: swap;
  ${desktops({
    fontSize: "45px",
  })}

  ${ipad({
    fontSize: "35px",
  })}

  ${mobile({
    fontSize: "30px",
  })}
`;

const BannerDesc = styled.p`
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 38px;
  color: #505050;
  font-weight: 400;
  animation-name: fadeInRight;
  visibility: visible;
  animation-duration: 3000ms;
  animation-delay: 900ms;
`;

const BannerButton = styled.a.attrs({
  target: "_blank",
  href: "https://stunited.typeform.com/registration",
})`
  border: 1px solid #ff5421;
  color: #ffffff;
  background: #ff5421;
  padding: 16px 58px;
  display: inline-block;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 26px;
  transition: all 0.3s ease;
`;

const BannerButtonWrap = styled.div`
  width: 100%;
  margin: auto;
  line-height: 26px;
  animation-name: fadeInUp;
  visibility: visible;
  animation-duration: 3000ms;
  animation-delay: 900ms;

  &:hover ${BannerButton} {
    background: #ff914d;
    color: #ffffff;
  }
`;

const Banner = () => {

  const [banner, setBanner] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await getBanner();
      res.data[0] && setBanner(res.data[0]);
    }

    fetchData()
      .catch(console.error);;
  }, []);

  return (
    <>
      {
        Object.keys(banner).length > 0 ?
        <BannerContainer urlImage={banner.image}>
          <Container className="container">
            <BannerContent className="text-center">
              <BannerTitle>
                { banner.title }
              </BannerTitle>
              <BannerDesc>
                { banner.desc }
              </BannerDesc>
              <BannerButtonWrap>
                <BannerButton>Learn more</BannerButton>
              </BannerButtonWrap>
            </BannerContent>
          </Container>
        </BannerContainer> : <></>
      }
    </>
  );
};

export default Banner;
