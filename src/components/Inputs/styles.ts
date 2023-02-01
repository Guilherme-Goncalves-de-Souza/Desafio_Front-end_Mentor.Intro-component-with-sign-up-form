import styled from "styled-components"

export const Form = styled.form`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const SubmitSuccess = styled.div`
    display: none;
    flex-direction: column;
    align-items:center;
    gap: 30px;
    text-align: center;

    strong{
        color: gray;
    }
`