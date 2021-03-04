import React from "react";
import { Message } from "./";
import ScrollToBottom from "react-scroll-to-bottom";

const Messages = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            {messages.map((message, i) => (
                <Message
                    key={`message-${name}-${i}`}
                    name={name}
                    message={message}
                />
            ))}
        </ScrollToBottom>
    );
};

export default Messages;
