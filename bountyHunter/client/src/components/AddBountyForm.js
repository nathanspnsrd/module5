import React, {useState} from "react"

import "./addBountyForm.css"

export default function AddBountyFrom(props) {
    const {firstName, lastName, isAlive, type, bountyAmount, submit, btnText, _id} = props
    const initInputs = {firstName: firstName || "", lastName: lastName || "", isAlive: isAlive || true, type: type || "", bountyAmount: bountyAmount || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value, }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        submit(inputs, _id)
        setInputs(initInputs)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input
                    className="inputItem" 
                    type="text" 
                    name="firstName" 
                    value={inputs.firstName} 
                    onChange={handleChange} 
                    placeholder="First Name"
                />
                <input
                    className="inputItem"  
                    type="text" 
                    name="lastName" 
                    value={inputs.lastName} 
                    onChange={handleChange} 
                    placeholder="Last Name"
                />
                <input 
                    className="inputItem" 
                    type="text" 
                    name="type" 
                    value={inputs.type} 
                    onChange={handleChange} 
                    placeholder="Sith or Jedi"
                />
                <input 
                    className="inputItem" 
                    type="booleen" 
                    name="isAlive" 
                    value={inputs.isAlive} 
                    onChange={handleChange} 
                    placeholder="true or false"
                />
                <input 
                    className="inputItem" 
                    type="number" 
                    name="bountyAmount" 
                    value={inputs.bountyAmount} 
                    onChange={handleChange} 
                    placeholder="Bounty Amount"
                />
                <button className="inputItem">{btnText}</button>
            </form>
        </div>      
    )
}