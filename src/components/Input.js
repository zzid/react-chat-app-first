import React from "react";

const Input = (props) => {
    const { message, setMessage, sendMesssge } = props;

    return (
        <form className="form">
            <input
                type="text"
                className="input"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => (e.key === "Enter" ? sendMesssge(e) : null)}
            />
            <button className="send-button" onClick={(e) => sendMesssge(e)}>
                Send
            </button>
        </form>
    );
};

export default Input;
