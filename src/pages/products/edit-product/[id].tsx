/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useProduct from '../../../hooks/use-product'

type ProductProps = {
    product:any
  }

const editProduct = () => {
    const router = useRouter();
    const id = router.query.id
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const { data: products, error, create, readProduct, updateProduct } = useProduct();
    useEffect(() => {
		if (!id) return
		readProduct(id).then((res) => reset(res))
	}, [id])
    const onSubmit: SubmitHandler<any> = async (data) => {
		updateProduct(data)
	}
  return (
    <div>
        <form id='form-edit' className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)} >
            <div className='mt-3'>
                <input type="text" {...register('name', { required: true, minLength: 5 })}className='form-control' />
            </div>
            <button className='btn btn-success mt-3'>Thêm mới</button>
        </form>
    </div>
  )
}

export default editProduct