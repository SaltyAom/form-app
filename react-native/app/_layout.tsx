import { Slot, Stack } from 'expo-router'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Provider as JotaiProvider } from 'jotai'
import { SafeAreaView } from 'react-native'

const queryClient = new QueryClient()

export default function Layout() {
    return (
        <JotaiProvider>
            <QueryClientProvider client={queryClient}>
                <Stack
                    screenOptions={{
                        headerShown: false,
                        contentStyle: {
                            backgroundColor: '#fff'
                        }
                    }}
                >
                    <Slot />
                </Stack>
            </QueryClientProvider>
        </JotaiProvider>
    )
}
