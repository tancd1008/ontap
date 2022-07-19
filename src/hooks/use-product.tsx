import useSWR from "swr";
import { add, removeItem } from "../api/product";
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
    return {
        data,
        error,
        mutate,
        remove
    }
}
export default useProduct