"use client";

import Input from "@/components/Input/Input";
import { useState } from "react";
import logo from "@/assets/logo.svg";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import Image from "next/image";

export default function Home() {
	const [searchValue, setSearchValue] = useState("");
	const router = useRouter();

	const onSubmit = () => {
		router.push(`/search?term=${searchValue.trim()}`);
	};
	return (
		<div className="flex flex-col w-full h-screen bg-gradient-to-b from-top-gradient to-bottom-gradient py-[26px] px-[30px]">
			<div className="flex-grow flex justify-center items-center">
				<Image src={logo} alt="logo" width={73} height={85} />
			</div>
			<Input
				onKeyDown={(e) => {
					if (e.code === "Enter") {
						onSubmit();
					}
				}}
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e?.currentTarget?.value);
				}}
				customClassName="mb-[15px]"
				placeholder="Artist / Album / Title"
			/>
			<Button onClick={onSubmit} type="whiteTransparent">
				Search
			</Button>
		</div>
	);
}
