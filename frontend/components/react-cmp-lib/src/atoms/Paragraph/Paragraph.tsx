import React, { type FC, type HTMLAttributes, type ReactNode } from 'react';
import { fontSize } from '@prj--personal-portfolio-v2/shared-foundation';

export type ParagraphProps = {
    size?: keyof typeof fontSize;
    children: ReactNode;
    styles?: {
        [key: string]: string;
    };
} & HTMLAttributes<HTMLParagraphElement>;

const Paragraph: FC<ParagraphProps> = ({ size = fontSize.base, styles, children, ...props }) => {
    const className = styles && [styles?.paragraph, styles?.[`paragraph--${size}`]].join(' ');
    return (
        <p data-testid="Paragraph" className={className} {...props}>
            {children}
        </p>
    );
};

export default Paragraph;
