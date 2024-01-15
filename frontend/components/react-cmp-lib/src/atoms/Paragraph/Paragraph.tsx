import React from 'react';
import { fontSize } from '@prj--personal-portfolio-v2/shared-foundation';

export interface ParagraphProps {
    size?: keyof typeof fontSize;
    children: React.ReactNode;
}
const Paragraph: React.FC<ParagraphProps> = ({ size = fontSize.base, children }) => {
    const className = `paragraph paragraph--${size}`;
    return (
        <p data-testid="Paragraph" className={className}>
            {children}
        </p>
    );
};

export default Paragraph;
