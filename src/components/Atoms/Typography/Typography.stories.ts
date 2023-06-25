import type { Meta, StoryObj } from '@storybook/react';

import TypographyAtom, { TypographyAtomProps } from './indes';

const meta = {
	title: 'Components/Atom/Typography',
	component: TypographyAtom,
	tags: ['autodocs'],
} satisfies Meta<TypographyAtomProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: 'heading',
		component: 'h1',
		className: 'text',
		children: 'Hello, World!',
	},
};
