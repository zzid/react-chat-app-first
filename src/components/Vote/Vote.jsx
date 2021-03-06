import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
const Vote = (props) => {
    const { onClickNext, sendVote, done } = props;
    return (
        <div className="vote-numbers">
            {done ? (
                <div className="done">
                    <h1>Done</h1>
                    <button className="next" onClick={(e) => onClickNext(e)}>
                        Next
                    </button>
                </div>
            ) : (
                numbers.map((number) => {
                    return (
                        <button
                            className="fibonacci-numbers"
                            onClick={(e) => sendVote(e)}
                            value={number}
                        >
                            {number}
                        </button>
                    );
                })
            )}
        </div>
    );
};

export default Vote;
