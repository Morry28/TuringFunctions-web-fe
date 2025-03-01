import React, { useState } from "react";
import Message from "./blocks/Message.block.main";
type TMessage = {
    user: boolean
    text: string
    feedback: boolean
}[]

export default function MessageArea() {
    const [messages, setMessages] = useState<TMessage | null>([
    {
        user: false,
        text: 'Your data has been proccessed, now i am here to providu you insight',
        feedback: true
    },
    {
        user: true,
        text: 'retard',
        feedback: false
    },
    {
        user: false,
        text: 'Tell me why aint nothing like a heartbreak, tell me why aint nothing like a mistake',
        feedback: true
    },
    {
        user: true,
        text: 'You a geh',
        feedback: false
    },
    ])

    return (
        <div className="flex rounded-t-lg bg-PM mx-auto h-[450px] w-[63%]">
            <div className="flex flex-col justify-end w-full gap-8">
                {messages && messages.map((msg, index) => {
                    const last = messages.length - 1
                    if ((last === index || last-1===index) && msg.feedback === true) {
                        return (
                            <Message user={msg.user} text={msg.text} feedback={msg.feedback} />
                        )
                    }
                    return (
                        <Message user={msg.user} text={msg.text} feedback={false} />
                    )
                })}


            </div>

        </div>
    )

}