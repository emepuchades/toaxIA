import { useState, useEffect } from 'react'

function ClassifyIA({ timeline, error }) {

    return (
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div>
                {error ?
                    <span>{ error}</span>
                    : <p>Timeline</p>
                }
            </div>
        </div>
    )
}

export default ClassifyIA
