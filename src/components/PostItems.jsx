import { useLocation, useParams } from "react-router-dom"

export default function PostItems(){
    let params = useParams();
    let location = useLocation();
    console.log(location);
    
    return (<>
     <h1>Post No. {params.no} </h1>
    </>)
    }