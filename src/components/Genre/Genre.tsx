type GenrePropTypes = {
	genre: string;
};

const Genre: React.FC<GenrePropTypes> = ({ genre }) => {
	return (
		<div className="text-[10px] text-white font-medium py-[5px] px-[13px] rounded-full bg-[#10b981]">
			{genre}
		</div>
	);
};

export default Genre;
