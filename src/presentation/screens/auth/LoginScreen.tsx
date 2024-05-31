import {Button, Input, Layout, Text} from '@ui-kitten/components'
import {useWindowDimensions} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import { MyIcon } from '../../components/ui/MyIcon'

export const LoginScreen = () => {
    const {height} = useWindowDimensions()

    return (
        <Layout style={{flex: 1}}>
            <ScrollView style={{marginHorizontal: 40}}>
                <Layout style={{paddingTop: height * 0.35}}>
                    <Text category="h1">Ingresar</Text>
                    <Text category="p2">Por favor, ingrese para continuar</Text>
                </Layout>
                {/* Inputs */}
                <Layout style={{marginTop: 20}}>
                    <Input
                        placeholder="Correo Electrónico"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={{marginBottom: 10}}
                        accessoryLeft={<MyIcon name="email-outline"/>}
                    />
                    <Input
                        placeholder="Contraseña"
                        autoCapitalize="none"
                        style={{marginBottom: 10}}
                        secureTextEntry
                        accessoryLeft={<MyIcon name="lock-outline"/>}
                    />
                </Layout>

                {/* Space */}
                <Layout style={{height: 20}} />

                {/* Button */}
                <Layout>
                    <Button accessoryRight={<MyIcon name="arrow-forward-outline" white/>} onPress={() => {}}>Ingresar</Button>
                </Layout>

                {/* Información para crear cuenta */}
                <Layout style={{height: 50}} />
                <Layout
                    style={{
                        alignItems: 'flex-end',
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                    <Text>¿No tienes cuenta?</Text>
                    <Text status="primary" category="s1" onPress={() => console.log('Hola')}>
                        {' '}
                        Crea una
                    </Text>
                </Layout>
            </ScrollView>
        </Layout>
    )
}