import React from 'react';

function EducationList() {
    return (
        <div className="grid grid-rows-1 mb-2">
            <h3 className="text-motigreen-500 font-medium text-2xl">Profiel</h3>
            <hr />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit turpis in felis
                hendrerit,
                et semper tortor rutrum. Sed in leo lacus. Suspendisse eget efficitur erat.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                egestas.
            </p>

            <h3 className="text-motigreen-500 font-medium text-2xl mt-2">Opleidingen</h3>
            <hr />
            <ul className="divide-y divide-gray-200">
                <li className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
                    <div>
                        <h4 className="font-bold mb-0 text-base">VMBO-TL</h4>
                        <p className="text-gray-500 mb-0 text-sm">Ichthus college, Dronten</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="text-gray-400 mb-0 text-xs">september 2013 - juni 2017</p>
                    </div>
                </li>

                <li className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
                    <div>
                        <h4 className="font-bold mb-0 text-base">Applicatie- en Mediaontwikkelaar</h4>
                        <p className="text-gray-500 mb-0 text-sm">Landstede college, Zwolle</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="text-gray-400 mb-0 text-xs">september 2017 - juni 2020</p>
                    </div>
                </li>

                <li className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
                    <div>
                        <h4 className="font-bold mb-0 text-base">HBO-ICT</h4>
                        <p className="text-gray-500 mb-0 text-sm">Hogeschool Windesheim, Zwolle</p>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="text-gray-400 mb-0 text-xs">september 2020 - Heden</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default EducationList;