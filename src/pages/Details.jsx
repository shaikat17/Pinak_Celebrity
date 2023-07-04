import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    const [singleData, setSingleData] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        fetch("/data.json")
        .then(res => res.json())
        .then(data => {
            const newData = data.filter(dt => dt.id === parseInt(id, 10))[0]
            setSingleData(newData)
            // console.log(newData)
            setLoading(false)
            
        })
        .catch(err => console.log(err))
    },[])

    // if(loading) return <><h1>Loading...</h1></>

    return (
        <div>
            <h1>Hello from details page</h1>
            <img className="w-96" src={singleData.image} alt={singleData.name} />
            <h1>{singleData.name}</h1>
        </div>
    );
};

export default Details;