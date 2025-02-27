import React from "react"
import ExploreApi from "./ExploreApi.main"
import FileZone from "./FileZone.main"

export default function Landing(){

 
    return (
        <div className="flex flex-col gap-16 pt-16">
            <div className="inline-flex mx-auto">
                <h1 className="text-AC">PRICE</h1>
                <h1 className="text-TC">=/=</h1>
                <h1 className="text-SA">SIZE</h1>
            </div>
            <div><FileZone/></div>
            <div><ExploreApi/></div>
            

        </div>
    )
}