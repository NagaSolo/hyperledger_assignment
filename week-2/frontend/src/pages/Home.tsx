import React from 'react'
import  {Form, Icon, Button} from 'react-bulma-components'
import 'bulma/css/bulma.min.css';
import axios from 'axios';
import { Tab } from '../components/Tab';

export const Home = () => {
    const [name, setName] = React.useState<string>("")
    const [username, setUsername] = React.useState<string>("")
    const [email, setEmail] = React.useState<string>("")
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const BASE_URL  = 'http://localhost:8447';
            setLoading(true);
            const { data } = await axios.post(`${BASE_URL}`, {
                name, email, username
            });

            console.log("name res => ", data);

            if (data.error) {
                console.log(data.error);
                setLoading(false);
            }

            if (data.success) {
                setName("");;
                setEmail("");;
                setUsername("");;
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
                                    <p className="subtitle has-text-centered is-2">User Details Form</p>
                                    <form onSubmit={handleSubmit}>
                                        <input 
                                            type="text"
                                            className="input is-medium mt-5"
                                            value={name}
                                            placeholder="Enter your firstName"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <input 
                                            type="text"
                                            className="input is-medium mt-5 "
                                            value={username}
                                            placeholder="Enter your Username"
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <input 
                                            type="email"
                                            className="input is-medium mt-5 mb-5"
                                            value={email}
                                            placeholder="Enter your Email "
                                            onChange={(e) => setEmail(e.target.value)}
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
        </>
    )
}
