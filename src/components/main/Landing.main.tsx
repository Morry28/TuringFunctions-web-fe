import React from "react"
import ExploreApi from "./ExploreApi.main"
import FileZone from "./FileZone.main"

export default function Landing(){

 
    return (
        <div className="flex flex-col gap-36 pt-36">
            <div><FileZone/></div>
            <div><ExploreApi/></div>
            

        </div>
    )
}