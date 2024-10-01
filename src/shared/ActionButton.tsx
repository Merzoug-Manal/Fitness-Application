import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";


type Props = {
    children:React.ReactNode;
    setSelectedPage:(value:SelectedPage)=>void;
};

function ActionButton({children,setSelectedPage}:Props) {
  return (
    <AnchorLink
    className="rounded-md bg-blue text-white px-8 py-2 hover:bg-pink3 hover:text-blue font-bold "
    onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    >
        {children} 
    </AnchorLink>
  )
}

export default ActionButton
