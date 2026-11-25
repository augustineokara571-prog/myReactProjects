import { BookOpen, Search } from "lucide-react";
import { Link } from "react-router-dom";


export default function Project() {

    const Library = [
         {
            'name': 'The Quiet Shore',
            'image': 'https://images.unsplash.com/photo-1531768758921-efe347c05370?w=400&h=600&fit=crop&auto=format',
            'title': 'Elena Marsh',
            'times': '8 min read',
            'icon': 'Fiction'
        },
        {
            'name': 'Fragments of Light',
            'image': 'https://images.unsplash.com/photo-1548746450-48dbc4747adc?w=400&h=600&fit=crop&auto=format',
            'title': 'James Okafor',
            'times': '12 min read',
            'icon': 'Poetry'
        },
        {
            'name': 'What Remains',
            'image': 'https://images.unsplash.com/photo-1776286287707-32c03b3691da?w=400&h=600&fit=crop&auto=format',
            'title': 'Clara Voss',
            'times': '10 min read',
            'icon': 'Essay'
        },
        {
            'name': 'Stone & Memory',
            'image': 'https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=400&h=600&fit=crop&auto=format',
            'title': 'Rafael Nunes',
            'times': '6 min read',
            'icon': 'Fiction'
        },
        {
            'name': 'The Correspondence',
            'image': 'https://images.unsplash.com/photo-1784296868311-6ec322ac4673?w=400&h=600&fit=crop&auto=format',
            'title': 'Priya Sen',
            'times': '15 min read',
            'icon': 'Letters'
        },
        {
            'name': 'Grey Fabric Days',
            'image': 'https://images.unsplash.com/photo-1576560020190-65297ecc392c?w=400&h=600&fit=crop&auto=format',
            'title': 'Mia Lindqvist',
            'times': '9 min read',
            'icon': 'Fiction'
        },
        {
            'name': 'In the Dark Blue',
            'image': 'https://images.unsplash.com/photo-1768815151797-dc992ba7b0d9?w=400&h=600&fit=crop&auto=format',
            'title': 'Tom Adeyemi',
            'times': '11 min read',
            'icon': 'Memoir'
        },
        {
            'name': 'Weathered Things',
            'image': 'https://images.unsplash.com/photo-1574110537361-ff1948fc4a57?w=400&h=600&fit=crop&auto=format',
            'title': 'Sofia Carvalho',
            'times': '7 min read',
            'icon': 'Essay'

        },
    ];
    return (
        <div className="bg-[#FDF8F3] lg:h-523 md:h-full transition-colors duration-300">
            <div className="bg-[#FDF8F3] sticky top-0 z-50 border-b border-gray-300">
                <div className="flex pt-4 pb-3">
                    <svg className="ml-20" width="30" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#C87A5B" />
                        <rect x="11" y="11" width="18" height="18" rx="2" fill="white" />
                        <rect x="15" y="15" width="4" height="10" fill="#C87A5B" />
                        <rect x="21" y="15" width="4" height="10" fill="#C87A5B" />
                    </svg>
                    <h3 className=" font-serif text-[21px] tracking-tight text-slate-800 pl-2 pt-1 pr-87 ">Athenaeum</h3>
                    <p className="text-[#c87d55] pr-10 text-[14px]">Library</p>
                    <p className="pr-115">About</p>
                    <Search size={18} />
                </div>
            </div>
            <div className="border-b-[1px] border-b-gray-300"></div>
            <div className="inline-flex items-center relative top-20 left-23 gap-1.5 rounded-full bg-amber-100/60 px-3 py-1 text-xs font-medium text-[#c87d55]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-700">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                </svg>
                <span>Short reads for curious minds</span>
            </div>
            <div class="font-serif text-[70px] pt-30 pl-23 font-normal leading-tight tracking-tight text-stone-900">
                Discover your next <br />
                <span class="font-serif italic font-bold text-[#c87d55]">short read</span>
            </div>
            <div className="font-sans text-lg font-normal leading-relaxed text-[#524b46] pl-23 pt-4">Curated stories, essays, and poems you can finish in one <br />
                sitting. No subscriptions, no noise — just good writing.</div>
            <button className="group inline-flex ml-23 mt-10 items-center gap-2 rounded-2xl bg-[#c87d55] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#b56c45] active:scale-[0.98]">
                <span>Browse Library</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-2 group-active:translate-x-1.5"
                >
                    <path
                        fill-rule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                        clip-rule="evenodd"
                    />
                </svg>
            </button>
            <div className="border-b-[1px] mt-20 mr-23 ml-23 border-b-gray-300"></div>
            <div className="flex pt-15 justify-between pb-15">
                <h2 class="font-serif text-1xl pl-23 tracking-tight text-stone-900 md:text-3xl">
                    The Collection
                </h2>
                <span class="text-[15px] font-normal text-[#9c958c] pr-23">
                    8 titles
                </span>
            </div>
           <div className="px-14 py-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 font-serif text-[16px] font-medium tracking-tight">
    {Library.map((item, index) => {
        return (
            <Link key={index} to={`/pageinfo/${index}`} className="group block">
                <div className="flex flex-col space-y-2">
                    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                            <span className="text-white text-xs font-sans font-medium tracking-wide inline-flex items-center gap-1 translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                                Read <span>→</span>
                            </span>
                        </div>
                    </div>

                    <div className="text-stone-500 flex items-center gap-3 text-[13px] pt-1">
                        <span className="inline-flex items-center gap-1.5 px-2.5 rounded-[10px] bg-olive-200 text-stone-400 font-medium">
                            <svg className="w-2.5 h-2.5 text-stone-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path>
                            </svg>
                            {item.icon}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-stone-500">
                            <svg className="w-3 h-3 text-stone-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            {item.times}
                        </span>
                    </div>

                    <h3 className="transition-colors duration-200 group-hover:text-[#c87d55]">
                        {item.name}
                    </h3>
                    <p className="text-[#9c958c] text-sm">{item.title}</p>
                </div>
            </Link>
        );
    })}
</div>
            <footer className="flex items-center justify-between mt-28 pt-10 px-20 text-stone-500 border-t border-stone-200">
                <p className="text-[14px]">© 2026 Athenaeum. All rights reserved.</p>

                <div className="flex items-center gap-3">
                    <button className="p-1.5 text-stone-500 hover:text-stone-800 transition-colors rounded-md" aria-label="Open in new tab">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </button>

                    <button className="p-1.5 text-stone-500 hover:text-stone-800 transition-colors rounded-md" aria-label="Toggle view">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="8" height="16" rx="1" />
                            <rect x="13" y="4" width="8" height="16" rx="1" />
                        </svg>
                    </button>
                </div>
            </footer>
        </div>
    )
}