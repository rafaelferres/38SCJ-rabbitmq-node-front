import * as React from "react";

export default function Form() {
    const [temperatura, setTemperatura] = React.useState(20);
    const [umidade, setUmidade] = React.useState(25);

    return (
        <main className="w-full max-w-screen-xl relative mx-auto lg:w-auto p-6">
            <div className="bg-white rounded-lg p-6 shadow">
                <form>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="idDrone">
                            Identificador do Drone
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="idDrone" id="idDrone" type="number"/>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="latitude">
                            Latitude
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="latitude" id="latitude" type="number"/>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="logintude">
                            Longitude
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="logintude" id="logintude" type="number"/>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="temperatura">
                            Temperatura
                        </label>
                        <input className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-3 w-128 focus:outline-none" type="range" min="-25" max="40" step="1"  value={temperatura} name="temperatura" id="temperatura" onChange={(e) => setTemperatura(e.target.value)}/>  { temperatura && <span className="pl-4">{temperatura}ºC</span> }
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="umidade">
                            Umidade
                        </label>
                        <input className="rounded-lg overflow-hidden appearance-none bg-gray-300 h-3 w-128 focus:outline-none" type="range" min="0" max="100" value={umidade} step="1" name="umidade" id="umidade" onChange={(e) => setUmidade(e.target.value)}/>  { umidade && <span className="pl-4">{umidade}%</span> }
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="ativaRastreamento">Ativar rastreamento</label>
                        <select class="shadow border rounded w-full py-2 px-3 pr-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            <option value={1}>Sim</option>
                            <option value={2}>Não</option>
                        </select>
                    </div>
                </form>
            </div>
        </main>
    )
}