import styled from 'styled-components';

export const Button = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 500;
  width: 90px;
  cursor: pointer;
  border-radius: 5px;
  border: 0.5px solid grey;
  padding: 5px;

  :hover {
    background-color: ${({ name }) => {
      if (name === 'good') {
        return 'green';
      } else if (name === 'neutral') {
        return 'orange';
      } else if (name === 'bad') {
        return 'red';
      }
    }};
    box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
