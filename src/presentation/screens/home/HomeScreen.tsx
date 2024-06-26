import {useAuthStore} from '../../store/auth/useAuthStore'
import {getProductsByPage} from '../../../actions/products/get-products-by-page'
import {useInfiniteQuery} from '@tanstack/react-query'
import {MainLayout} from '../../layouts/MainLayout'
import {FullScreenLoader} from '../../components/ui/FullScreenLoader'
import {ProductsList} from '../../components/products/ProductsList'

export const HomeScreen = () => {
    const {logout} = useAuthStore()
    /* const {isLoading, data: products = []} = useQuery({
        queryKey: ['products', 'infinite'],
        staleTime: 1000 * 60 * 60, // 1 hour
        queryFn: () => getProductsByPage(0),
    }) */
    const {isLoading, data, fetchNextPage} = useInfiniteQuery({
        queryKey: ['products', 'infinite'],
        staleTime: 1000 * 60 * 60, // 1 hour
        initialPageParam: 0,
        queryFn: async params => {
            return await getProductsByPage(params.pageParam)
        },
        getNextPageParam: (lastPage, allPages) => allPages.length,
    })

    return (
        <MainLayout
            title="TesloShop - Products"
            subTitle="Aplicación administrativa">
            {isLoading ? (
                <FullScreenLoader />
            ) : (
                <ProductsList
                    products={data?.pages.flat() ?? []}
                    fetchNextPage={fetchNextPage}
                />
            )}
        </MainLayout>
    )
}
