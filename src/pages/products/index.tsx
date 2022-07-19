import React from 'react'
import useProduct from '../../hooks/use-product';



const Products = () => {
    const {data, error} = useProduct();
  if (!data) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  console.log(data);
  return (
    <div>Products</div>
  )
}

export default Products