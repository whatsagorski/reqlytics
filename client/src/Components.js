import axios from 'axios';
import { useState } from 'react';

export default function JobReqURL() {

    const [formValue, setformValue] = useState({
        jobrequrl: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formValue)
        const urlFormData = new FormData();
        urlFormData.append(formValue,formValue)

        console.log('form data:' + urlFormData)
        const res = axios.post('http://localhost:8080/jobreq-url', formValue,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    const handleChange = (e) => {
        console.log('name: ' + e.target.name)
        console.log('value: ' + e.target.value)
        setformValue(formValue => ({
            ...formValue,
            jobrequrl: e.target.value
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Job Req URL:
                <input
                    type="url"
                    name="jobrequrl"
                    value={formValue.jobrequrl}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}