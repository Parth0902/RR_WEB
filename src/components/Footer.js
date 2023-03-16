import React from "react";
import logo from '../images/Logo.png'
import '../style/footer.css'

const Footer=()=>
{
    return(

        <footer>
             <div className="row1">
                 <img src={logo}/>

                 <div className="search">
                   <input type="text" placeholder="Email"></input>
                    <button><i class='bx bxs-right-arrow-alt'></i></button>
                 </div>
            </div>
             <div className="row2">
                
                <div className="col">
                    <h2>Contact Us</h2>
                    <p>info@rrliving.com</p>
                    <p>1-800-200-300</p>
                    <p>Shop no. 3-4, Kumar Vastu, Ashok Nagar, Pune, 411007.</p>

                </div>

                <div className="col">
                    <h2>PRODUCTS</h2>
                    <p>Specific Renovation</p>
                    <p>Full Renovation</p>
                </div>

                <div className="col">
                    <h2>BRANDS</h2>
                    <p>Schuller</p>
                    <p>Next 125</p>
                </div>
             </div>

             <p className="copyRight">&copy; Copyright RR</p>
             <hr/>

             <div className="row3">
                 <h2>FOLLOW US</h2>
                <div className="Socials">
                <i class='bx bxl-facebook-square'></i>
                <i class='bx bxl-twitter' ></i>
                <i class='bx bx-envelope' ></i>
                <i class='bx bxl-instagram' ></i>

                </div>
             </div>

          

        </footer>

    )
}

export default Footer;