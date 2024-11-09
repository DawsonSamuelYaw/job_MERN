const header = () => {
  return (
    <>
    <div className="main bg-black p-[2em] font-[poppins] text-white">
        <div className="flex space-x-[10px] justify-between">
            <div className="sub-1 py-2">
                <h1>JobHub</h1>
            </div>
            <div className="sub-2">
                <nav className='space-x-[15px] py-2'>
                    <a href="">Home</a>
                    <a href="">Jobs</a>
                    <a href="">Resume Builder</a>
                    <a href="">Compaines</a>
                    <a href="">About Us</a>
                </nav>
            </div>
            <div className="sub-3">
                <div className="btn space-x-[15px] flex items-center">
                    <a href="" className='hover:font-extrabold'>Sign in</a>
                    <div className="sub space-x-2">
                    <button className='px-5 bg-blue-700 py-2 rounded-[8px] hover:bg-blue-800'>Sign up</button>
                    <button className='px-5 bg-blue-700 py-2 rounded-[8px] hover:bg-blue-800'>Post Job</button>
                    </div>
                </div>
            </div>
        </div>

    </div>

    </>
  )
}
export default header