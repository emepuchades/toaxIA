import React from 'react'

function Characteristics({ percentageTotal}) {
    return (
        <div class="relative overflow-x-auto">
            <div class="gap-4 sm:grid sm:grid-cols-2">
                <div>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Positivo - {percentageTotal.Positivo * 10} % </dt>
                    <dd class="grid grid-cols-3 gap-4">
                        <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2 col-start-1 col-end-5">
                            <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: percentageTotal.Positivo * 10 + '%' }}></div>
                        </div>
                    </dd>
                </div>
                <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Toxico - {percentageTotal.Toxico * 10} %</dt>
                    <dd class="flex items-center">
                        <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                            <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: percentageTotal.Toxico * 10 + '%' }}></div>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Developer - {percentageTotal.Developer * 10} %</dt>
                    <dd class="flex items-center mb-3">
                        <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                            <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: percentageTotal.Developer * 10 + '%' }}></div>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Gamer - {percentageTotal.Gamer * 10} %</dt>
                    <dd class="flex items-center mb-3">
                        <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                            <div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: percentageTotal.Gamer * 10 + '%' }}></div>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export default Characteristics