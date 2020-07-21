import { createClient } from './delivc'

// @ts-ignore
global.__VERSION__ = '1.0'

const client = createClient({
    accessToken: '1elXJBu03d8PE9rcVm2bLTJTAaU',
    host: 'localhost:9002',
    insecure: true,
})

const app = async () => {
    const nav = await client.getNavigation({})
    console.log(nav)
}

app()