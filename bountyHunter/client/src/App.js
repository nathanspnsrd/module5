import React, {useState, useEffect} from "react"
import axios from "axios"

import Bounty from "./components/Bounty.js"
import AddBountyForm from "./components/AddBountyForm.js"

import "./app.css"


export default function App() {
    const [bounties, setBounties] = useState([])

    //Handles Get
    function getBounties() {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err.response.data.errMessage))
    }

    //Handles Post    
    function addBounty(newBounty) {
        axios.post("/bounties", newBounty)
            .then(res => {
                setBounties(prevBounties => [res.data, ...prevBounties])
            })
            .catch(err => console.log(err))
    }

    //Handles Delete    
    function deleteBounty(bountyId) {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    //Edits the Bounty   
    function editBounty(updates, bountyId) {
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    }

    //Handles Get by type
    function handleFilter(e) {
        if(e.target.value === "reset") {
            getBounties()
        } else {
            axios.get(`/bounties/search/type?type=${e.target.value}`)
                .then(res => setBounties(res.data))
                .catch(err => console.log(err))
        }
    }

    //Renders all data on initial load
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

            <h4>Filter by Type</h4>
            <select onChange={handleFilter} className="filter-form">
                <option value="reset">View All</option>
                <option value="Jedi">Jedi</option>
                <option value="Sith">Sith</option>
            </select>

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