import React from 'react';
import { FC } from 'react';

import Paragraph from '../../atoms/Paragraph';
// import '@prj--personal-portfolio-v2/ds-lsg-styles/lib/components/atoms/paragraph.module.css';

export type GenericProps = {};

const Generic: FC<GenericProps> = () => {
    return (
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
    );
};

export default Generic;
