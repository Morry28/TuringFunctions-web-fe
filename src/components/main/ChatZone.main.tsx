import React from "react"
import TextArea from "./TextArea.main"
import ModelSelect from "./ModelSelect.main"
import MessageArea from "./MessageArea.main"
type ChatProps = { name: string }

export default function ChatZone({ name }: ChatProps) {
    return (
        <div className="w-full flex flex-col relative">
            <div className="absolute">
                <ModelSelect />
            </div>
            <div className="mx-auto text-SCS pb-6"><h1>chat with {name}</h1></div>

            <div>
                {/*<h1 className="text-3xl text-SCS font-bold mb-16">How may i be of service?</h1>*/}
            </div>
            <div><MessageArea /></div>


            <div className="fixed mx-auto bottom-12 w-full flex justify-center">
                <TextArea />
            </div>


        </div>

    )
}