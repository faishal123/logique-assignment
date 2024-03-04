import { ReactNode } from "react";

type MobileLayoutPropTypes = {
	children: ReactNode;
};

const MobileLayout: React.FC<MobileLayoutPropTypes> = ({ children }) => {
	return (
		<div className="flex justify-center">
			<div className="relative max-w-mobile w-full">{children}</div>
		</div>
	);
};
export default MobileLayout;
