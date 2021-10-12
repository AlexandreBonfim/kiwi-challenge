import styled from "styled-components"

export const Container = styled.header`
    background: var(--white);
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p { 
        font-size: 1rem;
        color: var(--white);
        background: var(--secondary);
        border-radius: 0.25rem;
        border: 0;
        padding: 0.5rem 2rem;
    }
`