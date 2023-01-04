import Tilt from 'react-vanilla-tilt'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import axios from "axios";
import Topbar from "../../components/topbar";

export default function Character() {
    const [char, setChar] = useState([]);

    const router = useRouter();
    const { slug } = router.query;

    // useEffect will run on each render only if the `slug` changes,
    // so on initial render once `useRouter` has the query then it'll run the effect
    useEffect(() => {
        // fetchData runs async, so whenever the response comes back
        // then you can set some state, in this case `setPost(data)`
        const fetchData = async () => {
            const response = await axios.get(`https://api.potterdb.com/v1/characters/${slug}`);
            setChar(response.data.data);
        };

        if (slug) {
            fetchData();
        }
    }, [slug]);

    return (
        <div>
            <Topbar/>
            <div className="grid place-items-center mt-20">
                <Tilt>
                    <img src={char?.attributes?.image} alt="image" className="p-10"/>
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold">{char?.attributes?.name}</h1>
                        <div className="relative">
                            <h1 className="text-lg font-medium">{char?.attributes?.house}</h1>
                            <img src="/wand.webp" alt="wand" className="absolute right-0 top-0 w-5 h-5"/>
                        </div>
                    </div>
                </Tilt>
            </div>
        </div>
    );
}