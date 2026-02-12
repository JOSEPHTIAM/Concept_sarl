import BreadCumb from '@/app/Components/Common/BreadCumb';
import Form2 from '@/app/Components/Form/Form2';
import Pricing1 from '@/app/Components/Pricing/Pricing1';
import Impressions3 from '@/app/Components/Impressions/Impressions3';
import Video1 from '@/app/Components/Video/Video1';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgImg="/assets/img/impression.jpg"
                Title="Impressions"
            ></BreadCumb>
            <Impressions3></Impressions3>
        </div>
    );
};

export default page;