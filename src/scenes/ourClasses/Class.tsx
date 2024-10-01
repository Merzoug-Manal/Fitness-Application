
type Props ={
    name:string;
    description?:string;
    image:string;
}



function Class({name,description,image}:Props) {
    const overlayStyles = `p-5 absolute z-30 flex
    h-[300px] w-[400px] flex-col items-center justify-center
    whitespace-normal bg-pink text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;
  

  return (
    <li className="relative ms-5 inline-block h-[380px] w-[450px]" >
        <div className={overlayStyles}>
            <p className="text-2xl font-bold">{name}</p>
            <p className="mt-8">{description}</p>
        </div>
        <img className="h-[300px] w-[400px]" alt={`${image}`} src={image} />
    </li>
  )
}

export default Class
