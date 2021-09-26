import React from 'react';
import './DeveloperHire.css';

const DeveloperHire = (props) => {
    // destructuring
    const { developer } = props;
    let total = 0;
    let developerName = [];
    for (const developers of developer) {
        total = total + developers.salary;
        developerName = developers.name;
    }
    return (
        <div className="cart">
            <table className="table">
                <thead>
                    <tr>
                        <th className="cart-header" scope="col">Developer Hire</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Developer Added:</th>
                        <td><span>{props.developer.length}</span></td>
                    </tr>
                    <tr>
                        <th>Total Salary:</th>
                        <td>$ <span>{total}</span></td>
                    </tr>
                    <tr>
                        <th>Developer Name:</th>
                        <td>{developerName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DeveloperHire;