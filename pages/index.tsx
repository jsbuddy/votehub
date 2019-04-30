import { useContext, useEffect, useState } from "react";
import Competition from "../components/Competition";
import Head from 'next/head';
import { fetchCompetitions, vote, refreshCompetition } from '../components/Api';
import FacebookButton from "../components/FacebookButton";
import { AppContext } from "../components/context";
import { Button } from "../components/Button";
import { FiPower } from "react-icons/fi";

export default function Home() {
    const { state, dispatch } = useContext(AppContext, undefined);
    const [votingId, setVotingId] = useState(null);
    const [voting, setVoting] = useState(false);
    const [refreshing, setRefreshing] = useState([]);

    useEffect(() => {
        if (!state.loaded) {
            fetchCompetitions().then(competitions => {
                dispatch({ type: 'SET_COMPETITIONS', payload: competitions });
            })
        }
    }, [])

    const startVote = async (competitionId: string, contestantId: string) => {
        setVoting(true);
        const data = {
            vote: { ...state.auth.user, contestantId }, competitionId
        };
        const competition = await vote(data);
        dispatch({ type: 'UPDATE_COMPETITION', payload: competition });
        setVoting(false);
        setVotingId(null);
    }

    const refresh = async (competitionId: string) => {
        setRefreshing([...refreshing, competitionId]);
        const competition = await refreshCompetition(competitionId);
        dispatch({ type: 'UPDATE_COMPETITION', payload: competition });
        setRefreshing([...refreshing].filter(c => c !== competitionId));
    }

    return (
        <>
            <Head>
                <title>Competitions</title>
            </Head>
            {
                !state.auth.authenticated ? (
                    <div className="flex align-center justify-center">
                        <div className="alert flex space-between align-center">
                            <span>Login to vote</span>
                            <FacebookButton onAuth={(user: any) => dispatch({ type: 'AUTHENTICATE', payload: user })} />
                        </div>
                    </div>
                ) : (
                        <div className="flex align-center justify-center">
                            <div className="alert flex space-between align-center green">
                                <div className="flex align-center">
                                    <div className="image"><img src={state.auth.user.picture} alt={`${state.auth.user.name}s picture`} /></div>
                                    <span>You are logged in as {state.auth.user.name}</span>
                                </div>
                                <Button text="Logout" icon={<FiPower />} className="red rounded" onClick={() => dispatch({ type: 'DEAUTHENTICATE' })} />
                            </div>
                        </div>
                    )
            }
            {
                state.competitions.sort((a, b) => new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1).map(competition => {
                    return (
                        <Competition
                            key={competition._id}
                            competition={competition}
                            votingId={votingId}
                            canVote={state.auth.authenticated}
                            setVotingId={setVotingId}
                            vote={startVote}
                            currentUser={state.auth.user}
                            voting={voting}
                            refreshing={refreshing}
                            onRefresh={() => refresh(competition._id)}
                        />
                    )
                })
            }
            <style scoped jsx>{`
                .alert {
                    background: #214bf328;
                    color: #ccc;
                    border-radius: 4px;
                    padding: 1.2rem;
                    margin-bottom: 20px;
                    border: 1px solid #363e5b0f;
                    width: 100%;
                }
                .alert .image {
                    min-width: 30px;
                    max-width: 30px;
                    min-height: 30px;
                    max-height: 30px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: 10px;
                }
                .alert .image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .alert.green {
                    background: rgba(61, 243, 33, 0.24);
                }
                .alert span {
                    margin-right: 20px;
                }
            `}</style>
        </>
    );
}
