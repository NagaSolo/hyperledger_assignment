import React from 'react'
import  {Form, Icon, Button} from 'react-bulma-components'
import 'bulma/css/bulma.min.css';
import axios from 'axios';
import { Tab } from '../components/Tab';

export const Occupation = () => {
    const [skill, setSkill] = React.useState<string>("")
    const [position, setPosition] = React.useState<string>("")
    const [experience, setExperience] = React.useState<string>("")
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const BASE_URL  = 'http://localhost:8444';
            setLoading(true);
            const { data } = await axios.post(`${BASE_URL}`, {
                skill, position, experience
            });

            console.log("name res => ", data);

            if (data.error) {
                console.log(data.error);
                setLoading(false);
            }

            if (data.success) {
                setExperience("");;
                setPosition("");;
                setSkill("");;
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
                                    <p className="subtitle has-text-centered is-2">User Occupation Form</p>
                                    <form onSubmit={handleSubmit}>
                                        <input 
                                            type="text"
                                            className="input is-medium mt-5"
                                            value={position}
                                            placeholder="Enter your Position"
                                            onChange={(e) => setPosition(e.target.value)}
                                        />
                                        <input 
                                            type="text"
                                            className="input is-medium mt-5 "
                                            value={experience}
                                            placeholder="Enter your Experience"
                                            onChange={(e) => setExperience(e.target.value)}
                                        />
                                        <input 
                                            type="text"
                                            className="input is-medium mt-5 mb-5"
                                            value={skill}
                                            placeholder="Enter your Skill "
                                            onChange={(e) => setSkill(e.target.value)}
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
