/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import useProduct from '../../hooks/use-product'

type InputType = {
	id: string
	name: string
}

const addProduct = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<InputType>();
    const { data: products, error, create } = useProduct()
    const onSubmit: SubmitHandler<InputType> = async (data) => {
		create(data)
	}
  return (
    <div>
        <form id='form-add' className='w-50 mx-auto' onSubmit={handleSubmit(onSubmit)} >
            <div className='mt-3'>
                <input type="text" {...register('name', { required: true, minLength: 5 })}className='form-control' />
            </div>
            <button className='btn btn-success mt-3'>Thêm mới</button>
        </form>
    </div>
  )
}

export default addProduct