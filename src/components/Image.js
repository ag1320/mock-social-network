import { useParams } from "react-router"
import './Image.css'

export default function Image({people}){
    let {imgId} = useParams();
    return(
        <>
        <img src = {people[imgId].profileImage} className = 'image'/>
        </>
    )
}