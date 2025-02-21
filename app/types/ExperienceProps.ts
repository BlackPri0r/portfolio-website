export type ExperienceListItemProps = {
    children: React.ReactNode
    subtitle: string
    handleActive: (item: string) => void
    id: string
}

export type ExperienceDetailsProps = {
    active: string
}