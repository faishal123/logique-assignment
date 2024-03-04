"use client";

import TopBar from "@/components/TopBar/TopBar";
import { useEffect, useState, Suspense } from "react";
import Button from "@/components/Button/Button";
import SearchModal from "@/components/SearchModal/SearchModal";
import SingleItem from "@/components/SingleItem/SingleItem";
import LoaderSpinner from "@/components/LoaderSpinner/LoaderSpinner";
import { useSearchParams, useRouter } from "next/navigation";

const limit = 4;

const buildSearchUrl = (searchTerm: string, offset: number) => {
	return `https://itunes.apple.com/search?limit=${limit}&offset=${offset}&term=${encodeURI(
		searchTerm,
	)}`;
};

export type SingleResultType = {
	wrapperType: "track" | "collection" | "artist";
	kind:
		| "book"
		| "album"
		| "coached-audio"
		| "feature-movie"
		| "interactive-booklet"
		| "music-video"
		| "pdf podcast"
		| "podcast-episode"
		| "software-package"
		| "song"
		| "tv-episode"
		| "artist";
	artistId: number;
	collectionId: number;
	trackId: number;
	artistName: string;
	collectionName: string;
	trackName: string;
	collectionCensoredName: string;
	trackCensoredName: string;
	artistViewUrl: string;
	collectionViewUrl: string;
	trackViewUrl: string;
	previewUrl: string;
	artworkUrl60: string;
	artworkUrl100: string;
	collectionPrice: number;
	trackPrice: number;
	collectionExplicitness: "explicit" | "cleaned" | "notExplicit";
	trackExplicitness: "explicit" | "cleaned" | "notExplicit";
	discCount: number;
	discNumber: number;
	trackCount: number;
	trackNumber: number;
	trackTimeMillis: number;
	country: string;
	currency: string;
	primaryGenreName: string;
};

type CompleteResultsType = {
	resultCount: number;
	results: SingleResultType[];
	isLoading: boolean;
};

const filterOutEmptyTrackname = (results: SingleResultType[]) => {
	return results.filter((item) => !!item.trackName);
};

const Search = () => {
	return (
		<Suspense>
			<SearchComponent />
		</Suspense>
	);
};

const SearchComponent = () => {
	const [renderSearchModal, setRenderSearchModal] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);
	const [offset, setOffset] = useState<number>(0);
	const [results, setResults] = useState<CompleteResultsType>({
		resultCount: 0,
		results: [],
		isLoading: true,
	});
	const searchParams = useSearchParams();
	const router = useRouter();
	const searchTerm = searchParams.get("term") || "";

	useEffect(() => {
		if (!renderSearchModal) {
			setOffset(0);
			setResults((prev) => ({ ...prev, resultCount: 0, results: [] }));
		}
	}, [renderSearchModal]);

	useEffect(() => {
		if (searchTerm) {
			setResults((prev) => ({ ...prev, isLoading: true }));
			fetch(buildSearchUrl(searchTerm, offset)).then((res) => {
				res.json().then((resJson: CompleteResultsType) => {
					setResults((prev) => ({
						...resJson,
						resultCount: prev.resultCount + resJson.resultCount,
						results: filterOutEmptyTrackname([...prev.results, ...resJson.results]),
						isLoading: false,
					}));
					setButtonLoading(false);
				});
			});
		} else {
			router.push("/");
		}
	}, [searchTerm, offset]);
	const goToHome = () => {
		router.push("/");
	};

	const noResult = results.results.length <= 0;

	return (
		<>
			{renderSearchModal && (
				<SearchModal
					onClose={() => {
						setRenderSearchModal((prev) => !prev);
					}}
				/>
			)}
			<div className="bg-[#f8fafc] h-screen overflow-auto pb-[25px]">
				<TopBar
					onClickHamburger={goToHome}
					onClickLogo={goToHome}
					onClickSearch={() => {
						setRenderSearchModal((prev) => !prev);
					}}
				/>
				{results.isLoading && !buttonLoading ? (
					<div className="w-full mt-[50%] flex justify-center items-center">
						<LoaderSpinner />
					</div>
				) : noResult ? (
					<div className="px-[15px] text-center break-words pt-[50%]">
						<span className="text-[14px] text-[##334155]">There is no result for:</span>{" "}
						<span className="text-[#7b34dd] text-[18px] font-bold">{searchTerm}</span>
					</div>
				) : (
					<div className="flex flex-col justify-between h-[calc(100% - 60px)])">
						<div>
							<div className="w-full text-center px-[15px] mt-[39px] mb-[36px]">
								<span className="text-[14px] text-[#334155]">Search result for:</span>{" "}
								<span className="text-[#7b34dd] text-[18px] font-bold">{searchTerm}</span>
							</div>
							<div className="flex flex-col gap-5 px-[15px]">
								{results.results?.map((item) => {
									return (
										<SingleItem
											key={`${item.artistId}-${item.trackId}-${item.collectionId}`}
											item={item}
										/>
									);
								})}
							</div>
						</div>
						<div className="mt-5 px-[30%]">
							{buttonLoading ? (
								<div className="w-full flex justify-center">
									<LoaderSpinner />
								</div>
							) : (
								<Button
									type="grey"
									onClick={() => {
										setButtonLoading(true);
										setOffset((prev) => prev + limit);
									}}
								>
									Load More
								</Button>
							)}
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Search;
