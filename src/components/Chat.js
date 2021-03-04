import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { InfoBar, Input, Messages } from "./";

let socket;
const ENDPOINT = "https://zzid-chat-server-first.herokuapp.com/";

const Chat = ({ location }) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMesssge = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }
    };

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        socket.emit("join", { name, room }, (error) => {
            // if (error) return alert(error);
        });
    }, [location.search]);

    useEffect(() => {
        socket.on("message", (message) => {
            setMessages([...messages, message]);
        });
        return () => {};
    }, [messages]);

    const props = {
        message,
        setMessage,
        sendMesssge,
    };
    return (
        <div className="outer-container">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input {...props} />
            </div>
        </div>
    );
};

export default Chat;
