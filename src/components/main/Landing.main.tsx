import React, { useState } from "react"
import ExploreApi from "./ExploreApi.main"
import FileZone from "./FileZone.main"
import ChatZone from "./ChatZone.main"
import SellTextHead from "./SellTextHead.main"

export default function Landing() {
    const [isChatReady, setIsChatReady] = useState<string>("")

    const processSuccess = (data: any): void => {
        setIsChatReady(data)
    }
    return (
        <div className="flex flex-col gap-16 pt-16">
            {!isChatReady? <SellTextHead /> : null}

            <div>
                {!isChatReady?
                    <FileZone handleSuccessFileSave={processSuccess} />
                    :
                    <ChatZone name={isChatReady} />
                }
            </div>
            
            <div>
                {!isChatReady? <ExploreApi /> : null}</div>


        </div>
    )
}