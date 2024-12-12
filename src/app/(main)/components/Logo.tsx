import Image from "next/image";
import logo from './../../../../public/images/RML_orange_bars.png';
import { cn } from "@/lib/utils";

function Logo({className}: {className: string}) {
  return (
   <div className="flex flex-col items-center p-2">
    <Image
    src={logo}
    alt="logo"
    width={500}
    height={500}
    className={cn(className)}
    />
   </div>
  )
}

export default Logo