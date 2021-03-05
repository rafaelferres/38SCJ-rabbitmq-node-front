import * as React from "react";
import { faExclamationTriangle  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Form() {
    const [latitude, setLatitude] = React.useState();
    const [latitudeError, setLatitudeError] = React.useState(false);

    const [longitude, setLongitude] = React.useState();
    const [longitudeError, setLongitudeError] = React.useState(false);

    const [temperatura, setTemperatura] = React.useState(20);
    const [umidade, setUmidade] = React.useState(25);

    function setLatitudeValidation(e) {
        const latValue = Number(e.target.value)
        isFinite(latValue) && Math.abs(latValue) <= 90 && !isNaN(latValue)  ? setLatitudeError(false) : setLatitudeError(true)

        if(!isNaN(latValue)) 
            setLatitude(latValue)
        else 
            setLatitude(e.target.value)
    }

    function setLongitudeValidation(e) {
        const longValue = Number(e.target.value)
        isFinite(longValue) && Math.abs(longValue) <= 180 && !isNaN(longValue) ? setLongitudeError(false) : setLongitudeError(true)

        if(!isNaN(longValue)) 
            setLongitude(longValue)
        else 
            setLongitude(e.target.value)
      }

    return (
        <main className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6">
            <div className="bg-white rounded-lg p-6 shadow">
                <form>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idDrone">
                            Identificador do Drone
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="idDrone" id="idDrone" type="number"/>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="latitude">
                            Latitude
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="latitude" id="latitude" value={latitude}  onChange={(e) => setLatitudeValidation(e)} type="text"/>
                        {latitudeError && <div className="mt-4 text-red-600 text-sm p-4 bg-red-100 rounded">
                            <FontAwesomeIcon icon={faExclamationTriangle}/> <span className="pl-2">Latitude Inválida</span>
                        </div>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="logintude">
                            Longitude
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="logintude" id="logintude" type="text" value={longitude} onChange={(e) => setLongitudeValidation(e)}/>
                        {longitudeError && <div className="mt-4 text-red-600 text-sm p-4 bg-red-100 rounded">
                            <FontAwesomeIcon icon={faExclamationTriangle}/> <span className="pl-2">Longitude Inválida</span>
                        </div>}
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="temperatura">
                            Temperatura
                        </label>
                        <input className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-3 w-128 focus:outline-none" type="range" min="-25" max="40" step="1"  value={temperatura} name="temperatura" id="temperatura" onChange={(e) => setTemperatura(e.target.value)}/>  { temperatura && <span className="pl-4">{temperatura}ºC</span> }
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="umidade">
                            Umidade
                        </label>
                        <input className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-3 w-128 focus:outline-none" type="range" min="0" max="100" value={umidade} step="1" name="umidade" id="umidade" onChange={(e) => setUmidade(e.target.value)}/>  { umidade && <span className="pl-4">{umidade}%</span> }
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ativaRastreamento">Ativar rastreamento</label>
                        <select className="shadow border rounded w-full py-2 px-3 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value={1}>Sim</option>
                            <option value={2}>Não</option>
                        </select>
                    </div>
                </form>
            </div>
        </main>
    )
}