import styled from 'styled-components'

export const RightSide = styled.div`
    margin-top: 70px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media(max-width: 900px){
        margin-top: 30px;
    }

    @media(min-width: 800px){
        flex: 1;
    }
`

export const LinkTrial = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #5d54a3;
    color: white;
    width: 100%;
    max-width: 535px;
    height: 53px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 82%;

    box-shadow: 0px 10px 5px #d6676b;

    &:hover{
        opacity: .7;
    }

    p{
        width: 70%;
        text-align: center;
    }
`

export const ContentForm = styled.div`
    width: 100%;
    max-width: 535px;
    background-color: white;
    padding: 25px;
    margin-top: 25px;
    margin-bottom: 65px;
    box-shadow: 0px 10px 5px #d6676b;

    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    label{
        font-weight: 600;
    }

    button{
        height: 50px;
        background-color: #37cc8a;
        border-bottom: 3px solid #37b17f;
        cursor: pointer;

        &:hover{
            background-color: #37cc8a;
            opacity: .7;
        }
    }

    @media(min-width: 800px){
        padding: 45px 35px; 
        gap: 20px;
    }
`

export const Terms = styled.p`
    font-size: 12px;
    text-align: center;
    color: #c4c1d2;

    a{
        text-decoration: none;
        color: #ff9899;
        font-weight: 600;
        cursor: pointer;

        &:hover{
            opacity: .7;
        }
    }

    @media(min-width: 800px){
        font-size: 10px;
        font-weight: 600;
    }
`