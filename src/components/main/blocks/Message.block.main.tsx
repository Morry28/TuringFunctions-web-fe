import React from "react";

type MsgProps = {
    user: boolean
    text: string
    feedback: boolean
}

export default function Message({ user, text, feedback }: MsgProps) {

    return (
        <div className={`${user ?
            'self-end bg-PMS text-SCS rounded-bl-lg' :
            'self-start text-SCS '}
     rounded-t-lg  px-4 py-2 relative`}>
            <p>{text}</p>

            {feedback && <div className="absolute flex">
                <div className="p-2 right-0 flex gap-4 items-center ">
                    <p className="text-lg hover:text-AC cursor-pointer">⎘</p>
                    <p className="text-lg hover:text-AC cursor-pointer">⟳</p>
                    <p className=" hover:text-SA cursor-pointer">☹</p>

                </div>

            </div>}



        </div>
    )
}