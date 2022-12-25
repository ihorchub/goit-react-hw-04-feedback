import PropTypes from 'prop-types';
import { Wrapper, Title } from './SectionTitle.styled';

export const SectionTitle = ({ children }) => (
  <Wrapper>
    <Title>Please leave feedback</Title>
    {children}
  </Wrapper>
);

SectionTitle.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
