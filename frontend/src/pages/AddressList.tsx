import React from 'react'
import axios from 'axios';

export const AddressList = () => {
    const [data, setData] = React.useState<Array<string | any>>([])

    /**
     * @fetchData gets the list addresses in the database
    */
    const fetchData = async () => {
        const BASE_URL  = 'http://localhost:8446';
        try {
            const response = await axios.get(`${BASE_URL}`)
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <section className="section is-paddingless-horizontal">
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content">
                        <div className="columns">
                            <div className="column">
                                <div className="content">
                                    <p className="subtitle has-text-centered is-1">Address List</p>
                                    <br />
                                    <div className="is-centered">
                                        <ul>
                                            {data.map(item => {
                                                <li key={item._id}>
                                                    <span>{item.city | item.postcode | item.street}</span>
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
