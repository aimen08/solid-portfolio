interface Props {
    data: {
        image: string
        link: string
    }
}

export default (props: Props) => {
    const { data } = props
    return (
        <a
            class="group relative rounded-md bg-gray-50 transition-colors decoration-none hover:bg-gray-100 dark:bg-gray-50/10 dark:hover:bg-gray-50/20"
            href={data.link}
            target="_blank"
        >
            <img class="rounded-md" src={data.image} alt="video" />
            <div class="absolute inset-0 bg-black opacity-15 group-hover:opacity-40 rounded-md transition-opacity"></div>
            <div class="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-12 w-12 text-white opacity-80 group-hover:opacity-100 transition-opacity">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M6 18L18 12 6 6z" />
                </svg>
            </div>
        </a>
    )
}
