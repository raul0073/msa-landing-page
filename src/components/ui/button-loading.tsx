import { Loader2 } from "lucide-react";
import { ReactElement, useEffect, useState } from "react";
import { Button } from "./button";
function ButtonWithLoader({
	label,
	loading,
	className,
	icon,
}: {
	label: string;
	loading: boolean;
	className: string;
	icon?: ReactElement;
}) {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	useEffect(() => {
		if (loading) {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}, [loading, setIsLoading]);
	return (
		<Button disabled={isLoading} type="submit" className={`${className}`}>
			{icon} {isLoading ? <Loader2 className="animate-spin" /> : label}
		</Button>
	);
}

export default ButtonWithLoader;
