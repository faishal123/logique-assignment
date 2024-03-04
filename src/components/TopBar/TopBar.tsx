import logoText from "@/assets/ngmusic.svg";
import hamburger from "@/assets/menu.svg";
import search from "@/assets/search.svg";
import Image from "next/image";

type TopBarPropTypes = {
	onClickHamburger: () => void;
	onClickLogo: () => void;
	onClickSearch: () => void;
};

const TopBar: React.FC<TopBarPropTypes> = ({ onClickHamburger, onClickLogo, onClickSearch }) => {
	return (
		<div className="shadow-custom-1 bg-gradient-to-r from-top-gradient to-bottom-gradient flex justify-between items-start h-[60px] pt-[18px] px-[15px]">
			<Image
				onClick={onClickHamburger}
				className="cursor-pointer"
				src={hamburger}
				width={14}
				height={11.5}
				alt="menu"
			/>
			<Image onClick={onClickLogo} src={logoText} width={72.2} height={15.8} alt="menu" />
			<Image
				onClick={onClickSearch}
				className="cursor-pointer"
				src={search}
				width={14}
				height={14}
				alt="menu"
			/>
		</div>
	);
};

export default TopBar;
