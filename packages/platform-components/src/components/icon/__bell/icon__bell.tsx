import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__bell.scss';

const IconBell = (props: SingleIconProps) => {
    return (
        <Icon ico="bell" {...props}>
            <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 6.44v3.33m8.59 5.4c.73 1.22.15 2.8-1.2 3.25a23.34 23.34 0 0 1-14.73 0c-1.44-.48-1.99-1.94-1.2-3.25l1.27-2.12c.35-.58.63-1.61.63-2.28v-2.1A6.66 6.66 0 0 1 12.02 2c3.66 0 6.66 3 6.66 6.66v2.1c0 .18.02.38.05.59" stroke="#000" strokeLinecap="round" strokeMiterlimit="10" />
                <path d="M15.33 18.82c0 1.83-1.5 3.33-3.33 3.33-.91 0-1.75-.38-2.35-.98-.6-.6-.98-1.44-.98-2.35" stroke="#000" strokeMiterlimit="10" />
            </svg>
        </Icon>
    );
};

export default IconBell;
