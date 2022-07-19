import useSWR from "swr";
import { add, read, removeItem, update } from "../api/product";
const useProduct = () => {
    const {data,error, mutate} = useSWR("/products");
    const create = async (item: any) => {
        const product = await add(item)
        mutate([...data,product])
    }
    const remove = async (id: any) => {
        await removeItem(id);
        const newProducts = data.filter((item: any) => item.id != id);
        mutate(newProducts)
    }
    const readProduct = async (id: any) => {
        return await read(id);
    }
    const updateProduct = async (id:any) => {
		await update(id)
		mutate(data.find((item:any) => (item.id === data.id ? item : data.id)))
	}
    return {
        data,
        error,
        mutate,
        create,
        remove,
        readProduct,
        updateProduct
    }
}
export default useProduct