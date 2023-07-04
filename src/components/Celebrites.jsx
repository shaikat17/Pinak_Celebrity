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
        <div>
            <h1>Celebrity</h1>
            <div className="grid gird-cols-1">
            {data.map(dt => <SingleCard key={dt.id} {...dt} />)}
            </div>
        </div>
    );
};

export default Celebrites;