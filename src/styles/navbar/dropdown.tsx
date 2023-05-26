import { createGlobalStyle } from "styled-components";

export const DropdownStyles = createGlobalStyle`
.ant-dropdown-menu{
   padding: 1rem 0 !important;
   border: 0.5px solid #e9e9e9 !important ;
}
.ant-dropdown-menu-item{
    padding: 0.5rem 2rem !important;
    font-family: 'Poppins', sans-serif;
span{
    font-size: 16px;
    &>button{ 
        
        background-color: #cbf200;
        border: none;
        outline: none;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        color: #095160;
        font-weight: 550;
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        &:hover{
            opacity: 0.9;
            -webkit-transform: scale(0.99);
            -moz-transform: scale(0.99);
            transform: scale(0.99);
        }
    }
}

}




`;
