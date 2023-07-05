import { useEffect } from 'react'
import { useAtom } from 'jotai'

import {
    View,
    Text,
    TextInput,
    Button,
    TouchableWithoutFeedback,
    SafeAreaView,
    TouchableNativeFeedback
} from 'react-native'
import { Link, useRouter } from 'expo-router'

import { useMutation } from '@tanstack/react-query'

import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { eden, useUsername } from '../libs'

const form = z.object({
    username: z.string().min(5),
    password: z.string().min(5)
})

const capitalize = (word: string) => word[0].toUpperCase() + word.slice(1)

export default function Form() {
    const router = useRouter()
    const [username, setUsername] = useUsername()

    const {
        control,
        handleSubmit,
        formState: { errors: formError }
    } = useForm<z.infer<typeof form>>({
        resolver: zodResolver(form)
    })

    const {
        mutate,
        isLoading,
        data: response
    } = useMutation({
        mutationKey: ['sign-in'],
        mutationFn: eden['sign-in'].post
    })

    useEffect(() => {
        if (!response || response.error) return

        setUsername(response.data.username)
        router.push('/')
    }, [response])

    return (
        <View className="flex w-full h-screen justify-center gap-2 px-4">
            <Text className="text-3xl">Hello Form</Text>

            <View className="flex w-full my-2">
                {(['username', 'password'] as const).map((name) => (
                    <Controller
                        name={name}
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                secureTextEntry={name === 'password'}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                placeholder={capitalize(name)}
                                className="text-lg px-4 py-2 bg-gray-50 rounded-lg my-2"
                            />
                        )}
                    />
                ))}
            </View>

            {(['username', 'password'] as const).map(
                (name) =>
                    formError[name] && (
                        <Text className="text-red-500 mb-2">
                            {formError[name]?.message}
                        </Text>
                    )
            )}

            <View className="flex flex-row w-full gap-4 justifty-center items-center gap-y-4">
                <TouchableNativeFeedback
                    onPress={handleSubmit((data) => mutate(data))}
                >
                    <Text className="flex-1 text-lg bg-blue-500 text-white text-center py-2 rounded-full">
                        Sign In
                    </Text>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback>
                    <Link
                        className="flex-1 text-blue-500 py-2 text-center text-lg"
                        href="/"
                    >
                        Back
                    </Link>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}
