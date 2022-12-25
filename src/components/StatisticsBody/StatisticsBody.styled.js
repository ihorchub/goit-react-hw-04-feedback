import styled from 'styled-components';

export const StatisticsElement = styled.p`
  padding: 8px;

  :nth-child(2n) {
    background-color: #eee;
  }

  :hover {
    padding-left: 20px;
    font-weight: 500;
  }

  &.positive {
    font-weight: 500;
    color: ${({ children }) => {
      if (children[1] >= 75) {
        return 'green';
      } else if (children[1] >= 50) {
        return 'orange';
      } else if (children[1] < 50) {
        return 'red';
      }
    }};
  }
`;
