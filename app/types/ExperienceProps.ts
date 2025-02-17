type ExperienceListItemProps = {
    children: React.ReactNode
    subtitle: string
    handleActive: (item: string) => void
    id: string
}

type ExperienceDetailsProps = {
    active: string
}