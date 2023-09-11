import { useState } from "react";
import PeopleInformation from "../PeopleInformation/PeopleInformation";
import './PersonList.css'

export default function PersonList(){

    //Список завантажених персон
    const [personList, setPersonList] = useState([]);
    const [error, setError] = useState(null);

    async function getPerson(){
        try {
            const response = await fetch('https://randomuser.me/api');
            if (!response.ok) {
                throw new Error(`HTTP error! Статус: ${response.status}`);
            }
            const data = await response.json();
            setPersonList(prevArray => [...prevArray, ...data.results]);
            setError(null); 
        } catch (error) {
            console.error('Помилка отримання даних: ', error);
            setError(error.message); 
        }
    }

    const personListElements = personList.map((elem, index) => {
        return(
            <PeopleInformation 
                key={index} 
                picture = {elem.picture.large}
                cell = {elem.cell}
                city ={elem.location.city}
                email ={elem.email}
                coordinates = {elem.location.coordinates}/>
        )
    })
    console.log(personList)
    return(
        <div className="container">
            <div className="download-section">
                <button onClick={getPerson} className="download">Download</button>
                {error && <p className="error-message">Error: {error}</p>}
            </div>
            <div className="list-section">
                {personListElements}
            </div>
        </div>
    )
}