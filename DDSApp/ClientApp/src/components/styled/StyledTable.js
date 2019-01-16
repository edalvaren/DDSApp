import styled from 'styled-components';
import React from 'react';
import rem from './utils/rem';
import {lightGrey, themeDark} from './utils/colors';
import { headerFont } from './utils/fonts';

export const TableWrapper = styled.table`
  table-layout: fixed;
  width: 100%;
  text-align: left;
  margin: ${rem(40)} 0;
`;

const TableHead = styled.thead`
  border-bottom: 2px solid ${lightGrey};
  font-family: ${headerFont};
`;

export const Row = styled.tr`
  padding: 0 ${rem(20)};
  padding-left: 0;
  &:hover {
    background-color: #f5f5f4;
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${lightGrey};
  }
`;

export const StRow = styled.td.attrs({

})`
  padding: 2px;
  &:hover {
  }
  `;


export const Column = styled.th`
  font-weight: normal;
  padding: ${rem(10)} ${rem(12)};
  padding-left: 0;
`;

export const TableHeadColumn = styled(Column)`
  text-transform: uppercase;
  font-size: 85%;
  opacity: 0.8;
`;

const Table = ({ head, children, clickHandler}) => (
    <TableWrapper>
        <TableHead>
            <tr>
                {head.map((text, i) => (
                    <TableHeadColumn onClick={clickHandler} key={i} title={text}>
                        {text}
                    </TableHeadColumn>
                ))}
            </tr>
        </TableHead>
        {children}

    </TableWrapper>
);

const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
)

export const StyledLink = styled(Link)`
  &:hover{
    background-color: ${themeDark};
    color:white;
  }
`;

export default Table;