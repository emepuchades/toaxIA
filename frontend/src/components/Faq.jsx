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
        </div>
    )
}

export default Faq