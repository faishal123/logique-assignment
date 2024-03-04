import { HTMLProps } from "react";

type ButtonTypeTypes = "primary" | "grey" | "whiteTransparent";

interface ButtonPropTypes extends HTMLProps<HTMLButtonElement> {
	type?: ButtonTypeTypes;
	customClassName?: string;
}

const buttonTypeClasses: Record<ButtonTypeTypes, string> = {
	primary: "text-white bg-gradient-to-r from-top-gradient to-bottom-gradient",
	grey: "bg-[#e2e8f0] text-[#64748b] text-[12px]",
	whiteTransparent: "bg-white/[.2] text-white text-[14px]",
};

const Button: React.FC<ButtonPropTypes> = ({
	children,
	type = "primary",
	customClassName,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			className={`w-full block py-[13px] rounded-full font-medium ${buttonTypeClasses[type]} ${customClassName}`}
		>
			{children}
		</button>
	);
};

export default Button;
