import Topbar from "../../components/topbar";
import {useEffect, useState} from "react";

export default function Characters() {

    const [characters, setCharacters] = useState([]);
    const [charPage, setCharPage] = useState(1);
    const [charList, setCharList] = useState([])
    const [some, setSome] = useState(true)

    useEffect(() => {
        fetch(`https://api.potterdb.com/v1/characters?page[number=${charPage}]&page[size=20]&sort=${some ? "": "-"}name`)
            .then(response => response.json())
            .then(data => (setCharacters(data.data)))
    }, [charPage, some])


    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    console.log(characters?.attributes?.image)

    return (
        <div className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
            <Topbar/>
            <div className="relative p-5">
                <div className="absolute right-16">
                    <label className="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" onChange={() => setSome(!some)}/>
                            <div
                                className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-yellow-400 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Descending Filter</span>
                    </label>
                </div>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 p-5">
                {characters.map(character => (
                    <a href={`/characters/${character.attributes.slug}`} className="flex flex-col justify-center max-w-xs p-6 rounded-xl bg-white">
                        <div className="p-3 border-2 border-black rounded hover:shadow-2xl bg-white">
                            <img src={character.attributes.image} alt="background image"
                                 className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
                                 // style={{width: "70%", height: "70%"}}zz
                            />
                            <div className="space-y-4 text-center divide-y divide-gray-700">
                                <div className="my-2 space-y-3">
                                    <h2 className="text-xl font-semibold sm:text-2xl">{character.attributes.name}</h2>
                                    <button className="px-5 text-xs sm:text-base text-white rounded-full bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">{character.attributes.house || "Belongs to no house"}</button>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <div className="flex items-center justify-center gap-4">
                <button onClick={() => (setCharList([...charList, ...characters]), topFunction(),
                    setCharPage(charPage - 1))}
                        className="bg-yellow-700 px-5 py-2 rounded-full mb-4" id="myBtn">Previous</button>
                <button onClick={() => (setCharList([...charList, ...characters]), topFunction(),
                    setCharPage(charPage + 1))}
                        className="bg-yellow-700 px-5 py-2 rounded-full mb-4" id="myBtn">Next</button>
            </div>
        </div>
    )
}