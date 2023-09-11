// Варіант завдання 1 - picture 3 -cell 4 - city 7 - email 9 - coordinates
import './PeopleInformation.css'
export default function PeopleInformation({picture,cell, city, email, coordinates}) {
    return(
        <div className="people-informaion">
            <img src={picture} alt="" />
            <div className="description">
                <p>Cell: {cell}</p>
                <p>City: {city}</p>
                <p>Email: <span>{email}</span></p>
                <p>Coordinates: latitude({coordinates.latitude}), longitude({coordinates.longitude})</p>
                <></>
            </div>
        </div>
    )
}