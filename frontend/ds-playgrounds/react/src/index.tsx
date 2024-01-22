import React from 'react';

import { createRoot } from 'react-dom/client';
import { Paragraph } from '@prj--personal-portfolio-v2/react-cmp-lib/lib/index';

import '@prj--personal-portfolio-v2/ds-lsg-styles/lib/system/pages/main.css';
import paragraphStyles from '@prj--personal-portfolio-v2/ds-lsg-styles/lib/components/atoms/paragraph.module.css';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
    <>
        <Paragraph styles={paragraphStyles} size="lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
        </Paragraph>
    </>
);
