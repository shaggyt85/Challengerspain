import useInitialState from "../../hooks/useInitialState"
const CustomButtom = () => {
   const  {handleRefresh} = useInitialState()
  return (
    <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
        <div className='flex justify-between text-base font-medium text-gray-800'>
          <button type='button' onClick={handleRefresh} className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'>Refresh</button>
        </div>
      </div>
  )
}

export default CustomButtom