// Варіант 15 номери рядків в таблиці:
// Номер рядка в таблиці 1 - ПІБ, 2- Група; 3- Факультет;
// 8- Адреса; 10- Telegram;
import { useState } from "react";
import './Form.css'

export default function Form(){
    const regexFullName = /^[А-ЯІЇЄҐ][а-яіїєґ]+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    const regexGroup = /[А-ЯІЇЄҐ]{2}\-[0-9]{2}$/;
    const regexFaculty = /^Ф[А-ЯІЇЄҐ]+$/;
    const regexAddress = /^м\. [А-ЯІЇЄҐ][а-яіїєґ']+$/;
    const regexTelegram = /@[A-Za-z]_([A-Za-z]+)/;


    const [data, setData] = useState({
        fullName: '',
        group: '',
        faculty: '',
        address: '',
        telegram: ''

    });


    function errorStyle (regex, category){
        return regex.test(category) ? {backgroundColor: 'white'}: category.length > 0 ? {backgroundColor: 'rgb(236, 159,159)'}: {backgroundColor: 'white'};
    }
    const [dataIsCorrect, setDataIsCorrect] = useState(false)

    function handleChange(e){
        if(dataIsCorrect){
            setDataIsCorrect(false)
        }
        const {name, value} = e.target;
        setData(preventValue => {
            return {
                ...preventValue,
                [name]: value
            }
        })
    }
    function handleSubmit(e){
        e.preventDefault();

        if(regexFullName.test(data.fullName) && 
            regexGroup.test(data.group) && regexFaculty.test(data.faculty) &&
            regexAddress.test(data.address)  && regexTelegram.test(data.telegram) ){
                setDataIsCorrect(true)
        }else{
            setDataIsCorrect(false)
            alert('Данні введено некоректно')
        }
    }
    return(
        <>
            <div className="form-section">
                <h1>Форма для введення даних</h1>
                <form onSubmit={handleSubmit} className="form" >
                    <input placeholder="ПІБ"
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={data.fullName}
                        onChange={handleChange}
                        style={errorStyle(regexFullName,data.fullName)}/>

                    <input placeholder="Група"
                        id="group"
                        type="text"
                        name="group"
                        value={data.group}
                        onChange={handleChange}
                        style={errorStyle(regexGroup, data.group)}/>

                    <input placeholder="Факультет"
                        id='faculty'
                        type="text"
                        name="faculty"
                        value={data.faculty}
                        onChange={handleChange}
                        style={errorStyle(regexFaculty, data.faculty)}/>

                    <input placeholder="Адреса"
                        id='address'
                        type="text"
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                        style={errorStyle(regexAddress, data.address)}/>

                    <input placeholder="telegram"
                        id="telegram"
                        type="text"
                        name="telegram"
                        value={data.telegram}
                        onChange={handleChange}
                        style={errorStyle(regexTelegram, data.telegram)}/>
                    <button type="submit" className="submit-button">Підтвердити</button>
                </form>
            </div>
            {dataIsCorrect && 
            <div className="form-result">
                <h3>Дані успішно сформовані</h3>
                <p><span>ПІБ:</span> {data.fullName}</p>
                <p><span>Група:</span> {data.group}</p>
                <p><span>Факультет:</span> {data.faculty}</p>
                <p><span>Адреса:</span> {data.address}</p>
                <p><span>Telegram: </span>{data.telegram}</p>
            </div>}
        </>

    )
}