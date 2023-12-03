import ArrowRightIcon from "../../assets/icons/ArrowRightIcon"


const LinkButton = ({children}) => {
  return (
    <a className="flex items-center gap-2  rounded cursor-pointer text-blue-500 hover:underline underline-offset-1">
    {children}
    <span>
      <ArrowRightIcon className='h-4 w-4'/>
    </span>
    </a>
  )
}

export default LinkButton
