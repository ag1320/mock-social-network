import {NavLink, useRouteMatch, Route} from 'react-router-dom'
import Person from './Person.js'

export default function Profiles ({content}){
    let match = useRouteMatch()
    let peoples = content.contactProfiles.map((person) => 
        <div>
            <NavLink to = {`${match.url}/${person.id}`}>
                {`${person.firstName} ${person.lastName}`}
            </NavLink>
        </div>)
    return (
        <>
            <div>
                {peoples}
            </div>
            <Route path = {`${match.path}/:personId`}>
                <Person people={content.contactProfiles} />
            </Route>
        </>
    )
}