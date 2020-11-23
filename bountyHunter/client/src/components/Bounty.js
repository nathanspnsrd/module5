import React, {useState} from "react"

import AddBountyForm from "./AddBountyForm.js"

import "./bounty.css"

export default function Bounty(props) {
    const {firstName, lastName, type, isAlive, bountyAmount, _id, deleteBounty, editBounty} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="bounty">
            <div className={isAlive ? "isAlive" : "isDead"}>
                { !editToggle ?
                    <>
                        <h2>{firstName} {lastName}</h2>
                        <h3>{type}</h3>
                        <h4>{isAlive ? "The bounty is still alive." : "Someone got to the bounty before you."}</h4> 
                        <h4>The bounty {isAlive ? "is" : "was"} ${bountyAmount}</h4>
                        <div>
                            <button 
                                className="deleteButton"
                                onClick={() => deleteBounty(_id)}>Delete</button>
                            <button 
                                className="editButton"
                                onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                        </div>
                    </>
                    :
                    <>
                        <AddBountyForm 
                            {...props}
                            btnText="Submit Edit"
                            submit={(...args) => {
                                editBounty(...args)
                                setEditToggle(false)
                            }}
                        />
                        <button 
                                className="closeButton"
                                onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                    </>
                }
            </div>
        </div>
    )
}