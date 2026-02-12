import BreadCumb from '@/app/Components/Common/BreadCumb';
import Form2 from '@/app/Components/Form/Form2';
import Pricing1 from '@/app/Components/Pricing/Pricing1';
import Faconnages3 from '@/app/Components/Faconnages/Faconnages3';
import Video1 from '@/app/Components/Video/Video1';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/service_faconnages.jpg"
                Title="Façonnages"
            ></BreadCumb>
            <Faconnages3></Faconnages3>
        </div>
    );
};

export default page;