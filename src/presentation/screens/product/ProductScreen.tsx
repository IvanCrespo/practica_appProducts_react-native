import {Text} from '@ui-kitten/components'
import {MainLayout} from '../../layouts/MainLayout'
import {useQuery} from '@tanstack/react-query'
import {StackScreenProps} from '@react-navigation/stack'
import {RootStackParams} from '../../navigation/StackNavigator'
import {getProductById} from '../../../actions/products/get-product-by-id'
import {useRef} from 'react'
import { ScrollView } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {}

export const ProductScreen = ({route}: Props) => {
    const productIdRef = useRef(route.params.productId)

    // useQuery
    const {data: product} = useQuery({
        queryKey: ['product', productIdRef.current],
        queryFn: () => getProductById(productIdRef.current),
    })

    // useMutation

    if (!product) {
        return <MainLayout title="Cargando..." />
    }

    return (
        <MainLayout title={product.title} subTitle={`Precio: ${product.price}`}>
            <ScrollView style={{flex: 1}}>
              {/* Imagenes del producto */}
            </ScrollView>
        </MainLayout>
    )
}
