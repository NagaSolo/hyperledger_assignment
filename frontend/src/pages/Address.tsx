import React from 'react'
import  {Form, Icon, Button} from 'react-bulma-components'
import 'bulma/css/bulma.min.css';
import axios from 'axios';
import { Tab } from '../components/Tab';
import { AddressList } from './AddressList';

export const Address = () => {
    const [city, setCity] = React.useState<string>("")
    const [street, setStreet] = React.useState<string>("")
    const [postcode, setPostcode] = React.useState<string>("")
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const BASE_URL  = 'http://localhost:8446';
            setLoading(true);
            const { data } = await axios.post(`${BASE_URL}`, {
                city, street, postcode
            });

            console.log("name res => ", data);

            if (data.error) {
                console.log(data.error);
                setLoading(false);
            }

            if (data.success) {
                setCity("");;
                setPostcode("");;
                setStreet("");;
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <>
            <section className="section is-paddingless-horizontal">
                <div className="container grid is-large">
                    <div className="firstsections">
                        <div className="content">
                        <div className="columns">
                            <div className="column">
                                <div className="content">
                                    <p className="subtitle has-text-centered is-1">Assignment Exercise</p>
                                    <Tab />
                                    <br />
                                    <p className="subtitle has-text-centered is-2">User Address Form</p>
                                    <form onSubmit={handleSubmit}>
                                        <input 
                                            type="text"
                                            className="input is-medium mt-5"
                                            value={city}
                                            placeholder="Enter your City"
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                        <input 
                                            type="text"
                                            className="input is-medium mt-5 "
                                            value={street}
                                            placeholder="Enter your Street Name"
                                            onChange={(e) => setStreet(e.target.value)}
                                        />
                                        <input 
                                            type="text"
                                            className="input is-medium mt-5 mb-5"
                                            value={postcode}
                                            placeholder="Enter your Postcode "
                                            onChange={(e) => setPostcode(e.target.value)}
                                        />
                                        <button type="submit" className="button is-medium mt-5 is-info is-fullwidth">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <AddressList />
        </>
    )
}
