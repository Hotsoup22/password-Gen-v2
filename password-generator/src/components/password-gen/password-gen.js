
import { useEffect, useState} from "react";
import passwordScript from ".";
import Card from 'react-bootstrap/Card'
import './style.css'

export default function PasswordGen(){
    const [generate, setGenerate] = useState(false)
    const gen =  useEffect(passwordScript)
    const [defaultValue , setValue]= useState()
return(
<Card 
 bg={'dark'}
 text={'white'}>

    <div className="card-header">
        <header>
            <h1 className='appTitle'>Password Generator</h1>
        </header>
    </div>

    <div className="card-body ">

        <div>
            <textarea readOnly id="passwordTextArea" placeholder="Your Secure Password"aria-label="Generated Password"></textarea>
        </div>

        <br></br>

        <div className="checklist" >
            <form className='password-gen-form' onChange={()=>setGenerate(true, gen)} >
                <ul className="no-bullets" >

                    <li>
                        <input type="checkbox" id="uppercaseBox" name="uppercaseBox" value="" className="form-check-input" />
                        <label className="form-label" htmlFor="uppercaseBox" >Uppercase Letters? A-Z</label>
                    </li>

                    <br></br>

                    <li >
                        <input type="checkbox" id="lowercaseBox" name="lowercaseBox" value="" className="form-check-input" />
                        <label className="form-label" htmlFor="lowercaseBox">Lowercase Letters? a-z</label>
                    </li>

                    <br></br>

                    <li>
                        <input type="checkbox" id="specialLetterBox" name="specialLetterBox" value="" className="form-check-input" />
                        <label className="form-label" htmlFor="specialLetterBox">Special Characters? </label>
                    </li>

                    <br></br>

                    <li>
                        <input type="checkbox" id="numbersBox" name="numbersBox" value="" className=" form-check-input" />
                        <label className="form-label" htmlFor="numbersBox">Numbers? 0-9 </label>
                    </li>
                </ul>

                <div className="password-lengthDiv  mb-3">
                    <input  type="number" id="passwordLength" name="passwordLength" value={defaultValue} min={0} max={256} className="form-label"  onChange={()=>setValue()}/>
                    <label className="form-label" htmlFor="passwordLength">Desired Password Length? </label>
                </div>
            </form>
        </div>
    </div>

    <div className="card-footer ">
        <button id="generatePasswordBtn" className=" btn-light btn">
            Generate Password
        </button>
    </div>
    
    <div>
        <script src=".index"></script>
    </div>
</Card>
)};
