import { Badge } from 'reactstrap';
import styled from 'styled-components';
import React from 'react';
import { themeDark} from '../../styled/utils/colors';


const StyledBadge = styled(Badge)`
    padding: 2px;
    background-color: ${props => props.BadgeColor || themeDark};
    color: white;
`;

const BadgeList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const ListItem = styled.li`
    display: inline-block;
`;

const ScoreBadge = ({ children }) => (
    <BadgeList>
    <ListItem> <StyledBadge> {children} </StyledBadge> </ListItem>
    </BadgeList>
);

export default ScoreBadge;
