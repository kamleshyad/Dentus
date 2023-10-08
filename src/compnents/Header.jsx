import { NavLink } from "react-router-dom"

export const Header = ()=>{
    return(
        <section>
            <div className="headersec">
                <div className="container">
                    <div className="headertopsec">
                        <div className="logo">
                            <NavLink to="/">
                                <img src="../images/logo.png" width="174" height="58" alt="logo"/>
                            </NavLink>
                        </div>
                        <div className="topnav">
                            <ul className="reset">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="about/">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="services/">Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="blog/">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="contact/">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="headerright">
                            <ul className="reset">
                                <li></li>
                                <li className="bookbtn">
                                    <NavLink to="#">Book and Appointment</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}