import facade from "./apiFacade";
import React, { useState, useEffect } from "react";

const Facts = () => {
    const [factsData, setFactsData] = useState("");

    useEffect(() => {
        facade.fetchFactsData().then((data) => setFactsData(data ));
    }, []);

    return (
        <div>
            <h2>Facts Data Received from server</h2>
            <h3>Facttype: {factsData.cType}</h3>
            <h3>{factsData.cText}</h3>
            <h3>Facttype: {factsData.dType}</h3>
            <h3>{factsData.dText}</h3>
        </div>
    );
};

export default Facts;