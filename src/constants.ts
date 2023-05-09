export const filters = ['All', 'Last week', 'Last month'] as const

export type Filter = (typeof filters)[number]