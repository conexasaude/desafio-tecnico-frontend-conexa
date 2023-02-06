import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background: ${({ theme }) => theme.colors['base-white']};
        color: ${({ theme }) => theme.colors['base-gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif
    }

    button {
        cursor: pointer;
    }
`
