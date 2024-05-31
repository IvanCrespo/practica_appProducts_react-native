import {Button, Input, Layout, Text} from '@ui-kitten/components'
import {Alert, useWindowDimensions} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import {MyIcon} from '../../components/ui/MyIcon'
import {StackScreenProps} from '@react-navigation/stack'
import {RootStackParams} from '../../navigation/StackNavigator'
import {API_URL, STAGE} from '@env'
import {useState} from 'react'
import {useAuthStore} from '../../store/auth/useAuthStore'

interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> {}

export const LoginScreen = ({navigation}: Props) => {
    const {height} = useWindowDimensions()
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const [isPosting, setIsPosting] = useState(false)
    const {login} = useAuthStore()

    const onLogin = async () => {
        if (form.email.length === 0 || form.password.length === 0) return
        setIsPosting(true)
        const wasSuccessful = await login(form.email, form.password)
        setIsPosting(false)
        if (wasSuccessful) return
        Alert.alert('Error', 'Usuario o contraseña incorrectos!')
    }

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
                        value={form.email}
                        onChangeText={email => setForm({...form, email})}
                        style={{marginBottom: 10}}
                        accessoryLeft={<MyIcon name="email-outline" />}
                    />
                    <Input
                        placeholder="Contraseña"
                        autoCapitalize="none"
                        style={{marginBottom: 10}}
                        secureTextEntry
                        value={form.password}
                        onChangeText={password => setForm({...form, password})}
                        accessoryLeft={<MyIcon name="lock-outline" />}
                    />
                </Layout>

                {/* Space */}
                <Layout style={{height: 20}} />

                {/* Button */}
                <Layout>
                    <Button
                    disabled={isPosting}
                        accessoryRight={
                            <MyIcon name="arrow-forward-outline" white />
                        }
                        onPress={onLogin}>
                        Ingresar
                    </Button>
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
                    <Text
                        status="primary"
                        category="s1"
                        onPress={() => navigation.navigate('RegisterScreen')}>
                        {' '}
                        Crear Cuenta
                    </Text>
                </Layout>
            </ScrollView>
        </Layout>
    )
}
