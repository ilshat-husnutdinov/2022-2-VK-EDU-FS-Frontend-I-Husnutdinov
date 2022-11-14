import React, { useEffect, useState } from "react";
import './ChatList.css';
import { Chat } from "./Chat";
import { getLastMessageFromLocStore } from "../../../utils";

export function ChatList(props) {
    const lastMessage = getLastMessageFromLocStore()

    return (
        <div className="chats">
            <Chat lastMessage={lastMessage} ChangeDisplay={props.ChangeDisplay} ></Chat>
        </div>
    )
}