import { SingleResultType } from "@/app/search/page";
import Genre from "../Genre/Genre";
import Image from "next/image";
import Price from "../Price/Price";

type SingleItemPropTypes = {
	item: SingleResultType;
};

const SingleItem: React.FC<SingleItemPropTypes> = ({ item }) => {
	return (
		<div className="bg-white p-3 rounded-[10px] shadow-custom-2 flex gap-3">
			<div className="min-w-[100px] w-[100px] h-[100px] overflow-hidden rounded-lg">
				<Image alt={`${item.trackName}-cover`} src={item.artworkUrl100} width={100} height={100} />
			</div>
			<div className="grow flex flex-col justify-between">
				<div>
					<div className="text-[10px] font-medium">{item.artistName}</div>
					<div className="text-[14px] font-bold">{item.trackName}</div>
				</div>
				<div className="flex justify-between gap-[10px]">
					<Genre genre={item.primaryGenreName} />
					<Price price={item.trackPrice} />
				</div>
			</div>
		</div>
	);
};

export default SingleItem;
