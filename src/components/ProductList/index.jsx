
import useInitialState from '../../hooks/useInitialState'
import CustomButtom from '../CustomButtom'

const ProductList = () => {
  const { products } = useInitialState()
  const data = products || []
  const list = data.map(product => {
    return (
      <div key={product.id}>
        <h3 className='text-sm text-gray-700'>Product Title: {product.title}</h3>
        <p className='text-sm font-medium text-gray-900'>Product Price: {product.price}</p>
        <div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>

          <img className='h-full w-full object-cover object-center lg:h-full lg:w-full' src={product.images} alt={product.title} />
        </div>
      </div>
    )
  }
  )
  return (
    <>
      <CustomButtom />
      <div className='bg-white'>
        <div className='"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"'>
          <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {list}
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductList