import {useEffect, useState} from "react";
import {log} from "util";

const SearchBody = () => {
    const [characters, setCharacters] = useState();
    const [name, setName] = useState('');
    const [typing, setTyping] = useState(true);

    // useEffect(() => {
    //     fetch("https://api.potterdb.com/v1/characters/")
    //         .then(response => response.json())
    //         // 4. Setting *dogImage* to the image url that we received from the response above
    //         .then(data => (setCharacters(data.data)))
    // }, [])
    //
    // // filtering the characters by name
    // const filterCharacters = (text) => {
    //     let matches = []
    //     if (text.length > 0) {
    //         characters.map(character => {
    //                 if (character.attributes.name.toLowerCase().includes(text.toLowerCase())) {
    //                     matches.push(character.attributes.name)
    //                 }
    //             }
    //         )
    //         setName(matches)
    //     }
    // }

    // console.log(name)
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

    console.log(characters)
    return (
        <div className="min-h-screen flex flex-col justify-center">
            <div className="relative p-12 w-full sm:max-w-2xl sm:mx-auto">
                <div className="overflow-hidden z-0 rounded-full relative p-3">
                    <form role="form" className="relative flex z-50 bg-white rounded-full">
                        <input type="text" placeholder="enter your search here"
                           className="rounded-full flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                           onChange={(e) => (setName(e.target.value), setTyping(true))}
                           value={name}
                        />
                            <button
                                className="bg-indigo-500 text-white rounded-full font-semibold px-8 py-4 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">Search
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
                                <div className="bg-blue-400 hover:opacity-50 rounded-full mt-1" onClick={() => {onSuggest(character.attributes.name)}}>
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