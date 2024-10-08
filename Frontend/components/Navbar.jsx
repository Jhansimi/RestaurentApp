import React,{useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {data} from "../restApi.json"
import { Link } from 'react-scroll';

const Navbar = () => {
    const [show,setShow]=useState(false)
  return (
  <nav>
    <div className="logo">JHANSI</div>
    <div className={show ? "navlinks showmenu" : "navLinks"}>
        <div className='links'>
            {
              data[0].navbarLinks.map(element=>{
               return (
                <Link to={element.link} key={element.id}
                spy={true} smooth={true}
                duration={500}>{element.title}</Link>
               )
              })
            }
        </div>
        <button className='menuBtn'>OUR MENU</button>
    </div>
    <div className="hamburger">
      <GiHamburgerMenu 
      onClick={()=>setShow(!show)}/>
    </div>
  </nav>
  )
}

export default Navbar