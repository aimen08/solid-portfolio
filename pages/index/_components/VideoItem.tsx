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
            class="group relative rounded-3xl bg-surface border border-stroke overflow-hidden transition-colors decoration-none hover:border-transparent flex-1"
            href={data.link}
            target="_blank"
        >
            <span class="absolute inset-[-2px] rounded-3xl accent-gradient opacity-0 group-hover:opacity-100 transition-opacity z-0" />
            <div class="relative z-10 bg-surface rounded-3xl overflow-hidden w-full h-full">
               <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={data.image} alt="video" />
               <div class="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity"></div>
               <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div class="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8 text-white translate-x-0.5">
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                       </svg>
                   </div>
               </div>
            </div>
        </a>
    )
}
