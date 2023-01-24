import React, { useState } from 'react'
const Comp1 = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        mail: "",
        phoneno: "",
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);


        // const value = event.target.value;
        // const name = event.target.name;
        // or

        const { value, name } = event.target;

        setFullName((preValue) => {

            if (name === 'fName') {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.mail,
                    phoneno: preValue.phoneno,
                };
            } else if (name === 'lName') {
                return {
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.mail,
                    phoneno: preValue.phoneno,
                };
            }
            else if (name === 'mail') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    mail: value,
                    phoneno: preValue.phoneno,

                };
            }
            else if (name === 'phoneno') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    mail: preValue.mail,
                    phoneno: value,
                };
            }
        });
    };



    const onSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted "); // removing the default behavior of form 

    };
    return (
        <>
            <div className='Contianer1'>
                <form onSubmit={onSubmit}>
                    <h1>Hello,{fullName.fname} {fullName.lname} </h1>
                    <p>{fullName.mail} {fullName.phoneno}</p>
                    <input type="text" placeholder='Enter Your Name ' name='fName' onChange={inputEvent} value={fullName.fname} /><br />
                    <br />
                    <input type="text" placeholder='Enter Your Last Name' name='lName' onChange={inputEvent} value={fullName.lname} /><br />
                    <br />
                    <input type="email" placeholder='Enter Your Mail ' name='mail' onChange={inputEvent} value={fullName.mail} /><br />
                    <br />
                    <input type="number" placeholder='Enter Your Phone No.. ' name='phoneno' onChange={inputEvent} value={fullName.phoneno} /><br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Comp1;
