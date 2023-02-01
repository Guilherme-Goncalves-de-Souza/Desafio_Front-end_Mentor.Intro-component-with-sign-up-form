import styled from 'styled-components';

export const LeftSide = styled.div`
    color: white;

    @media(min-width: 800px){
        flex: 1;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }
`

export const HeaderText = styled.h1`
    padding-top: 95px;
    text-align: center;
    line-height: 38px;

    @media(min-width: 800px){
        line-height: 55px;
        width: 100%;
        text-align: start;
        font-size: 50px;
    }
`

export const paragraphText = styled.p`
    text-align: center;
    margin-top: 35px;
    font-weight: 600;

    @media(min-width: 800px){
        text-align: start;
    }
`