import React, {useState, useEffect} from "react"
import axios from "axios"

import Bounty from "./components/Bounty.js"
import AddBountyForm from "./components/AddBountyForm.js"

import "./app.css"

export default function App() {
    const [bounties, setBounties] = useState([])

    function getBounties() {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    function addBounty(newBounty) {
        axios.post("/bounties", newBounty)
            .then(res => {
                setBounties(prevBounties => [res.data, ...prevBounties])
            })
            .catch(err => console.log(err))
    }

    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    function editBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getBounties()
    }, [])

    return (
        <div className="container">
            <h1>The Bounties</h1>
            <AddBountyForm 
                submit = {addBounty}
                btnText = "Add Bounty"
            />
            {
                bounties.map(bounty => 
                    <Bounty 
                        {...bounty} 
                        key={bounty._id}
                        deleteBounty = {deleteBounty}
                        editBounty = {editBounty}
                    /> 
                )
            }
        </div>
    )
}