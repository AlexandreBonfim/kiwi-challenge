import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`
export const Screen = styled.div`
    padding: 1rem 2rem;
    border: 0;
    border-radius: 0.25rem;
    background: var(--white);
    width: 15rem;
    height: 8rem;
`
export const Keyboard = styled.div`
    display: grid;
    padding: 2rem 0;
    grid-template-columns: repeat(3, 64px);
    grid-template-rows: 32px repeat(4, 64px);
    gap: 8px;

    button {
        border-radius: 0.25rem;
        border: 0;
        box-shadow: #777 2px 1px 10px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;

        transition: 0.4s;
        &:active {
            box-shadow: 2px 2px 2px #777;
            transform: translateY(3px);
        }
    }
`
  
export const Cursor = styled.span`
    animation: blink 1.5s linear infinite alternate;
    border-color: #333;
    border-left: 1px solid;
    margin-left: -1px;

    @keyframes blink {
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`