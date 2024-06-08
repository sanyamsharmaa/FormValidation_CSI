import React, { useState } from 'react'
// import "./index.css"

export default function Form() {
    const [fnem, updtfname] = useState("")
    const [lnem, updtlname] = useState("")
    const [unem, updtuname] = useState("")
    const [email, updtemail] = useState("")
    const [pass, updtpass] = useState("")
    const [cpass, updtcpass] = useState("")
    const [phno, updtphno] = useState("")
    const [cntry, updtcntry] = useState("")
    const [city, updtcity] = useState("")
    const [pan, updtpan] = useState("")
    const [adhar, updtadhar] = useState("")
    const [showPassword, setShowPassword] = useState(false); // State to toggle visibility
    const [showCPassword, setShowCPassword] = useState(false); // State to toggle visibility

    const handleShowPassword = () => {
        setShowPassword(!showPassword); // Toggle state on checkbox click
    };

    const handleShowCPassword = () => {
        setShowCPassword(!showCPassword); // Toggle state on checkbox click
    };



    return (
        <>
            {console.log("component imported")}
            <div className="ctnr">
                {/* first name, last name, username, email, pass(show hide), phone no, country, city, pan and Adhar  */}
                <div id="fnem " ><input type="text" className='inp' placeholder='First name' onChange={(e) => { updtfname(e.target.value); console.log(fnem, fnem.length) }} />
                    <div className='msg'>{fnem.length == 0 ? "Required field" : ""}</div></div>

                <div id="lnem" ><input type="text" className='inp' placeholder='Last name' onChange={(e) => { updtlname(e.target.value); console.log(lnem) }} />
                    <div className='msg'>{lnem.length == 0 ? "Required field" : ""}</div></div>

                <div id="unem" ><input type="text" className='inp' placeholder='Username' onChange={(e) => { updtuname(e.target.value); console.log(unem) }} />
                    {/* <span><input type="checkbox" name="" id="" />show pass</span> */}
                    <div className='msg'>{unem.length == 0 ? "Required field" : ""}</div>
                </div>

                <div id="email" ><input type='email' className='inp' placeholder='Email' onChange={(e) => { updtemail(e.target.value); console.log(email) }} />
                    <div className='msg'>{email.length == 0 ? "Required field" : ""}</div></div>

                <div  ><input type={showPassword ? 'text' : 'password'} id="pass" className='inp' placeholder='password' onChange={(e) => { updtpass(e.target.value); console.log(pass) }} />
                </div>

                <div className="addon">
                    <div className='msg'>{pass.length == 0 ? "Required field" : ""}</div>
                    <div id="shw">
                        <input type="checkbox" checked={showPassword} onChange={handleShowPassword} />
                        <label htmlFor="shw">Visibility</label>  {/* Label for accessibility */}
                    </div>
                </div>

                <div id="cpas" ><input type={showCPassword ? 'text' : 'password'} className='inp' placeholder='confirm password' onChange={(e) => { updtcpass(e.target.value); console.log(cpass) }} />
                </div>

                <div className="addon">
                    <div className='msg'>{(pass === cpass) == 0 ? "Password must be same" : ""}</div>
                    <div id="shw">
                        <input type="checkbox" checked={showCPassword} onChange={handleShowCPassword} />
                        <label htmlFor="shw">Visibility</label>  {/* Label for accessibility */}
                    </div>
                </div>

                <div id="phno" >
                    <select id="country" className='ccd' onChange={(e) => { updtcntry(e.target.value); console.log(cntry) }}>
                        <option value="+91">India (+91)</option>
                        <option value="+1">United States (+1)</option>
                        <option value="+44">United Kingdom (+44)</option>
                        <option value="+86">China (+86)</option>
                        <option value="+81">Japan (+81)</option>
                    </select>
                    <input type="number" className='inp' placeholder='Phone number' onChange={(e) => { updtphno(e.target.value); console.log(phno) }} />
                    {/* <div className='msg'>{phno.length == 0 ? "Required field" : ""}</div> */}
                </div>
                <div className="addon">
                    <div className='msg'>{phno.length == 0 ? "Required field" : ""}</div>
                    <span className='msg'>{phno.length != 10 ? "It must be 10 digits" : ""}</span>
                </div>

                <div id="cntry">
                    <select id="country" className='inp' onChange={(e) => { updtcntry(e.target.value); console.log(cntry) }}>
                        <option value="">Select Country</option>
                        <option value="IN">India</option>
                        <option value="US">United States</option>
                        <option value="CN">Portugal</option>
                        <option value="JP">Argentina</option>
                        <option value="BR">Brazil</option>
                    </select>
                    <div className='msg'>{cntry.length == 0 ? "Required field" : ""}</div>
                </div>

                <div id="city">
                    <select id="city" className='inp' onChange={(e) => { updtcity(e.target.value); console.log(city) }}>
                        <option value="">Select City</option>
                        <option value="IN">Jaipur</option>
                        <option value="US">Delhi</option>
                        <option value="CN">Pune</option>
                        <option value="JP">Banglore</option>
                        <option value="BR">Mumbai</option>
                    </select>
                    <div className='msg'>{cntry.length == 0 ? "Required field" : ""}</div>
                </div>

                <div id="pan"><input type="number" className='inp' placeholder='Pan number' onChange={(e) => { updtpan(e.target.value); console.log(pan) }} />
                    {/* <div className='msg'>{pan.length == 0 ? "Required field" : ""}</div><span className='msg'>{pan.length != 10 ? "It must be 10 digits" : ""}</span> */}
                </div>

                <div className="addon">
                    <div className='msg'>{pan.length == 0 ? "Required field" : ""}</div>
                    <span className='msg'>{pan.length != 10 ? "It must be 10 digits" : ""}</span>
                </div>

                <div id="adhr"><input type="number" className='inp' placeholder='Adhar number' onChange={(e) => { updtadhar(e.target.value); console.log(adhar) }} />
                    {/* <div className='msg'>{adhar.length == 0 ? "Required field" : ""}</div> */}
                </div>
                <div className="addon">
                    <div className='msg'>{adhar.length == 0 ? "Required field" : ""}</div>
                    <span className='msg'>{adhar.length != 12 ? "It must be 12 digits" : ""}</span>
                </div>

                {/* condition - {(fnem.length>0)==0?0:1} */}
                <div ><button className="sub" type="submit" disabled={(fnem.length > 0 && lnem.length > 0 && unem.length > 0 && email.length > 0 && pass.length > 0 && cpass.length > 0 && (pass==cpass) && phno.length > 0 && pan.length > 0 && adhar.length > 0) == 0 ? true : false} 
                    onClick={()=>{
                        console.warn("Form submitted successfully!!")
                        window.location.reload()
                    }}>Submit</button></div>

                <div className="warn">
                    {(fnem.length > 0 && lnem.length > 0 && unem.length > 0 && email.length > 0 && pass.length > 0 && cpass.length > 0 && phno.length > 0 && pan.length > 0 && adhar.length > 0) == 0 ? "All field required" : ""}
                </div>
            </div>
        </>
    )
}
