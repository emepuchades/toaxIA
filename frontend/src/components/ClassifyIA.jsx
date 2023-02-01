import { useState, useEffect } from 'react'

function ClassifyIA({ userTwitter }) {
    const [classify, setClassify] = useState([]);

    useEffect(() => {
    }, []);

    return (
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <div>            {
                userTwitter !== '' ?
                    classify ?
                        classify.map(item => {
                            return (
                                <div key={item.id}>
                                    <p>{item.input}</p>
                                    <p>{item.prediction}</p>
                                </div>
                            )
                        })
                        : null
                    : null
            }
            </div>
        </div>
    )
}

export default ClassifyIA
