import styled from '@emotion/styled';
import { Link } from 'gatsby';

const ReadLink = styled(Link)`
  -webkit-appearance: none;
  font-size: 1rem;
  text-shadow: none;
  line-height: 1.2;
  display: inline-block;
  padding: 10px 16px;
  margin: 10px 10px 0 0;
  position: relative;
  border-radius: 4px;
  border: 3px solid transparent;
  background: #444857;
  color: white;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none !important;
  text-align: center;
  font-weight: normal !important;
  transition: 0.3s;
  &:hover {
    background-color: #bdbdbd;
    color: black;
  }
`;

export default ReadLink;
