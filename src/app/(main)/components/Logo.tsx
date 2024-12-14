import Image from "next/image";
import logo from './../../../../public/images/RML_orange_bars.png';
import logo3 from './../../../../public/images/rml_v2.png';
import { cn } from "@/lib/utils";

function Logo({className, alternative}: {className: string, alternative?: boolean}) {
  return (
   <div className="flex flex-col items-center p-2">
    <Image
    src={alternative ? logo3 : logo}
    alt="Render Metrics Labs Logo"
    width={500}
    height={500}
    className={cn(className)}
    />
   </div>
  )
}

export default Logo