import React from 'react';
import ExperienceListItem from './listitems/ExperienceListItem';
function ExperienceList() {
    return (
        <div className="grid-rows-1 mb-2">
            <h3 className="text-motigreen-500 font-medium text-2xl mt-2">ICT Werkervaring</h3>
            <hr />
            <ul className="divide-y divide-gray-200">
                <ExperienceListItem bedrijf="Stage Vindbaar in" tijdsperiode="september 2018 - januari 2019"/>
                <ExperienceListItem bedrijf="Stage Webspark" tijdsperiode="januari 2020 - juni 2020"/>
            </ul>
        </div>
    );
}
export default ExperienceList;