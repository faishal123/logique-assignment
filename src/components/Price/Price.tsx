import currencyIcon from "@/assets/currency.svg";
import Image from "next/image";

type PricePropTypes = {
	price: number;
};

const Price: React.FC<PricePropTypes> = ({ price }) => {
	return (
		<div className="flex gap-[5px] items-center">
			<Image alt="price" src={currencyIcon} height={16} width={16} />
			<div className="text-[12px] font-bold text-[#f5b014]">{price}</div>
		</div>
	);
};

export default Price;
