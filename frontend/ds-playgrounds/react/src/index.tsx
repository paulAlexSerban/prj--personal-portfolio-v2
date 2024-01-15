import React from 'react';
import ReactDOM from 'react-dom';

import { Paragraph } from '@prj--personal-portfolio-v2/react-cmp-lib/lib/index';
import '@prj--personal-portfolio-v2/ds-lsg-styles/lib/components/atoms/paragraph.module.css';

ReactDOM.render(
    <div>
        <Paragraph size="xs">
            Paragraph - XSMALL - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
        </Paragraph>
    </div>,
    document.querySelector('#root')
);
