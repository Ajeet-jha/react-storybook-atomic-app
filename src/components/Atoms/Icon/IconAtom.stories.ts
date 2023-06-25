import type { Meta, StoryObj } from '@storybook/react';
import { FaBeer } from 'react-icons/fa';

import IconAtom, { IconAtomProps } from './index';

const meta = {
	title: 'Components/Atom/Icon',
	component: IconAtom,
	tags: ['autodocs'],
} satisfies Meta<IconAtomProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		component: FaBeer,
		color: 'red',
		size: '2rem',
		title: 'React Icon',
	},
};
