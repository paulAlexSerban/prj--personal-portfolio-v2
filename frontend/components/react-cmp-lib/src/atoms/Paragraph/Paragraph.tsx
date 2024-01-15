import React, { type FC, type HTMLAttributes, type ReactNode } from 'react';
import { fontSize } from '@prj--personal-portfolio-v2/shared-foundation';

export type ParagraphProps = {
    size?: keyof typeof fontSize;
    children: ReactNode;
} & HTMLAttributes<HTMLParagraphElement>;

const Paragraph: FC<ParagraphProps> = ({ size = fontSize.base, children, ...props }) => {
    const className = `paragraph paragraph--${size}`;
    return (
        <p data-testid="Paragraph" className={className} {...props}>
            {children}
        </p>
    );
};

export default Paragraph;
