import Wrapper from "../../components/Wrapper";
import { Button } from "../../components/Button";
import { FaCheck, FaArrowLeft } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import Input from "../../components/Input";
import { useState, useContext } from "react";
import { AppContext } from "../../components/context";
import Router from "next/router";
import Head from "next/head";
import { add } from "../../components/Api";

const New = () => {
    const { dispatch } = useContext(AppContext, undefined);
    const [loading, setLoading] = useState(false);

    const [competition, setCompetition] = useState({
        name: '', deadline: '', contestants: [
            { name: '', imageUrl: '', id: 1 },
            { name: '', imageUrl: '', id: 2 },
        ]
    });

    const updateContestant = (id: any, field: string, value: string) => {
        let contestants = competition.contestants;
        contestants = contestants.map((c: any) => {
            if (c.id === id) c[field] = value;
            return c;
        })
        setCompetition({ ...competition, contestants });
    };

    const isValid = (competition: any) => {
        let error = false;
        if (!competition.name || !competition.deadline) error = true;
        competition.contestants.forEach((contestant: any) => {
            if (!contestant.name.trim() || !contestant.imageUrl.trim()) {
                error = true;
            }
        })
        return !error;
    }

    const submit = async () => {
        if (!isValid(competition)) return;
        setLoading(true);
        try {
            const newCompetition = await add(competition);
            if (newCompetition) {
                dispatch({ type: 'ADD_COMPETITION', payload: newCompetition })
                Router.push('/');
            }
        } catch (error) {
            console.dir({ error });
        }
        setLoading(false);
    };

    return (
        <>
            <Head>
                <title>New Competition</title>
            </Head>
            <Wrapper>
                <div className="header flex space-between">
                    <span><Button onClick={() => Router.back()} icon={<FaArrowLeft />} text="Back" className="rounded"></Button></span>
                    <span><Button disabled={loading} onClick={submit} icon={<FaCheck />} className="green rounded" text="Save"></Button></span>
                </div>
                <main className="body">
                    <div className="flex">
                        <div className="flex-1">
                            <Input placeholder="Competition Name" type="text" value={competition.name} onChange={(e: any) => setCompetition({ ...competition, name: e.target.value })} />
                        </div>
                        <div className="flex-1">
                            <Input placeholder="Competition Deadline" type="date" value={competition.deadline} onChange={(e: any) => setCompetition({ ...competition, deadline: e.target.value })} />
                        </div>
                    </div>
                </main>
            </Wrapper>
            <div className="items">
                {
                    competition.contestants.map((contestant: any) => {
                        return (
                            <Wrapper className="small" key={contestant.id}>
                                <div className="item flex flex-column">
                                    <span><Input placeholder="Full name" type="text" value={contestant.name} onChange={(e: any) => updateContestant(contestant.id, 'name', e.target.value)} /></span>
                                    <span><Input placeholder="Image Url" type="url" value={contestant.imageUrl} onChange={(e: any) => updateContestant(contestant.id, 'imageUrl', e.target.value)} /></span>
                                </div>
                            </Wrapper>
                        )
                    })
                }
                <button className="add" onClick={() => setCompetition({ ...competition, contestants: [...competition.contestants, { name: '', imageUrl: '', id: Date.now() }] })}>
                    <FiPlusCircle />
                </button>
            </div>
            <style scoped jsx>{`
                .title {
                    color: steelblue;
                    margin-bottom: 5px;
                    font-weight: 600;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .header {
                    margin-bottom: 30px;
                }
                .items {
                    display: grid;
                    margin-top: 20px;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 1.5rem;
                    min-height: 100px;
                    padding: 2rem;
                }
                @media (max-width: 700px) {
                    .items {
                        grid-template-columns: 1fr;
                    }
                }
                .item > *:first-child {
                    margin-bottom: 5px;
                }
                .add {
                    border: 3px dashed rgba(255, 255, 255, .1);
                    border-radius: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: steelblue;
                    font-size: 1.1rem;
                    padding: 1rem;
                    background: none;
                    cursor: pointer;
                    min-height: 110px;
                }
                .add:hover {
                    background: rgba(0, 0, 0, .02);
                }
            `}</style>
        </>
    );
}

export default New;