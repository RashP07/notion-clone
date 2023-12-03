

const PrimaryButton = ({children}) => {
  return (
    <button className="flex  items-center gap-1.5 bg-gray-900 hover:bg-gray-800 focus-visible:bg-gray-800 p-1.5 px-3 rounded font-medium text-white">{children}</button>
  )
}

export default PrimaryButton
