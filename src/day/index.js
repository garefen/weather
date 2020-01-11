import React, {useEffect, useState} from 'react';

import './index.css'
// import nuvem from '../assets/nuvem.png'

const Day = props => {
    const [dt, setDt] = useState('');
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    useEffect(() => {
        console.log("props");
        console.log(props);
        let data = new Date(props.day.dt_txt);
        setDt(data.getDay());
    }, []);
    return (
        <div id="day">
            <span>{weekDays[dt]}</span>
            <span className="backspan">{props.day.dt_txt.slice(5, 10).split("-").reverse().join().replace(",", "/")}</span>
            <img src={"http://openweathermap.org/img/w/" + props.day.weather[0].icon + ".png"} alt={props.day.dt} />
            <div className="temperature">
                <span className="max">{Number(props.day.main.temp_max - 275.15).toFixed(1)}º</span>
                <span className="min">{Number(props.day.main.temp_min - 275.15).toFixed(1)}º</span>
            </div>
        </div>
    )
};

export default Day;
