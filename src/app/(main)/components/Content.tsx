import { Fragment } from "react";
import { homeLabels } from "./homeLabels";

function ServicesContent() {
	return (
		<Fragment>
			<div className="content-bottom m-4 w-[90%] md:w-[60%] mx-auto pt-[5rem] md:pt-[10rem] text-center">
				<h3 className="text-black text-pretty">
					{homeLabels.content.header}
					<br />
					{homeLabels.content.subHeader}
				</h3>
				<h4 className="text-muted-foreground pt-4 text-pretty">
					{homeLabels.content.unleash}
				</h4>
			</div>
		</Fragment>
	);
}

export default ServicesContent;
