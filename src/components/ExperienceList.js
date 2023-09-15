import React from 'react';

function ExperienceList() {
    return (
        <div className="row mb-2">
            <h3 className="fs-3 txt-primary">Werkervaring</h3>
            <hr/>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h4 className="fw-bold mb-0 list-titel-size">Stage Vindbaar in</h4>
                            <p className="text-muted mb-0 list-itemdate-size">september 2018 - januari 2019</p>
                        </div>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h4 className="fw-bold mb-0 list-titel-size">Stage Webspark</h4>
                            <p className="text-muted mb-0 list-itemdate-size">januari 2020 - juni 2020</p>
                        </div>
                    </li>
                </ul>
        </div>
    );
}
export default ExperienceList;