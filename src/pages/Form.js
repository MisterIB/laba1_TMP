import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Form.css'

const Form = () => {

    const [name, setName] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value); 
    };
    const handleManufacturerChange = (e) => {
        setManufacturer(e.target.value);
    };
   

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/items', { name, manufacturer })
            .then(() => {
                console.log("Данные успешно отправлены на сервер");
                navigate('/')
            })
            .catch((error) => {
                console.error("Ошибка отправки данных на сервер: ", error);
            });
    };

    return (
        <div className="form_page">
            <form onSubmit={handleSubmit}>
                <h1>Добавление детали</h1>
                <label>
                    Имя детали:
                    <input type="text"
                        value={name}
                        onChange={handleNameChange}
                        required
                   />
                </label>
                <br/>
        
                <label>
                    Производитель:
                    <input
                        type="text"
                        value={manufacturer}
                        onChange={handleManufacturerChange}
                        required
                    />
                </label>
                <br/>

                <button type="submit">Сохранить</button>
            </form>
        </div>
    );  
};
export default Form;
