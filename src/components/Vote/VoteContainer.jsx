import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import { Vote } from "./";
let socket;
const ENDPOINT = "localhost:5000";

const VoteContainer = ({ location }) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        socket.emit("join", { name, room }, (error) => {
            // if (error) return alert(error);
        });
    }, [location.search]);

    const sendVote = (e) => {
        e.preventDefault();
        const {
            target: { value },
        } = e;
        console.log("value : ", value);
        if (value) {
            socket.emit("sendVote", value, () => setDone(true));
        }
    };
    const onClickNext = (e) => {
        e.preventDefault();
        setDone(false);
    };
    const props = {
        onClickNext,
        sendVote,
        done,
    };
    return (
        <div className="vote-container">
            <div className="vote-area">
                <Vote {...props} />
            </div>
            <div className="result-area"></div>
        </div>
    );
};

export default VoteContainer;
