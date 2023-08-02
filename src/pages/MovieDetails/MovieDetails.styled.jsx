import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Btn = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  background-color: #3fc50a;
  margin: 20px 0 0 35px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    transform: scale(1.5);
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  padding: 30px;
  background-color: #0cf6526d;
  margin: 20px 30px 30px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Image = styled.img`
  width: 320px;
`;

export const MovieInfo = styled.div`
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MovieTitle = styled.h2`
  margin-left: 0;
`;

export const MoreInfo = styled.h3`
  margin-left: 35px;
  margin-bottom: 12px;
`;

export const InfoList = styled.ul`
  text-decoration: none;
  margin-left: 0;
  margin-top: ;
`;

export const InfoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  text-decoration: none;
  color: #0b0b0b;
  font-weight: 600;
  transition: transform 0.3s ease;
  &:hover {
    color: #43b729;
    font-weight: 700;
    transform: scale(1.1);
`;
