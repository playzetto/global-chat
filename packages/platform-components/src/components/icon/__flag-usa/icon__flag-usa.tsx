import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__flag-usa.scss';

const IconFlagUsa = (props: SingleIconProps) => {
    return (
        <Icon ico="flag-usa" {...props}>
            <svg viewBox="0 0 30 30">
                <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#F0F0F0" />
                <path d="M14.3479 15H30C30 13.6461 29.8196 12.3346 29.4833 11.0869H14.3479V15Z" fill="#D80027" />
                <path d="M14.3479 7.17393H27.7984C26.8802 5.67557 25.7062 4.35118 24.3373 3.26086H14.3479V7.17393Z" fill="#D80027" />
                <path d="M15.0001 30C18.5303 30 21.7751 28.7798 24.3374 26.7391H5.66284C8.22515 28.7798 11.4699 30 15.0001 30Z" fill="#D80027" />
                <path d="M2.20171 22.826H27.7985C28.5357 21.6232 29.1074 20.3083 29.4834 18.913H0.516846C0.892842 20.3083 1.46454 21.6232 2.20171 22.826V22.826Z" fill="#D80027" />
                <path d="M6.94828 2.34246H8.31521L7.04373 3.26619L7.52941 4.76086L6.25799 3.83713L4.98656 4.76086L5.40609 3.46963C4.2866 4.40215 3.30539 5.49469 2.4968 6.71203H2.93479L2.12543 7.30002C1.99934 7.51037 1.8784 7.72406 1.7625 7.94092L2.14898 9.13043L1.42793 8.60654C1.24869 8.98629 1.08475 9.37459 0.937383 9.77098L1.36318 11.0816H2.93479L1.6633 12.0053L2.14898 13.5L0.877559 12.5763L0.115957 13.1296C0.0397266 13.7424 0 14.3665 0 15H15C15 6.71578 15 5.73914 15 0C12.0368 0 9.27451 0.85957 6.94828 2.34246V2.34246ZM7.52941 13.5L6.25799 12.5763L4.98656 13.5L5.47225 12.0053L4.20076 11.0816H5.77236L6.25799 9.58693L6.74361 11.0816H8.31521L7.04373 12.0053L7.52941 13.5ZM7.04373 7.63576L7.52941 9.13043L6.25799 8.2067L4.98656 9.13043L5.47225 7.63576L4.20076 6.71203H5.77236L6.25799 5.21736L6.74361 6.71203H8.31521L7.04373 7.63576ZM12.9098 13.5L11.6384 12.5763L10.367 13.5L10.8527 12.0053L9.58119 11.0816H11.1528L11.6384 9.58693L12.124 11.0816H13.6956L12.4242 12.0053L12.9098 13.5ZM12.4242 7.63576L12.9098 9.13043L11.6384 8.2067L10.367 9.13043L10.8527 7.63576L9.58119 6.71203H11.1528L11.6384 5.21736L12.124 6.71203H13.6956L12.4242 7.63576ZM12.4242 3.26619L12.9098 4.76086L11.6384 3.83713L10.367 4.76086L10.8527 3.26619L9.58119 2.34246H11.1528L11.6384 0.847793L12.124 2.34246H13.6956L12.4242 3.26619Z" fill="#0052B4" />
                <defs>
                    <clipPath id="clip0_703_1672">
                        <rect fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </Icon>
    );
};

export default IconFlagUsa;
