import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";


const Celebrites = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
    },[])
    return (
        <div className="my-10">
            <h1 className="uppercase font-black text-3xl mb-5 pl-3">celebrities</h1>
            <div className="grid gird-cols-1 grid-cols-4 gap-2">
            {data.map(dt => <SingleCard key={dt.id} {...dt} />)}
            </div>
        </div>
    );
};

export default Celebrites;