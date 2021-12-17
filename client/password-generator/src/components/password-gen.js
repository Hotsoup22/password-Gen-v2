
passwordGen = () => {
return(
<div class="card">

    <div className="card-header">
        <header>
            <h1>Password Generator</h1>
        </header>
    </div>

    <div classNameName="card-body ">

        <div>
            <textarea readonly id="passwordTextArea" placeholder="Your Secure Password"aria-label="Generated Password"></textarea>
        </div>

        <br></br>

        <div className="checklist">
            <form onSubmit="return generatePassword()">
                <ul className="no-bullets">

                    <li>
                        <input type="checkbox" id="uppercaseBox" name="uppercaseBox" value="" className="form-check-input" />
                        <label className="form-label" for="uppercaseBox">Uppercase Letters? A-Z</label>
                    </li>

                    <br></br>

                    <li >
                        <input type="checkbox" id="lowercaseBox" name="lowercaseBox" value="" className="form-check-input" />
                        <label className="form-label" for="lowercaseBox">Lowercase Letters? a-z</label>
                    </li>

                    <br></br>

                    <li>
                        <input type="checkbox" id="specialLetterBox" name="specialLetterBox" value="" className="form-check-input" />
                        <label className="form-label" for="specialLetterBox">Special Characters? </label>
                    </li>

                    <br></br>

                    <li>
                        <input type="checkbox" id="numbersBox" name="numbersBox" value="" className=" form-check-input" />
                        <label className="form-label" for="numbersBox">Numbers? 0-9 </label>
                    </li>
                </ul>

                <div className="password-lengthDiv  mb-3">
                    <input type="number" id="passwordLength" name="passwordLength" value="" min="0" max="256" className="form-label" />
                    <label className="form-label" for="passwordLength">Desired Password Length? </label>
                </div>
            </form>
        </div>
    </div>

    <div className="card-footer">
        <button id="generatePasswordBtn" className=" btn-dark btn">
            Generate Password
        </button>
    </div>
    
   

<script src="script.js"></script>
</div>
)};