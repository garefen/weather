import React, {useEffect, useState} from 'react';

import './index.css'
import api from '../services/api'

import Day from '../day'

export default function Dashboard() {
    const [datas, setDatas] = useState({});
    useEffect(() => {
        async function loadWeather() {
            const response = await api.get('', {});

            let newData = response.data.list.map(item => {
                let data = new Date(item.dt*1000);
                return data
            });
            const date_sort_asc = (date1, date2) => {
                if (date1 > date2) return 1;
                if (date1 < date2) return -1;
                return 0;
            };

            newData = newData.sort(date_sort_asc);
            let lastDate = newData[0].getDay() - 1;
            newData = newData.map(item => {
                if (item.getDay() !== lastDate) {
                    lastDate = item.getDay();
                    return parseInt((item.getTime() / 1000).toFixed(0))
                } else {
                    lastDate = item.getDay();
                }
            });          

            response.data.list = response.data.list.map(item => {
                if (newData.includes(item.dt)) return item
            }) 

            setDatas(response.data);
        }
        loadWeather();
    }, [])
    
    return (

        
        <div id="dashboard">
            {Object.keys(datas).length > 0 ? (
                <>
                    {datas.list.map((day, key) => {
                        if (day) {
                            return <Day day={day} key={key}></Day>
                        }
                    })} 
                </>
            ) : (
                <>
                </>
            )}
        </div>
    )
}