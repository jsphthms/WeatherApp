import React from 'react'

function Form({ getWeather }) {
    return (
        <div>
            <form className='form-inline' onSubmit={getWeather}>
                <input type="text" name='city' placeholder='City...' />
                <input type="text" name='state' placeholder='State...' />
                <input type="text" name='country' placeholder='Country...' />
                <button className='block' type="submit">Get Weather</button>
            </form>
        </div>
    )
}

export default Form
