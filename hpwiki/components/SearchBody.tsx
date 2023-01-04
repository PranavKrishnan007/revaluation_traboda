import {useEffect, useState} from "react";
import {log} from "util";

const SearchBody = () => {
    const [characters, setCharacters] = useState();
    const [name, setName] = useState('');
    const [typing, setTyping] = useState(true);
    const [slug, setSlug] = useState('');

    useEffect(() => {
        fetch(`https://api.potterdb.com/v1/characters?filter[name_cont_any]=${name}`)
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => (setCharacters(data.data.slice(0, 5))))
    }, [name])

    const onSuggest = (text) => {
        setTyping(false)
        setName(text)
    }

    return (
        <div className="min-h-screen flex flex-col justify-center">
            <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
                <div className="overflow-hidden z-0 rounded-full relative p-3">
                    <form method="POST" action={`/characters/${slug}`} role="form" className="relative flex z-50 bg-white rounded-full">
                        <input type="text" placeholder="enter your search here"
                           className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                           onChange={(e) => (setName(e.target.value), setTyping(true))}
                           value={name}
                        />
                        <button
                            className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4
                            hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                    <div className="glow glow-1 z-10 bg-pink-400 absolute"></div>
                    <div className="glow glow-2 z-20 bg-purple-400 absolute"></div>
                    <div className="glow glow-3 z-30 bg-yellow-400 absolute"></div>
                    <div className="glow glow-4 z-40 bg-blue-400 absolute"></div>
                </div>
                {name.length > 1 && typing ? (
                    <div className="">
                        {characters.map(character => {
                            return (
                                <div className="bg-white opacity-50 hover:opacity-100 rounded mr-32 ml-8 mt-1" onClick={() => {onSuggest(character.attributes.name), setSlug(character.attributes.slug)}}>
                                    <h1 className="ml-3">{character.attributes.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                ) : (null)}
            </div>
        </div>
    )
}

export default SearchBody;