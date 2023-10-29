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
                                <li><NavLink to="/" className={({ isActive })=>(isActive ? 'active' : 'inactive')}>Home</NavLink></li>
                                <li><NavLink to="about/" className={({ isActive })=> (isActive ? 'active' : 'inactive')}>About Us</NavLink></li>
                                <li><NavLink to="services/" className={({ isActive })=> (isActive ? 'active' : 'isactive')}>Services</NavLink></li>
                                <li><NavLink to="blog/" className={({ isActive })=> (isActive ? 'active' : 'isactive')}>Blog</NavLink></li>
                                <li><NavLink to="contact/" className={({ isActive })=> (isActive ? 'active' : 'isactive')}>Contact</NavLink></li>
                            </ul>
                        </div>
                        <div className="headerright">
                            <ul className="reset">
                                <li><NavLink to="tel:0123456789" className="glcall callbtn">+0 123-456-789 </NavLink></li>
                                <li>
                                    <NavLink to="#" className="bookbtn">Book and Appointment</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}