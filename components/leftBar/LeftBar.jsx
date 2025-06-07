import React from 'react';
import { Music, TrendingUp, User, Settings, Disc, Search } from 'lucide-react';

const LeftBar = () => {
    return (
        <div className='bg-[#18181d] w-[320px] h-screen px-5'>
            <div className=" text-white">
                <div className="flex items-center justify-center p-4">
                    <div className="text-2xl font-bold text-blue-500">MP</div>
                    <span className="ml-2 text-xl">Music Player</span>
                </div>
                <nav className="mt-10">
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                            <Search className="text-xl" />
                            <span className="text-lg">Explore</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                            <TrendingUp className="text-xl" />
                            <span className="text-lg">Top Songs</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                            <Music className="text-xl" />
                            <span className="text-lg">Musics</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                            <User className="text-xl" />
                            <span className="text-lg">Artists</span>
                        </li>
                    </ul>
                </nav>
                <div className="mt-10">
                    <h3 className="text-lg text-gray-400 pl-4">Library</h3>
                    <ul className="space-y-4 mt-4">
                        <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                            <Disc className="text-xl" />
                            <span className="text-lg">Bangla Songs</span>
                        </li>
                        <li className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
                            <Disc className="text-xl" />
                            <span className="text-lg">Hindi Songs</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default LeftBar;