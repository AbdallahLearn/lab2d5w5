import React from 'react'

function Second() {
  return (
    <>
      <div className="container-second">
        <h2 className='text-center text-6xl mt-5 w-[60%] m-auto'>Here are some of the bennfits of your offer</h2>
        <p className='text-center w-[60%] m-auto mt-10' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore magnam pariatur ipsam fugiat? Recusandae soluta sed adipisci enim id aut molestiae alias libero! Voluptatem ullam molestiae omnis nostrum, repellat quo.</p>
            <div className="container-ul items-center flex flex-col sm:flex-row justify-around  mt-10">
            <ul className='text-center w-60'>
                <li className='flex justify-center'><img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png" alt="" /></li>
                <li>benefit 1</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore magnam</li>
            </ul>
            <ul className='text-center w-60'>
                <li className='flex justify-center'><img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png" alt="" /></li>
                <li>benefit 1</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore magnam</li>
            </ul>
            <ul className='text-center w-60'>
                <li className='flex justify-center'><img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png" alt="" /></li>
                <li>benefit 1</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore magnam</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Second
