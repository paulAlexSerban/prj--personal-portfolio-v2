import React, { type FC, type HTMLAttributes, type ReactNode } from 'react';
import { fontSize, fontWeight } from '@prj--personal-portfolio-v2/shared-foundation';

export type ParagraphProps = {
    size?: keyof typeof fontSize;
    weight?: keyof typeof fontWeight;
    children: ReactNode;
    styles?: {
        [key: string]: string;
    };
} & HTMLAttributes<HTMLParagraphElement>;

const Paragraph: FC<ParagraphProps> = ({ size = fontSize.base, weight, styles, children, ...props }) => {
    const classNameArr = styles && [styles?.paragraph, size, weight];

    const className = classNameArr?.join(' ');
    return (
        <p data-testid="Paragraph" className={className} {...props}>
            {children}
        </p>
    );
};

export default Paragraph;
