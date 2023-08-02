import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
background-image: url("../../components/images/Simply-Recipes-Perfect-Popcorn-LEAD-41-4a75a18443ae45aa96053f30a3ed0a6b.jpeg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;

}
`;

export const HomeTitle = styled.h1`
  font-weight: 700;
  color: #3fc50a;
  margin: 30px, 0;
  text-decoration: none;
  }
`;

export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 0;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 0;
`;

export const MovieItem = styled.li`
  background: #3fc50a;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  width: 100%;
  max-width: 220px;
  margin: 12px;
  border-radius: 10px;
  display: inline-block;
  text-decoration: none;
  color: black;
  transition-duration: 250ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.5);
    box-shadow: rgb(0 0 0 / 40%) 0px 10px 25px;
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
`;

export const Image = styled.img`
  padding: 0px;
  margin: 0px;
  height: 290px;
  width: 100%;
  display: block;
`;

export const MovieTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin: 0px;
  font-size: 12px;
  color: #ffffff;
`;
