import React, {Component} from 'react';
import '../../styles/index.scss';
import {Card} from '@material-ui/core';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

export const Wrapper = styled.section`
    margin-top: 10px;
    padding: 5px;
`;

export const MainImage = styled.img`
  align-self: stretch;
  opacity: 1;
  display: block;
  width: auto;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
`;


export const StyledParagraph = styled.p`

`;

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <Wrapper>
                <Typography  variant="h4" gutterbottom> Spiral WebApp </Typography>
                <Typography variant="caption" gutterBottom> DirectDrive™ Documentation </Typography>
                <div class="mdc-card element-card earth">
                    <Card>
                        <div class="mdc-card__media-content">
                        </div>
                    </Card>
                </div>
                    <br />
                 <MainImage src="./dds-lg.jpg" alt="background" />

            </Wrapper>
        );
    }
}
