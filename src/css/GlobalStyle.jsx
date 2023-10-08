import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {margin:0; padding:0;font:normal 18px 'Archivo', sans-serif; color:#000; line-height:normal;}

.container{max-width: min(1290px, 96%); width: auto; margin: 0 auto;}
.reset{list-style: none; padding: 0; margin: 0 auto;}
img{max-width: 100%; height: auto;}
a{text-decoration: none;}

.headersec{background: ${({theme})=> theme.colors.dark_blue};}
.headersec .headertopsec{display: flex; align-items: center; justify-content: space-between; gap: 40px; padding: 20px 0;}
.headersec .topnav ul{display: flex; flex-flow: row nowrap; gap: 40px; font-size: 0;}
.headersec .topnav ul li a{color: #fff; display: inline-block; font-size: 16px; font-weight: 500; line-height: normal; transition: all 0.3s linear; letter-spacing: 0.5px;}
.headersec .topnav ul li a:hover{color: ${({theme})=> theme.colors.green}}
.headersec .headerright ul{display: flex; flex-flow: row nowrap; gap: 40px; font-size: 0;}
.headersec .headerright ul a{color: ${({theme})=> theme.colors.white}; font-size: 18px; font-weight: 600; transition: all 0.3s linear;}
.headersec .headerright ul a.callbtn:hover{color: ${({theme})=> theme.colors.green}}
.headersec .headerright ul a.bookbtn{padding: 15px 30px; background: ${({theme})=> theme.colors.light_blue}; border-radius: 6px;  transform: translateY(0); transform-origin: bottom;}
.headersec .headerright ul a.bookbtn:hover{transform: translateY(-5px);}
`;