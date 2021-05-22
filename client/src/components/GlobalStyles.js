import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  #root {
    min-height: 100vh;
    background: ${({ theme }) => theme.shadow};
    overflow: auto;
 }
 .card, .card__closeButton{
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
 }
 .card:hover, .card__closeButton:hover{
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
 }
 .card__infoButton{
  border: 2px solid ${({ theme }) => theme.text};
 }
 .card__infoButton a{
  color: ${({ theme }) => theme.text};
 }
 .form{
  border: 2px solid ${({ theme }) => theme.text};

 }
 .form__input{
  color: ${({ theme }) => theme.text};
 }
 button{
  border: 2px solid ${({ theme }) => theme.text};
 }
 button a{
  color: ${({ theme }) => theme.text};
 }
 .ciudad{
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
 }`

