import { View, Text } from 'react-native'
import { Link } from 'expo-router'

import { useQuery } from '@tanstack/react-query'
import { eden, useUsername } from '../libs'

export default function Home() {
    const [username, setUsername] = useUsername()

    const {
        data: response,
        isLoading,
        error
    } = useQuery({
        queryKey: ['index'],
        queryFn: () => eden.index.get()
    })

    return (
        <View className="flex w-full gap-4 h-screen items-center justify-center">
            <Text className="text-3xl">Hello React Native</Text>

            <Link
                href="/form"
                className="px-4 py-2 bg-blue-50 text-blue-500 text-lg"
            >
                Form
            </Link>

            {response?.data && <Text>API: {response.data}</Text>}
            {username && <Text>User: {username}</Text>}
        </View>
    )
}
