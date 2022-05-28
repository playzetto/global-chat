import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__message-add.scss';

const IconMessageAdd = (props: SingleIconProps) => {
    return (
        <Icon ico="message-add" {...props}>
            <svg viewBox="0 0 24 24">
                <path d="M22 7.42999V13.43C22 14.93 21.5 16.18 20.62 17.06C19.75 17.93 18.5 18.43 17 18.43V20.56C17 21.36 16.11 21.84 15.45 21.4L11 18.43H8.88C8.96 18.13 9 17.82 9 17.5C9 16.48 8.61 15.54 7.97 14.83C7.25 14.01 6.18 13.5 5 13.5C3.88 13.5 2.86 13.96 2.13 14.71C2.04 14.31 2 13.88 2 13.43V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999Z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M9 17.5C9 17.82 8.96 18.13 8.88 18.43C8.79 18.83 8.63001 19.22 8.42001 19.56C7.73001 20.72 6.46 21.5 5 21.5C3.97 21.5 3.04 21.11 2.34 20.47C2.04 20.21 1.77999 19.9 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.42 1.43 15.43 2.13 14.71C2.86 13.96 3.88 13.5 5 13.5C6.18 13.5 7.25 14.01 7.97 14.83C8.61 15.54 9 16.48 9 17.5Z" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M6.48999 17.48H3.51001" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M5 16.02V19.01" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
                <path d="M8.5 10.5H15.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
            </svg>
        </Icon>
    );
};

export default IconMessageAdd;
