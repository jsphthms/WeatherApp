import React from 'react'

function Weather({ city, temp, country, humidity, desc, error }) {
    return (
        <div className="weather__info">
            {city && country &&
                <h2 className='weather__key'>Location: <span className='weather__value'>{city}, {country}</span></h2>
            }
            {temp &&
                <p className='weather__key'>Temperature: <span className='weather__value'>{temp}</span> </p>
            }
            {humidity &&
                <p className='weather__key'>Humidity: <span className='weather__value'>{humidity}</span> </p>
            }
            {desc &&
                <p className='weather__key'>Conditions: <span className='weather__value'>{desc}</span></p>
            }
            {error &&
                <p className="weather_error">{error}</p>
            }
        </div>
    )
}

export default Weather
