import {List, Text} from '@ui-kitten/components'
import {Product} from '../../../domain/entities/product'

interface Props {
    products: Product[]
    // TODO: Fetch nextPage
}

export const ProductsList = ({products}: Props) => {

    return (
        <List
            data={products}
            numColumns={2}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({item}) => (
              <Text key={item.id}>{item.title}</Text>
            )}
        />
    )
}
