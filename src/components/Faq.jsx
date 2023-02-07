import React from 'react'

function Faq() {
    return (
        <div className="self-center">
            <div className="mt-4 relative">
                <h1>FAQ</h1>
                <h1>Que categorias tiene la IA ?</h1>
                <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                    La IA esta entrenada para que sepa si tu perfil es toxico o no pero tambien hay otras categorias como:
                    developer, gamer. Esto es un ejemplo de como se puede entrenar a la IA para diferentes categorias o perfiles.
                </p>
                <h1>Que API utilizas ?</h1>
                <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                    LA api de cohere, utlizando la ruta classify.
                </p>

                <p>
                    Como es la api que se recibe
                </p>
            </div>

            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Características
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Porcentage
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Positivo
                            </th>
                            <td class="px-6 py-4">
                                {timeline.percentageTotal.Positivo * 10}
                            </td>

                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Toxico
                            </th>
                            <td class="px-6 py-4">
                                {timeline.percentageTotal.Toxico * 10}
                            </td>
                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Developer
                            </th>
                            <td class="px-6 py-4">
                                {timeline.percentageTotal.Developer * 10}
                            </td>

                        </tr>
                        <tr class="bg-white dark:bg-gray-800">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Gamer
                            </th>
                            <td class="px-6 py-4">
                                {timeline.percentageTotal.Gamer * 10}
                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="flex items-center mb-5">
                <p class="ml-2 font-medium text-gray-900 dark:text-white">Eres Toxico</p>
                <p class="bg-blue-100 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800">
                    {timeline.timelineUser.percentageTotal.Toxico * 10} %</p>
                <p class="ml-2 font-medium text-gray-900 dark:text-white">{timeline.timelineUser.isToxic}</p>
                <a href="#" class="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">compartir</a>
            </div>

            <div class="gap-8 sm:grid sm:grid-cols-2">
                <div>

                    <dl>
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Positivo</dt>
                        <dd class="flex items-center mb-3">
                            <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: timeline.timelineUser.percentageTotal.Positivo * 10 + '%' }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 dark:text-gray-400"> {timeline.timelineUser.percentageTotal.Positivo * 10} %</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Toxico</dt>
                        <dd class="flex items-center">
                            <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: timeline.timelineUser.percentageTotal.Toxico * 10 + '%' }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 dark:text-gray-400"> {timeline.timelineUser.percentageTotal.Toxico * 10} %</span>
                        </dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Developer</dt>
                        <dd class="flex items-center mb-3">
                            <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: timeline.timelineUser.percentageTotal.Developer * 10 + '%' }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 dark:text-gray-400"> {timeline.timelineUser.percentageTotal.Developer * 10} %</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Gamer</dt>
                        <dd class="flex items-center mb-3">
                            <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: timeline.timelineUser.percentageTotal.Gamer * 10 + '%' }}></div>
                            </div>
                            <span class="text-sm font-medium text-gray-500 dark:text-gray-400"> {timeline.timelineUser.percentageTotal.Gamer * 10} %</span>
                        </dd>
                    </dl>
                </div>
            </div>
        
        </div>
    )
}

export default Faq