import PasswordGen from "../components/password-gen/password-gen";

import Header from '../components/Header/Header'
import "./assets/homepageStyle.css";
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