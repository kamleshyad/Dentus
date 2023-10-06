import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./css/GlobalStyle";
import { Header } from "./compnents/Header";

const App = ()=>{
  const theme = {
    colors :{
      white : "#fff",
      black : "#000",
      light_violet : "#f5f3ff",
      dark_blue : "#15269c",
      light_blue : "#2b3fce",
      green : "#67b930",
    }
  }
  return(
    <div className="mainpage">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/" element={<About />}/>
            <Route path="/services/" element={<Services/>}/>
            <Route path="/blog/" element={<Blog />} />
            <Route path="/contact/" element={<Contact />}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App;