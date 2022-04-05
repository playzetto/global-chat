import React from 'react';

import Icon, { SingleIconProps } from '../icon';

import './icon__github.scss';

const IconGithub = (props: SingleIconProps) => {
    return (
        <Icon ico="github" {...props}>
            <svg viewBox="0 0 30 30">
                <path d="M10.6746 28.1016C11.1012 27.918 11.4 27.4938 11.4 27V23.76C11.4 23.6418 11.4096 23.5188 11.4246 23.394C11.4162 23.3964 11.4084 23.3982 11.4 23.4C11.4 23.4 9.59995 23.4 9.23995 23.4C8.33995 23.4 7.55995 23.04 7.19995 22.32C6.77995 21.54 6.59995 20.22 5.51995 19.5C5.33995 19.38 5.45995 19.2 5.81995 19.2C6.17995 19.26 6.95995 19.74 7.43995 20.4C7.97995 21.06 8.51995 21.6 9.47995 21.6C10.9722 21.6 11.772 21.525 12.2532 21.267C12.8136 20.4336 13.5894 19.8 14.4 19.8V19.785C10.9992 19.6758 8.82655 18.5454 7.81495 16.8C5.61595 16.8252 3.70135 17.043 2.60875 17.2242C2.57395 17.028 2.54395 16.8306 2.51815 16.632C3.59635 16.4544 5.42395 16.2438 7.52515 16.2036C7.45795 16.038 7.39975 15.8682 7.35055 15.6942C5.24395 15.5874 3.42595 15.6708 2.43835 15.7524C2.42635 15.5532 2.41015 15.3546 2.40775 15.153C3.39715 15.072 5.16595 14.991 7.21855 15.0864C7.17115 14.7864 7.14055 14.4798 7.14055 14.1606C7.14055 13.1406 7.50055 12.0606 8.16055 11.1606C7.86055 10.1406 7.44055 7.9806 8.28055 7.2006C9.90055 7.2006 11.0406 7.9806 11.5806 8.4606C12.6 8.04 13.74 7.8 15 7.8C16.26 7.8 17.4 8.04 18.36 8.46C18.9 7.98 20.0399 7.2 21.6599 7.2C22.5599 8.04 22.0799 10.2 21.7799 11.16C22.4399 12.06 22.8 13.08 22.74 14.16C22.74 14.4504 22.713 14.7306 22.674 15.0054C24.7734 14.9022 26.5901 14.985 27.5963 15.0666C27.5951 15.2688 27.5766 15.4662 27.5658 15.666C26.5632 15.5832 24.7007 15.498 22.5503 15.6126C22.4969 15.8142 22.4321 16.0104 22.3553 16.2006C24.4829 16.2282 26.3543 16.434 27.4841 16.614C27.4583 16.8132 27.4283 17.0106 27.3935 17.2062C26.2463 17.0226 24.291 16.8078 22.0662 16.797C21.0672 18.5238 18.9342 19.65 15.6 19.7814V19.8C17.16 19.8 18.6 22.14 18.6 23.76V27C18.6 27.4938 18.8987 27.918 19.3253 28.1016C24.8219 26.2824 28.7999 21.0984 28.7999 15C28.7999 7.3908 22.6097 1.2 15 1.2C7.39015 1.2 1.19995 7.3908 1.19995 15C1.19995 21.0984 5.17795 26.2824 10.6746 28.1016Z" />
            </svg>
        </Icon>
    );
};

export default IconGithub;
