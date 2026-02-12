import BreadCumb from '@/app/Components/Common/BreadCumb';
import Team2 from '@/app/Components/Team/Team2';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/contacter11.png"
                Title="Responsable d'agence"
            ></BreadCumb>    
            <Team2></Team2>             
        </div>
    );
};

export default page;