import React from 'react';

function EducationList() {
    return (
        <div className="row mb-2">
            <h3 className="fs-3 txt-primary">Profiel</h3>
            <hr />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit turpis in felis
                hendrerit,
                et semper tortor rutrum. Sed in leo lacus. Suspendisse eget efficitur erat.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas.
            </p>

            <h3 className="fs-3 txt-primary">Opleidingen</h3>
            <hr />
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="fw-bold mb-0 list-titel-size">VMBO-TL</h4>
                        <p className="text-muted mb-0 list-ondertitel-size">Ichthus college, Dronten</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="text-muted mb-0 list-itemdate-size">september 2013 - juni 2017</p>
                    </div>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="fw-bold mb-0 list-titel-size">Applicatie- en Mediaontwikkelaar</h4>
                        <p className="text-muted mb-0 list-ondertitel-size">Landstede college, Zwolle</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="text-muted mb-0 list-itemdate-size">september 2017 - juni 2020</p>
                    </div>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="fw-bold mb-0 list-titel-size">HBO-ICT</h4>
                        <p className="text-muted mb-0 list-ondertitel-size">Hogeschool Windesheim, Zwolle</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="text-muted mb-0 list-itemdate-size">september 2020 - Heden</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default EducationList;