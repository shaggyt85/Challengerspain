const Navbar = () => {
    return (
        <>
        <nav className='bg-gray-800'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between'>
                    <div className='absolute inset-y-0 left-0 flex items-center '>
                    </div>
                </div>
            </div>
            <div className="sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    <a className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" href='/'>Inicio</a>
                    <a className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" href='/products'>Productos</a>
                </div>
            </div>
        </nav>
        </>
      )
}

export default Navbar