import { edenTreaty } from '@elysiajs/eden'
import type { App } from '../../api/src'

// Replace the ip with your local machine address (if using expo go)
export const eden = edenTreaty<App>('http://localhost:3000')