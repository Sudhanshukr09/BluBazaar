import React, { useEffect } from "react";
import Layout from "./../Layout/Layout";
import axios, { all } from "axios";
import { useState } from "react";

const Allproduct = () => {
  const [items, setitems] = useState([]);
  const [heading, setheading] = useState([]);
  const [selectProduct, setselectProduct] = useState()
  const [allproduct, setallproduct] = useState(false)
  
  const filterProduct = (allproduct) =>{
    setselectProduct(allproduct)
    setallproduct(true)
  }
  useEffect(()=>{
    const product = async   ()=>{
      if (product) {
        const res = await axios(`https://dummyjson.com/products/category/${selectProduct}`)        
        setitems(res.data.products)
      }
    }
    product();
  }, [selectProduct])
  useEffect(()=>{
    const productHeading = async ()=>{
        const headingList = await axios('https://dummyjson.com/products/categories')
        setheading(headingList.data)
    }
    productHeading();
  }, [])
  useEffect(() => {
    const allproduct = async () => {
      const all = await axios('https://dummyjson.com/products')
      setallproduct(all.data.products)
      console.log(all.data.products)
    }
    allproduct();
  }, [])
  

  return (
    <>
      <Layout>
        <>
        <div>
          <div>
            <select className="border-2 px-2" onChange={(e)=> filterProduct(e.target.value)}>
              <option>Filter by category</option>
                          
            
          {
            heading.filter((filterItem)=> !['lighting', 'motorcycle', 'furniture', 'automotive'].includes(filterItem)).map((allproduct) => (
              <option>{allproduct}</option>
            ))}
          </select>
          </div>
        </div>
        
       
        <div className="flex flex-wrap m-4">
          {items.map((item, index) => (            
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2" key={index}>
              <a className="block relative h-48 rounded overflow-hidden">
             <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.thumbnail} />
             </a>              
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Title - {item.title}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Price- {item.price}0</h2>
            <h2 className="text-gray-900 title-font text-lg font-medium">Rating- {item.rating}⭐</h2>              
            </div>
          ))}
        </div>
        {
        allproduct?
         <div className="flex flex-wrap m-4">
          {setallproduct.map((p, i) => (            
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full border-2" key={i}>
              <a className="block relative h-48 rounded overflow-hidden">
             <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={p.thumbnail} />
             </a>              
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Title - {p.title}</h3>
            <h2 className="text-gray-900 title-font text-lg font-medium">Price- {p.price}0</h2>
            <h2 className="text-gray-900 title-font text-lg font-medium">Rating- {p.rating}⭐</h2>              
            </div>
          ))}
        </div>:''
}
        </>
      </Layout>
    </>
  );
};

export default Allproduct;
