import { Link } from "react-router-dom"

export default function Text2() {
    const movies = [
        {
            'name': 'John Doe',
            'image': 'https://i.pinimg.com/736x/d5/c1/db/d5c1db1bb5067b5b9e056c120824bbd8.jpg'
        },
        {
            'name': 'Richard Crenna',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0nkZ6zdZXOeLQG27wdZn6o1foT5DvKeos09wR-XZilg&s=10'
        },
        {
            'name': 'Richard Crenna',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTQT9kOCUX95BQmlxw9GOUap817Bjc8h-A5i5A1ykKCPmayRNifZAvwt4&s'
        },
        {
            'name': 'Micheal Jordan',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4Skf4ARNlhtHBLkU5NoSTXFHQbQe7avse2i6TOTOYw&s=10'
        },
        {
            'name': 'Richard Gere',
            'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDAfPMjJdsNoqzTMRBICDtM0O9JOaZeEBVOlg9yKpHoQI1Sb9hqhSr_Y8&s'
        },
        {
            'name': 'Richard Crenna',
            'image': 'https://media.gettyimages.com/id/168583121/photo/sylvester-stallone-walks-through-a-trench-with-richard-crenna-in-a-scene-from-the-film-rambo.jpg?s=612x612&w=0&k=20&c=1EUyYnDKRoZnf2conOvw1TvxJfUK02IMDjsfbs8H4ZU='
        },
        {
            'name': 'john red',
            'image': 'https://media.gettyimages.com/id/52180608/photo/us-actor-keanu-reeves-arrives-at-the-berlinale-palast-cinema-11-february-2005-during-the.jpg?s=612x612&w=0&k=20&c=Iz1xShp4xar5sGX9O8hwJG0vti3H1ygZ0VE9JhkXo3E='
        },
        {
            'name': 'reacher kid',
            'image': 'https://media.gettyimages.com/id/3418641/photo/one-of-the-young-residents-of-the-swiss-village-of-pestalozzi-on-set-during-production-of-the.jpg?s=612x612&w=0&k=20&c=Iy53RS94RuMqIOKjGGfTkE5oXVz_UjoOk3yBlCCVXVw='
        },
        {
            'name': 'mark joe',
            'image': 'https://media.gettyimages.com/id/52180373/photo/new-zealands-actor-marton-csokas-gives-a-press-conference-11-february-2005-during-the.jpg?s=612x612&w=0&k=20&c=5GGo4rkEz1mdbx75tHa5bt-EijhlKtfvmLB-51Ds9uE='
        },
        {
            'name': 'jack born',
            'image': 'https://media.gettyimages.com/id/1583770788/photo/topshot-china-film.jpg?s=612x612&w=0&k=20&c=JvTWUFGe2YoE_T2xHa02WI1p6B34wsjLm_D786rwVn8='
        },
        {
            'name': 'monster movie',
            'image': 'https://media.gettyimages.com/id/1565253138/photo/long-beach-ca-billy-the-puppet-from-the-saw-horror-film-franchise-making-its-first-public.jpg?s=612x612&w=0&k=20&c=znS_J0J7qMwmXwrUYrMu6RScJiyAvOhA7-DXCS5CyHg='
        },
        {
            'name': 'fighter men',
            'image': 'https://media.gettyimages.com/id/3326603/photo/sci-fi-swamp.jpg?s=1024x1024&w=gi&k=20&c=nxichQUxXcAVkX0Gcy9zRneynEwU6G6md0J2-GEzwLM='
        }
    ];
    return (
        <div className="bg-[lightgray] min-h-screen">
            <Link to="/text"><button className="border-slate-800 shadow-md border relative left-2/5 border-[2px] bg-slate-900 text-white font-bold rounded-[7px] hover:bg-emerald-600 py-2 px-10">Text page</button></Link>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-y-4 font-bold text-[18px]">
        
                {movies.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="flex flex-col items-center space-y-2">
                                <img src={item.image} className="md:w-60 w-80 rounded-xl h-50" />
                                <h3>{item.name}</h3>
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}