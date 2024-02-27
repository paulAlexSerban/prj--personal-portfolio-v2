import React from 'react';

import { createRoot } from 'react-dom/client';
import { Paragraph } from '@prj--personal-portfolio-v2/react-cmp-lib/lib/index';

import '@prj--personal-portfolio-v2/ds-lsg-styles/lib/system/pages/main.css';
// import paragraphStyles from '@prj--personal-portfolio-v2/ds-lsg-styles/lib/components/atoms/paragraph.module.css';

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
    <>
        <h2>Typography</h2>
        <h3>Paragraph Sizes</h3>
        <Paragraph styles={paragraphStyles} size="xs">
            This paragraph is XS - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
        </Paragraph>
        <Paragraph styles={paragraphStyles} size="sm">
            This Paragraph is SM - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
        </Paragraph>
        <Paragraph styles={paragraphStyles} size="base">
            This Paragraph is Base - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
        </Paragraph>
        <Paragraph styles={paragraphStyles} size="lg">
            This Paragraph is LG - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
        </Paragraph>
        <Paragraph styles={paragraphStyles} size="xl">
            This Paragraph is XL - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
        </Paragraph>

        <h3>Typography Styles</h3>

        <Paragraph styles={paragraphStyles} size="base" weight="light">
            This Paragraph is light - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
        </Paragraph>

        <Paragraph styles={paragraphStyles} size="base" weight="normal">
            This Paragraph is regular - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
        </Paragraph>

        <Paragraph styles={paragraphStyles} size="base" weight="bold">
            This Paragraph is bold - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
        </Paragraph>

        <Paragraph styles={paragraphStyles} size="base" weight="black">
            This Paragraph is black - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
        </Paragraph>
    </>
);
