import React, { useState } from "react";
import { Link } from "react-router-dom";

const Join = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");

    const onChange = (e, type) => {
        const {
            target: { value },
        } = e;
        type === "name" ? setName(value) : setRoom(value);
    };
    const onClick = (e) => (!name || !room ? e.preventDefault() : null);
    return (
        <div className="join-outer-container">
            <div className="join">
                <h1 className="heading">Join</h1>
                <div>
                    <input
                        placeholder="name"
                        className="joinInput"
                        onChange={(e) => onChange(e, "name")}
                        type="text"
                    />
                </div>
                <div>
                    <input
                        placeholder="room"
                        className="joinInput mt-20"
                        onChange={(e) => onChange(e, "room")}
                        type="text"
                    />
                </div>
                <Link onClick={onClick} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button mt-20" type="submit">
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Join;
