import React from "react";

function Loading() {
    return (
        <div className="text-center m-5 p-5">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h2 className="m-5 text-primary">Loading...</h2>
        </div>
    );
}

export default Loading;
