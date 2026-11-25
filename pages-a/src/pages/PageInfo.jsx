
import { useParams, Link } from "react-router-dom";
import { BookMarked, Search, Clock, Book, BookOpen } from "lucide-react";
import Library from "../data/Library";

export default function PageInfo() {
    const { id } = useParams();
    const book = Library[Number(id)];

    if (!book) {
        return <div className="p-10">Book not found</div>;
    }

    return (
        <div className="min-h-screen bg-[#FDF8F3]">

            <nav className="pt-4 pb-3 bg-[#FDF8F3] sticky top-0 z-50 border-b border-[#E7DED4] flex items-center justify-between px-6 md:px-[6.7%]">

                <Link to="/project" className="flex items-center gap-3">
                    <div className="bg-[#C87D5B] text-white w-10 h-10 rounded-xl flex items-center justify-center">
                        <BookMarked size={21} />
                    </div>

                    <h1 className="font-serif text-2xl text-stone-900">
                        Athenaeum
                    </h1>
                </Link>

                <div className="flex items-center gap-8 text-stone-600">
                    <Link to="/project">
                        Library
                    </Link>

                    <p>
                        About
                    </p>
                </div>

                <button className="text-stone-600 hover:text-[#C87D5B]">
                    <Search size={23} />
                </button>

            </nav>

            <main className="max-w-[1700px] mx-auto px-6 md:px-[6.7%] py-9">

                <div className="flex items-center gap-3 mb-10">

                    <Link to="/project" className="text-[#A49A91] text-[14px]">
                        Home
                    </Link>

                    <span className="text-[#C9BFB5] text-[20px]">›</span>

                    <Link to="/project" className="text-[#A49A91] text-[14px]">
                        Library
                    </Link>

                    <span className="text-[#C9BFB5] text-[20px]">›</span>

                    <span className="text-stone-900 text-[14px]">
                        {book.name}
                    </span>

                </div>

                <div className="flex flex-col md:flex-row gap-10 md:gap-[45px]">

                    <div>

                        <img
                            src={book.image}
                            alt={book.name}
                            className="w-72 h-[450px] rounded-2xl bg-white"
                        />

                        <h2 className="font-serif text-[22px] text-stone-900 mt-4">
                            {book.name}
                        </h2>

                        <p className="text-[#A49A91] text-[15px]">
                            {book.title}
                        </p>

                        <div className="flex items-center gap-4 mt-4">

                            <span className="flex items-center gap-1.5 bg-[#F0EBE2] text-[#8A9B82] px-3 py-1 rounded-full text-[12px]">
                                <BookOpen size={14} />
                                {book.icon}
                            </span>

                            <span className="flex items-center gap-1.5 text-[#A49A91] text-[13px]">
                                <Clock size={12} />
                                {book.times}
                            </span>

                        </div>

                        {/* Start Reading */}
                        <Link
                            to={`/pagedetails/${id}/0`}
                            className="mt-6 w-75 flex items-center justify-center gap-3 bg-[#C87D5B] text-white py-3 rounded-2xl font-semibold text-[16px] hover:bg-[#B66D4D] transition-colors"
                        >
                            <Book size={19} />
                            Start Reading
                        </Link>

                    </div>

                    {/* RIGHT SIDE: About and Table of Contents */}
                    <div className="pt-0 md:pt-0">

                        {/* About */}
                        <section className="border-t-2 border-[#E7DED4] pt-7">

                            <h2 className="font-serif text-[22px] text-stone-900">
                                About this book
                            </h2>

                            <p className="text-stone-700 text-[14.5px] leading-7 mt-3">
                                {book.about}
                            </p>

                        </section>

                        {/* Table of Contents */}
                        <section className="mt-11">

                            <h2 className="font-serif text-[22px] text-stone-900 mb-5">
                                Table of Contents
                            </h2>

                            <div>

                                {book["table-content"]?.map((item, index) => (

                                    <Link
                                        key={index}
                                        to={`/pagedetails/${id}/${index}`}
                                        className="flex items-center gap-7 border-t border-b border-[#E7DED4] py-4"
                                    >

                                        <span className="text-[#C5B8AA] text-[11px]">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-stone-900 text-[14.5px] font-[510] group-hover:text-[#C87D5B]">
                                           {typeof item === "string" ? item : item.title}
                                        </span>

                                    </Link>

                                ))}

                            </div>

                        </section>

                    </div>

                </div>

            </main>

        </div>
    );
}
