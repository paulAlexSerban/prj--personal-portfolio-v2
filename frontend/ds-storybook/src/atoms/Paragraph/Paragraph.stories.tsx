import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from '@prj--personal-portfolio-v2/react-cmp-lib/lib';
import '@prj--personal-portfolio-v2/ds-lsg-styles/lib/components/atoms/paragraph.css';

const meta = {
    title: 'Atoms/Paragraph',
    component: Paragraph,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: ['xs', 'sm', 'base', 'lg', 'xl'],
        },
        children: {
            control: {
                type: 'text',
            },
        },
    },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'base',
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, accusantium?',
    },
};
