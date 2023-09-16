import React from 'react';

function ExperienceList() {
    return (
        <div className="grid-rows-1 mb-2">
            <h3 className="text-motigreen-500 font-medium text-2xl mt-2">ICT Werkervaring</h3>
            <hr />
            <ul className="divide-y divide-gray-200">
                <li className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
                    <div>
                        <h4 className="font-bold mb-0 text-base">Stage Vindbaar in</h4>
                        <p className="text-gray-400 mb-0 text-xs">september 2018 - januari 2019</p>
                    </div>
                </li>

                <li className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
                    <div>
                        <h4 className="font-bold mb-0 text-base">Stage Webspark</h4>
                        <p className="text-gray-400 mb-0 text-xs">januari 2020 - juni 2020</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}
export default ExperienceList;