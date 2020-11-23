import React, {useState} from "react"

import AddBountyForm from "./AddBountyForm.js"

import "./bounty.css"

export default function Bounty(props) {
    const {firstName, lastName, type, isAlive, bountyAmount, _id, deleteBounty, editBounty} = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className="bounty">
            {   isAlive === true
                ?
                <div className="isAlive">
                    { !editToggle ?
                        <>
                            <h2>{firstName} {lastName}</h2>
                            <h3>{type}</h3>
                            <h4>The bounty is still alive.</h4> 
                            <h4>The bounty is ${bountyAmount}</h4>
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
                                firstName={firstName}
                                lastName={lastName}
                                type={type}
                                bountyAmount={bountyAmount}
                                isAlive={isAlive}
                                _id={_id}
                                btnText="Submit Edit"
                                submit={editBounty}
                            />
                            <button 
                                    className="closeButton"
                                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                        </>
                    }
                </div>
                : 
                <div className="isDead">
                    { !editToggle ?
                        <>
                            <h2>{firstName} {lastName}</h2>
                            <h3>{type}</h3>
                            <h4>Someone got to the bounty before you.</h4> 
                            <h4>The bounty was ${bountyAmount}</h4>
                            <div>
                                <button 
                                    className="deleteButton"
                                    onClick={() => deleteBounty}>Delete</button>
                                <button 
                                    className="editButton"
                                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                            </div> 
                        </>
                        :
                        <>
                            <AddBountyForm 
                                firstName={firstName}
                                lastName={lastName}
                                type={type}
                                bountyAmount={bountyAmount}
                                isAlive={isAlive}
                                _id={_id}
                                btnText="Submit Edit"
                                submit={editBounty}
                            />
                            <button 
                                    className="closeButton"
                                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                        </>
                    }
                </div>       
            }
        </div>
    )
}