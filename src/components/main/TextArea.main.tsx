import React, { useEffect, useRef, useState } from "react"
export default function TextArea() {
    const [text, setText] = useState<string>("");
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 512)}px`;
        }
    }, [text]);

    return (
        <div className="relative w-[66%]">
            <textarea
                ref={textareaRef}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full min-h-36 max-h-64 bg-PMS text-SCS text-lg text-left rounded-[26px] resize-none overflow-y-auto p-4 focus:outline-0"
                style={{ lineHeight: "1.5" }}
            />

            <button className="absolute right-4 bottom-6 text-3xl px-4 py-2 bg-ACS hover:bg-AC rounded-[26px] z-50">↑</button>

            {!text ? <div className="absolute bottom-6 w-full flex justify-start gap-4 text-SCS px-4">
                <button className="text-lg px-4 py-2 border-ACS border hover:bg-ACS hover:text-PM rounded-[26px]">
                    Are data corrupted?
                </button>
                <button className="text-lg px-4 py-2 border-ACS border hover:bg-ACS hover:text-PM rounded-[26px]">
                    Average number
                </button>
                <button className="text-lg px-4 py-2 border-ACS border hover:bg-ACS hover:text-PM rounded-[26px]">
                    Find groups
                </button>
            </div>
                : null
            }



        </div>)
}