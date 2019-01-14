import React, {Component} from 'react';
import styled from 'styled-components';


const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: paletvioletred;
    `;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

module.exports.Wrapper = Wrapper;
module.exports.Title = Title;