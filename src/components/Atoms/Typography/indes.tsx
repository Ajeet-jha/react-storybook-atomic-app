import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

export type TypographyAtomProps = {
	variant: string;
	component: string;
	className?: string;
	style?: React.CSSProperties;
	children: ReactNode;
};

const TypographyAtom: React.FC<TypographyAtomProps> = ({
	variant,
	component,
	className,
	style,
	children,
}) => {
	const Component = component as keyof JSX.IntrinsicElements;

	const variantMapping: { [key: string]: string } = {
		heading: 'text-4xl font-bold',
		paragraph: 'text-base',
		link: 'text-blue-500 underline',
		// Add more variant mappings as needed
	};

	const variantClass = variantMapping[variant] || '';

	return (
		<Component className={`${variantClass} ${className}`} style={style}>
			{children}
		</Component>
	);
};

TypographyAtom.propTypes = {
	variant: PropTypes.string.isRequired,
	component: PropTypes.string.isRequired,
	className: PropTypes.string,
	style: PropTypes.object,
	children: PropTypes.node.isRequired,
};

TypographyAtom.defaultProps = {
	className: '',
	style: {},
};

export default TypographyAtom;
