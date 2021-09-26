import React, { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import DeveloperHire from '../DeveloperHire/DeveloperHire';
import './DeveloperTeam.css';

const DeveloperTeam = () => {
    // useState , useEffect json file data fetch 
    const [developerteams, setDeveloperteam] = useState([]);
    const [developerhires, setDevelopershires] = useState([]);
    useEffect(() => {
        fetch('./fake-dev.JSON')
            .then(response => response.json())
            .then(data => setDeveloperteam(data))
    }, []);
    // hire developer button handleDeveloper
    const handleDeveloper = (developerteams) => {
        const newDeveloperhire = [...developerhires, developerteams];
        setDevelopershires(newDeveloperhire);
    }
    return (
        <div className="container-fluid mt-5 mb-5">
            <div className="row">
                <div className="col-12 col-lg-9 developersContainer dev-data">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {
                            developerteams.map(developer => <Developer key={developer.id} developers={developer}
                                handleDeveloper={handleDeveloper}
                            ></Developer>)

                        }
                    </div>
                </div>
                {/* cart row */}
                <div className="col-10 col-md-6 mx-auto col-lg-3 mt-5 mt-lg-0 cartContainer">
                    <DeveloperHire developer={developerhires}></DeveloperHire>
                </div>
            </div>
        </div>
    );
};

export default DeveloperTeam;