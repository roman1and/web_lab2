import React, { useState } from 'react';
import './Matrix.css';

export default function Matrix() {
    const [selectcolorItem, setSelectColorItem] = useState('white');
    const [selectedColor, setSelectedColor] = useState('#000000');

    let arr = [];
    for (let i = 0; i < 36; i++) {
        arr.push(i + 1);
    }
    const matrix = arr.map((i) => {
        return (
            <div className="square" key={i} id={`${i}`}>
                <p
                    onMouseEnter={() => randomColor(i)}
                    onClick={() => selectColor(i)}
                    onDoubleClick={() => oddColorChange(i)}
                    style={i === 15 ? { backgroundColor: selectcolorItem } : {}}
                >
                {i}
                </p>
            </div>
        );
    });

    function selectColor(id) {
        if (id === 15) {
            setSelectColorItem(selectedColor);
        }
    }

    function oddColorChange(id) {
        if (id === 15) {
            let maxElement = id + 6 - (id % 6);
    
            for (let i = id; i <= maxElement; i++) {
                if(id%2 == i%2){
                    let elem = document.getElementById(i);
                    let pElem = elem.querySelector('p');
                    pElem.style.backgroundColor = selectedColor;
                }
            }
        }
    }

    function randomColor(id) {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setSelectColorItem((prevValue) => {
            return id === 15 ? color : prevValue;
        });
    } 

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setSelectedColor(newColor);
    };

    return (
        <>
            <div className="change-color">
                <p>Вибрати колір</p>
                <input
                    type="color"
                    value={selectedColor}
                    onChange={handleColorChange}
                />
            </div>
            <div className="matrix">{matrix}</div>
    </>
    );
}