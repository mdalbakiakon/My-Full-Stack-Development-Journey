import React from 'react'
import { MapPin, Calendar, Search } from "lucide-react";

const Searchbar = () => {
    return (
        <div className="w-full p-5 shadow-2xl flex flex-col md:flex-row justify-around items-center gap-5 rounded-2xl max-w-5xl">
            {/* Destination */}
            <div className="relative">
                <MapPin
                    className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-white/60"
                />
                <input
                    type="text"
                    placeholder="Onward from"
                    className="w-full h-14 bg-[#121212]/50 rounded-full pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
            </div>

            {/* Place */}
            <div className="relative">
                <MapPin
                    className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-white/60"
                />
                <input
                    type="text"
                    placeholder="Tour to"
                    className="w-full h-14 bg-[#121212]/50 rounded-full pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
            </div>

            {/* From / To */}
            <div className="flex items-center rounded-full bg-[#121212]/50">
                {/* From */}
                <div className="relative flex-1">
                    <Calendar
                        className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-white/60 cursor-pointer"
                    />
                    <input
                        type="text"
                        placeholder="From"
                        readOnly
                        className="w-full h-14 rounded-l-full pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                </div>

                <div className="divider">
                    <div className="w-0.5 h-7 bg-white/30"></div>
                </div>

                {/* To */}
                <div className="relative flex-1">
                    <Calendar
                        className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-white/60 cursor-pointer"
                    />
                    <input
                        type="text"
                        placeholder="To"
                        readOnly
                        className="w-full h-14 rounded-r-full pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                </div>
            </div>

            {/* Search Button */}
            <button className="h-14 px-5 bg-amber-500 text-black rounded-full flex items-center justify-center gap-1.5 font-semibold cursor-pointer">
                <Search className="w-6 h-6" />
                Search
            </button>
        </div>
    )
}

export default Searchbar