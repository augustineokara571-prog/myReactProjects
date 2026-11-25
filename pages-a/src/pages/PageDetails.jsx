
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
    Bookmark,
    Moon,
    Sun,
    Settings,
    ArrowLeft,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

import Books from "../data/Library";

export default function PageDetails() {
    const { id, content } = useParams();

    const book = Books[Number(id)];
    const chapterIndex = Number(content);

    const chapter = book?.["table-content"]?.[chapterIndex];

    // Reader settings
    const [currentPage, setCurrentPage] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [fontSize, setFontSize] = useState(18);

    // Reset the reader when another chapter is opened
    useEffect(() => {
        setCurrentPage(0);
        setBookmarked(false);
    }, [id, content]);

    if (!book || !chapter) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#FDF8F3]">
                <h1 className="text-3xl font-serif">Chapter not found</h1>

                <Link
                    to={`/pageinfo/${id}`}
                    className="mt-5 text-[#C87D5B]"
                >
                    Back to Book
                </Link>
            </div>
        );
    }

    const chapterTitle =
        typeof chapter === "string" ? chapter : chapter.title;

    const pages =
        Array.isArray(chapter.pages)
            ? chapter.pages
            : chapter.content
                ? [chapter.content]
                : ["Reading content for this chapter has not been added yet."];

    const navigate = useNavigate();

    const chapters = book?.["table-content"] || [];
    const totalChapters = chapters.length;

    const previousChapter = () => {
        if (chapterIndex > 0) {
            navigate(`/pagedetails/${id}/${chapterIndex - 1}`);
        }
    };

    const nextChapter = () => {
        if (chapterIndex < totalChapters - 1) {
            navigate(`/pagedetails/${id}/${chapterIndex + 1}`);
        }
    };

    const progress = ((chapterIndex + 1) / totalChapters) * 100;

    const background = darkMode ? "bg-[#171715]" : "bg-[#FDF8F3]";
    const textColor = darkMode ? "text-[#E9E3DA]" : "text-[#292622]";
    const mutedColor = darkMode ? "text-[#A49B90]" : "text-[#A69C91]";
    const borderColor = darkMode ? "border-[#393632]" : "border-[#E9E1D8]";

    return (
        <div className={`min-h-screen ${background} ${textColor} transition-colors duration-300`}>

            {/* TOP PROGRESS LINE */}
            <div className="fixed top-0 left-0 w-full h-[2px] bg-[#EAE3DB] z-50">
                <div
                    className="h-full bg-[#C87D5B] transition-all duration-500 ease-in-out"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* HEADER */}
            <header className={`fixed top-[1px] left-0 w-full h-[62px] border-b ${borderColor} ${background} z-40`}>
                <div className="h-full px-5 md:px-8 flex items-center justify-between">

                    <Link
                        to={`/pageinfo/${id}`}
                        className={`flex items-center gap-2 text-sm ${mutedColor} `}
                    >
                        <ArrowLeft size={16} />
                        Back
                    </Link>

                    {/* Book Name */}
                    <h2 className="font-serif text-base md:text-[14.5px] absolute left-1/2 -translate-x-1/2 truncate max-w-[35%]">
                        {book.name}
                    </h2>

                    {/* Reader Controls */}
                    <div className="flex items-center gap-3 md:gap-5">

                        <button
                            onClick={() => setBookmarked(!bookmarked)}
                            title="Bookmark"
                            className="hover:text-[#C87D5B] transition"
                        >
                            <Bookmark
                                size={17}
                                fill={bookmarked ? "currentColor" : "none"}
                            />
                        </button>

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            title="Toggle dark mode"
                            className="hover:text-[#C87D5B] transition"
                        >
                            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
                        </button>

                        <button
                            onClick={() => setShowSettings(!showSettings)}
                            title="Reading settings"
                            className="hover:text-[#C87D5B] transition"
                        >
                            <Settings size={17} />
                        </button>

                    </div>
                </div>
            </header>

            {/* READING SETTINGS */}
            {showSettings && (
                <div className={`fixed right-5 top-[75px] z-50 w-64 rounded-xl shadow-xl border ${borderColor} ${background} p-5`}>

                    <h3 className="font-serif text-lg mb-4">
                        Reading Settings
                    </h3>

                    <p className={`text-sm mb-3 ${mutedColor}`}>
                        Font Size
                    </p>

                    <div className="flex items-center justify-between gap-3">
                        <button
                            onClick={() => setFontSize((size) => Math.max(13, size - 1))}
                            className="border rounded-lg px-4 py-2"
                        >
                            A-
                        </button>

                        <span>{fontSize}px</span>

                        <button
                            onClick={() => setFontSize((size) => Math.min(24, size + 1))}
                            className="border rounded-lg px-4 py-2"
                        >
                            A+
                        </button>
                    </div>

                    <button
                        onClick={() => setShowSettings(false)}
                        className="mt-5 w-full bg-[#C87D5B] text-white rounded-lg py-2"
                    >
                        Done
                    </button>
                </div>
            )}

            <main className="max-w-[680px] mx-auto px-6 pt-28 pb-32">

                <p className="text-[#C87D5B] text-[11px] tracking-[2px] uppercase font-medium mb-3">
                    Chapter {chapterIndex + 1}
                </p>

                <h1 className="font-serif text-[32px] md:text-[30px] font-semibold leading-tight mb-6">
                    {chapterTitle}
                </h1>

                <article
                    className="leading-[1.9] whitespace-pre-line"
                    style={{ fontSize: `${fontSize}px` }}
                >
                    {pages[currentPage]}
                </article>

            </main>
            <footer className={`fixed bottom-0 left-0 w-full h-[70px] border-t ${borderColor} ${background} z-50`}>
                <div className="max-w-[600px] mx-auto px-5 h-full flex items-center justify-between">

                    <button
                        onClick={previousChapter}
                        disabled={chapterIndex === 0}
                        className={`flex items-center gap-2 text-[14px] ${darkMode
                                ? "bg-[#474742] py-3 px-4 text-[#E9E3DA]"
                                : "bg-[#EFE9E2] text-[#292622]"
                            } px-5 py-3 rounded-xl transition-colors font-medium disabled:opacity-30 disabled:cursor-not-allowed`}
                    >
                        <ChevronLeft size={18} />
                        Previous
                    </button>

                    <span className={`text-sm ${mutedColor}`}>
                        Page {chapterIndex + 1} of {totalChapters}
                    </span>

                    <button
                        onClick={nextChapter}
                        disabled={chapterIndex === totalChapters - 1}
                        className={`flex items-center gap-2 text-[14px] ${darkMode
                            ? "bg-[#474742] py-3 px-4 text-[#E9E3DA]"
                            : "bg-[#EFE9E2] text-[#292622]"
                            } px-5 py-3 rounded-xl transition-colors font-medium disabled:opacity-30 disabled:cursor-not-allowed`}
                    >
                        Next
                        <ChevronRight size={18} />
                    </button>

                </div>
            </footer>

        </div>
    );
}
