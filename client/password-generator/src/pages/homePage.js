import PasswordGen from "../components/Password-Gen/password-gen.js";

import Header from '../components/Header/Header'
import homepageStyle from "./assets/homepageStyle.css";
import Footer from '../components/Footer/Footer'
export default function HomePage(){
 

      return(
        <div className="container">
        <Header/>
        <PasswordGen/>
        <Footer/>
        </div>

      )
    // }
}