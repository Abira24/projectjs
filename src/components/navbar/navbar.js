import React,{component} from "react";
import {MenuItems} from "./MenuItems"
import"./Navbar.css"
class Navbar extends component{
    render(){
        return(
          <nav className="NavbarItems">
            <h1 className="mavbar-logo">React</h1>
            <div className="menu-icon">

            </div>
            <ul>
              {MenuItems.map}((items,index)=>{
                return(
              
            <li key={index}>
                <a className={MenuItems.cNAme} href={MenuItems.url}>
                {item.title}
                </a>
              </li> 
                )
                })}
            </ul>
          </nav>
        )
    }
}
export default Navbar