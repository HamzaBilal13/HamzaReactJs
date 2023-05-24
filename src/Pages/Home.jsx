import React, { useState } from 'react'
import Products from '../Component/Navbar/Products';
import props from '../Props/Props';
// import {myImage} from '../../public/img/product.png'
import Search from 'antd/es/transfer/search';

const Home = () => {
  const [show, setshow] = useState(false);
  const [pshow, pSetShow] = useState(true);
  return (
    <div className="grid grid-rows-1 items-center justify-center mt-3">

      <div className="mx-auto mb-4">
      <div className="flex  items-center justify-center mb-1 z-[2]">
          <Search />
        </div>

        <div className="flex  items-center justify-center">
          <button className="bg-blue-600 px-8 py-2 rounded text-white" onClick={() => pSetShow(!pshow)}>Products</button>
        </div>
       

      </div>
      {pshow &&
        <div className="grid grid-cols-3 gap-5">

          {

            props.map(props => (
              <Products

                key={props.id}
                name={props.name}
                image={props.image}
                price={props.price}
                totalSales={props.totalSales}
                timeLeft={props.timeLeft}

              />
            ))}
        </div>
      }
    </div>



  )
}
export default Home
