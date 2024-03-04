import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { useRouter } from "next/navigation";

type SearchModalProps = {
	onClose: () => void;
};

const SearchModal: React.FC<SearchModalProps> = ({ onClose }) => {
	const [searchValue, setSearchValue] = useState("");
	const router = useRouter();

	const onSubmit = () => {
		router.push(`/search?term=${searchValue.trim()}`);
		onClose();
	};
	return (
		<div className="absolute top-0 left-0 h-screen w-[100%] max-w-mobile bg-modalBackground flex flex-col justify-center items-center px-[30px]">
			<div className="text-[20px] text-white font-bold mb-[30px]">Search</div>
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
			<Button onClick={onSubmit} type="primary">
				Search
			</Button>
		</div>
	);
};

export default SearchModal;
