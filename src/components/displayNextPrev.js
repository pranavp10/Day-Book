import styled from '@emotion/styled';
import { Link } from 'gatsby';

const displayNextPrev = styled(Link)`
  -webkit-appearance: none;
  font-size: 1rem;
  text-shadow: none;
  line-height: 1.2;
  display: inline-block;
  padding: 15px 15px;
  margin: 10px 10px 0 0;
  position: relative;
  border-radius: 7px;
  border: 3px solid transparent;
  background: #eee;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none !important;
  font-weight: normal !important;
  transition: 0.3s;
  &:hover {
    background-color: #444857;
    color: #eee;
  }
`;

export default displayNextPrev;
