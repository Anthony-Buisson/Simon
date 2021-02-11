import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { headerLaptopBreakpoint } from "../components/variable/common.style";

export const ImagePrivatisation = styled.img`
  width: 150px;
  height: auto;
  margin: 10px
`;

export const PresentationContainer = styled.div`
  display: flex;
`;

export const Lien = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 10px;
    border: 1px solid grey;
    border-radius: 0.5rem;
`;

export const Privatiser = styled.div`
    display: flex;
    justify-content: center;
`;

export const Carousel = styled(Slider)`
    margin: 0 auto;
    color:black;
    width: 50%;
    min-height: 300px;
    & .slick-arrow::before {
        color: grey;
        height: 100%;
    }
    & .slick-arrow {
        height: 100%;
    }

    & .carousel-item {
        height: 300px;
    }
`;

export const HomeContainer = styled.div`
    margin: 15px;
    
    @media (min-width: ${headerLaptopBreakpoint}) {
    margin: 0 15%;
  }
`;
