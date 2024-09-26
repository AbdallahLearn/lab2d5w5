import React from 'react'

function Header() {
  return (
    <>
      <div className="container-img flex justify-start items-center  relative bg-cover bg-center h-screen w-screen text-white" style={{backgroundImage :'url(https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2)' }}>
            <div className="text-container ml-10 max-w-md ">
                <h3 className='text-4xl '>FreashGoods</h3>
                <h1 className='text-5xl  pt-10'>Concisely desscribe your product or Service</h1>
                <p className=' pt-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error aut nisi accusamus. Velit voluptates necessitatibus dolor, error quasi sunt dignissimos eaque corporis! Sint eveniet deleniti, hic deserunt velit ipsa ut?</p>
                <button className='bg-amber-400 text-black ps-5 pe-5 p-1 text-center rounded-[1px] mt-5'>Order now</button>
            </div>  
      </div>
    </>
  )
}

export default Header
