import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useProduct from '../hooks/use-product'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const {data:products, error,remove} = useProduct();
  if (!products) return <div>Loading...</div>;
  if (error) return <div>error</div>;
  
  return (
    <div className={styles.container}>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any,index: any) => (
            <tr key={index}>
              <td>{index +1}</td>
              <td>{product.name}</td>
              <td>
                <button className='btn btn-danger' onClick={() => remove(product.id)} >Delete</button>
              </td>
              <td>
                <a href={`/products/edit-product/${product.id}`} className='btn btn-warning'>Edit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href='products/add-product' className='btn btn-success'>Create</a>

    </div>
  )
}

export default Home
