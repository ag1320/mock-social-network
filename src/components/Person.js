import { Redirect, useParams, useRouteMatch } from "react-router"
import { NavLink, Route } from "react-router-dom"


export default function Person ({people}){
    let {personId} = useParams()
    let person = people[personId]
    let match = useRouteMatch()    
    return(
        <>
            <h1>
                {person.firstName}
            </h1>
            <h1>
                {person.lastName}
            </h1>
            <p>birthday: {person.birthday}</p>
            <NavLink to={`${match.url}/${personId}`}>
                <img src = {person.profileImage} />
            </NavLink>
            <Route path = {`${match.path}/:redirect`}>
                <Redirect to = {`/img/${personId}`} />
            </Route>
        </>
    )
}


