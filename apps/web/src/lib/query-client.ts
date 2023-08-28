import { cache } from 'react'
import { QueryClient } from '@tanstack/react-query'

export const getQueryClient = cache(() => new QueryClient())
