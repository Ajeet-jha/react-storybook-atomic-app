import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { IconType } from 'react-icons';

export type IconAtomProps = {
	color?: string;
	size?: number | string;
	title?: string;
	component: ReactNode | IconType;
	className?: string;
	style?: React.CSSProperties;
};

const IconAtom: React.FC<IconAtomProps> = ({
	color,
	size,
	title,
	component,
	className,
	style,
}) => {
	const Component = component as keyof JSX.IntrinsicElements;

	return (
		<Component
			color={color}
			size={size as number}
			title={title}
			className={` ${className}`}
			style={style}
		/>
	);
};

IconAtom.propTypes = {
	color: PropTypes.string,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	title: PropTypes.string,
	component: PropTypes.node.isRequired,
	className: PropTypes.string,
	style: PropTypes.object,
};

IconAtom.defaultProps = {};

export default IconAtom;
