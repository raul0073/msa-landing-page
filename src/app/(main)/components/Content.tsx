import { Button } from "@/components/ui/button";
import { Fragment } from "react";
import { homeLabels } from "./homeLabels";

function ServicesContent() {
	return (
		<Fragment>
			<div className="content-bottom text-center pt-[7rem] lg:pt-[8rem] pb-12 h-fit bg-white">
				<h3 className="text-black text-pretty w-[90%] mx-auto">
					{homeLabels.content.header}
					<br />
					{homeLabels.content.subHeader}
				</h3>
				<h4 className="text-muted-foreground pt-4 text-pretty">
					{homeLabels.content.unleash}
				</h4>
				<Button
					className="w-inherit p-6 font-semibold rounded-full my-12"
					variant={"outline"}>
					{homeLabels.content.btn_more}
				</Button>
			</div>
		</Fragment>
	);
}

export default ServicesContent;
