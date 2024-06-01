import {Button, Icon, Layout, Text} from '@ui-kitten/components'
import {useAuthStore} from '../../store/auth/useAuthStore'
import {getProductsByPage} from '../../../actions/products/get-products-by-page'
import {useQuery} from '@tanstack/react-query'
import {MainLayout} from '../../layouts/MainLayout'
import {FullScreenLoader} from '../../components/ui/FullScreenLoader'
import {ProductsList} from '../../components/products/ProductsList'

export const HomeScreen = () => {
    const {logout} = useAuthStore()
    const {isLoading, data: products = []} = useQuery({
        queryKey: ['products', 'infinite'],
        staleTime: 1000 * 60 * 60, // 1 hour
        queryFn: () => getProductsByPage(0),
    })

    console.log(isLoading, products)

    return (
        <MainLayout
            title="TesloShop - Products"
            subTitle="Aplicación administrativa">
            {isLoading ? <FullScreenLoader /> : <ProductsList products={products} />}
        </MainLayout>
    )
}
