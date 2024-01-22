import React from 'react';
import ReactDOM from 'react-dom';

import { Paragraph } from '@prj--personal-portfolio-v2/react-cmp-lib/lib/index';
import paragraphStyles from '@prj--personal-portfolio-v2/ds-lsg-styles/lib/components/atoms/paragraph.module.css';

ReactDOM.render(
    <>
        <Paragraph styles={paragraphStyles} size="lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
        </Paragraph>
    </>,
    document.querySelector('#root')
);
