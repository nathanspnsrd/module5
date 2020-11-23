import React, {useState} from "react"

import "./addBountyForm.css"

export default function AddBountyFrom(props) {
    const {firstName, lastName, isAlive, type, bountyAmount, submit, btnText, _id} = props
    const initInputs = {firstName: firstName || "", lastName: lastName || "", isAlive: isAlive === undefined ? true : isAlive, type: type || "", bountyAmount: bountyAmount || ""}
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const {name, type} = e.target
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
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
                    type="checkbox" 
                    name="isAlive" 
                    checked={inputs.isAlive} 
                    onChange={handleChange} 
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