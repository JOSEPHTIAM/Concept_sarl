import BreadCumb from '@/app/Components/Common/BreadCumb';
import ServiceDetails from '@/app/Components/ServiceDetails/ServiceDetails';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/ensavoirplus.png"
                Title="Services détaillés"
            ></BreadCumb> 
            <ServiceDetails title="Service détaillé"></ServiceDetails> 
        </div>
    );
};

export default page;