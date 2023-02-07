import positivoIMG from '../../assets/images/positivo.png'
import toxicoIMG from '../../assets/images/toxico.png'
import developerIMG from '../../assets/images/developer.png'
import gamerIMG from '../../assets/images/gamer.png'

function Characteristics({ percentageTotal }) {
    const percentage = percentageTotal[0]
    return (
        <div class="relative overflow-x-auto mb-10">
            <div class="gap-4 sm:grid sm:grid-cols-2">
                <div>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        <div class="flex mb-3">
                            <img src={positivoIMG} alt="" class="h-5 w-5 flex" />
                            <p className="ml-2"> Positivo: {percentage.Positivo * 10} %</p>
                        </div>
                    </dt>
                    <dd class="grid grid-cols-3 gap-4">
                        <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2 col-start-1 col-end-5">
                            <div class="bg-blue-500 h-2.5 rounded dark:bg-blue-500" style={{ width: percentage.Positivo * 10 + '%' }}></div>
                        </div>
                    </dd>
                </div>
                <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        <div class="flex mb-3">
                            <img src={toxicoIMG} alt="" class="h-5 w-5 flex" />
                            <p className="ml-2"> Tóxico: {percentage.Toxico * 10} %</p>
                        </div>
                    </dt>
                    <dd class="flex items-center">
                        <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                            <div class="bg-red-500 h-2.5 rounded dark:bg-blue-500" style={{ width: percentage.Toxico * 10 + '%' }}></div>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        <div class="flex mb-3">
                            <img src={developerIMG} alt="" class="h-5 w-5 flex" />
                            <p className="ml-2"> Developer: {percentage.Developer * 10} %</p>
                        </div>
                    </dt>
                    <dd class="flex items-center mb-3">
                        <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                            <div class="bg-purple-600 h-2.5 rounded dark:bg-blue-500" style={{ width: percentage.Developer * 10 + '%' }}></div>
                        </div>
                    </dd>
                </dl>
                <dl>
                    <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                        <div class="flex mb-3">
                            <img src={gamerIMG} alt="" class="h-5 w-5 flex" />
                            <p className="ml-2"> Gamer: {percentage.Gamer * 10} %</p>
                        </div>
                    </dt>
                    <dd class="flex items-center mb-3">
                        <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                            <div class="bg-green-600 h-2.5 rounded dark:bg-blue-500" style={{ width: percentage.Gamer * 10 + '%' }}></div>
                        </div>
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export default Characteristics