"use client";
import { HTMLProps, ReactNode } from "react";
import styles from "./Input.module.css";

interface InputPropTypes extends HTMLProps<HTMLInputElement> {
	customClassName?: string;
}

const Input: React.FC<InputPropTypes> = ({
	placeholder,
	customClassName,
	value,
	onChange,
	onKeyDown,
}) => {
	return (
		<input
			onKeyDown={onKeyDown}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={`${styles.input} py-[13px] rounded-full outline-none px-8 border-none text-center ${customClassName}`}
		/>
	);
};

export default Input;
