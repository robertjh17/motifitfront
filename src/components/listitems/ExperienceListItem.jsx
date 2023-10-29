import React from 'react';

function ExperienceListItem(props) {
    
    return (
        <li className="flex items-center justify-between px-4 py-2 border-t border-gray-200">
            <div>
                <h4 className="font-bold mb-0 text-base">{ props.bedrijf}</h4>
                <p className="text-gray-400 mb-0 text-xs">{ props.tijdsperiode}</p>
            </div>
        </li>
    );
}

export default ExperienceListItem;