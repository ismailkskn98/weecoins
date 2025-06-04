"use client";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import { GiCheckMark } from "react-icons/gi";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "sonner";

const CopyClipboard = ({ text }) => {
    const [copySuccess, setCopySuccess] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setCopySuccess(false);
        }, 2500);
    }, [copySuccess]);

    return (
        <div
            className={"w-full"}
        >
            <div className={`flex  items-center gap-2 w-full`}>
                <div className={classNames("flex flex-1 w-full items-center justify-center text-nowrap rounded-lg bg-zinc-50 border border-zinc-300 px-4 py-3")}>
                    <input type="text" readOnly disabled value={text} className="w-full h-full border-none bg-transparent text-sm" />
                    <button
                        type="button"
                        onClick={() => {
                            copy(text);
                            setCopySuccess(true);
                            toast.success("Kopyalandı");
                        }}
                        className="relative flex cursor-pointer items-center justify-center rounded-xl border border-solid border-zinc-300 bg-transparent p-3 text-text-black"
                    >
                        <GiCheckMark className={`relative text-xl transition-all duration-300 ${copySuccess ? "opacity-100 scale-100 z-10" : "z-10 scale-0 opacity-0"}`} style={{ color: "#28a745" }} />
                        <IoCopyOutline
                            className={`absolute left-1/2 text-text-black top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl transition-all duration-300 ${!copySuccess ? "opacity-100 scale-100 z-10" : "scale-0 opacity-0"}`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CopyClipboard;
