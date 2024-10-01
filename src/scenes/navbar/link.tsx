import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props={
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage :(value:SelectedPage)=>void
}

export default function link({page,selectedPage,setSelectedPage}: Props) {
    const lowerCasePage= page.toLowerCase().replace(/ /g, "") as SelectedPage ;
  return (
    <AnchorLink
    className={`${selectedPage===lowerCasePage ?"text-pink": ""} 
     transition duration-500 hover:text-pink `}
    href={`#${lowerCasePage}`}
    onClick={()=>setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}
 