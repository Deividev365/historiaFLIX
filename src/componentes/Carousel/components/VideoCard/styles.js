import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .5s;
  &:hover,
  &:focus {
    opacity: .4;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
