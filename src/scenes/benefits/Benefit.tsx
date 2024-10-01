import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
icon:JSX.Element;
title:string;
description:string;
setSelectedPage:(value:SelectedPage) => void;
}
function Benefit({icon,title,description,setSelectedPage}:Props) {
  return (
    <div className="mt-5 rounded-md border-2 border-gray-200 px-5 py-16 text-center">
        <div className='md-4 flex justify-center '>
            <div className='rounded-full border-2 border-gray-100 bg-pink2 p-4'>
               {icon} 
            </div>
        </div>
      <h4 className="font-bold">{title}</h4>
      <p className="mt-4 font-light ">{description}</p>
      <AnchorLink
              className="text-sm font-bold  underline hover:text-blue text-pink"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
    </div>
  )
}

export default Benefit
