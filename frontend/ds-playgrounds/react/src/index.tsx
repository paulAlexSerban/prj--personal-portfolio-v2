import React from 'react';
import ReactDOM from 'react-dom';

import { Paragraph, Heading } from '@prj--personal-portfolio-v2/react-cmp-lib/lib/index';
import '@prj--personal-portfolio-v2/ds-lsg-styles/lib/system/pages/main.css';
import '@prj--personal-portfolio-v2/ds-lsg-styles/lib/components/atoms/paragraph.css';
import '@prj--personal-portfolio-v2/ds-lsg-styles/lib/components/atoms/heading.css';

ReactDOM.render(
    <div>
        <div>
            <Heading level={1} title="Heading Level 1" subtitle="With subtitle" align="left" />
            <Heading level={2} title="Heading Level 2" subtitle="With subtitle" align="left" />
            <Heading level={3} title="Heading Level 3" subtitle="With subtitle" align="left" />
            <Heading level={4} title="Heading Level 4" align="left" />
            <Heading level={5} title="Heading Level 5" align="left" />
            <Heading level={6} title="Heading Level 6" align="left" />
        </div>
        <div>
            <Paragraph size="xs">
                Paragraph - XSMALL - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
            </Paragraph>
            <Paragraph size="sm">
                Paragraph - SMALL - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
            </Paragraph>
            <Paragraph size="base">
                Paragraph - BASE - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
            </Paragraph>
            <Paragraph size="lg">
                Paragraph - LARGE - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
            </Paragraph>
            <Paragraph size="xl">
                Paragraph - XLARGE - Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?
            </Paragraph>
        </div>
    </div>,
    document.querySelector('#root')
);
