import React from 'react';
import EducationListItem from './listitems/EducationListItem';
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
                <EducationListItem opleiding="VMBO-TL" school="Ichthus college, Dronten" tijdsperiode="september 2013 - juni 2017" />
                <EducationListItem opleiding="Applicatie- en Mediaontwikkelaar" school="Landstede college, Zwolle" tijdsperiode="september 2017 - juni 2020" />
                <EducationListItem opleiding="HBO-ICT" school="Hogeschool Windesheim, Zwolle" tijdsperiode="september 2020 - Heden" />
            </ul>
        </div>
    );
}
export default EducationList;