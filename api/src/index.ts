import { Elysia, t } from 'elysia'

const app = new Elysia()
    .get('/', () => 'Hello Elysia')
    .post('/sign-in', ({ body }) => body, {
        body: t.Object({
            username: t.String(),
            password: t.String()
        })
    })
    .listen(3000)

export type App = typeof app

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
