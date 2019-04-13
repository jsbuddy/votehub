import Contestant from "./Contestant";
import { IconButton, Button } from './Button';
import { FaCheck, FaTimes } from 'react-icons/fa'
import Wrapper from "./Wrapper";
import { useState, useEffect } from "react";

interface CompetitionProps {
    competition: any;
    votingId: boolean;
    canVote: boolean;
    setVotingId: any;
    vote: any;
    currentUser: any
}

const Competition = ({ competition, votingId, canVote, setVotingId, vote, currentUser, voting }: CompetitionProps) => {
    const [selected, setSelected] = useState(null);
    const [userVote, setUserVote] = useState(null);
    const [votes, setVotes] = useState({});

    useEffect(() => {
        const votes = competition.votes.reduce((all, current) => {
            if (currentUser && (current.facebookId === currentUser.facebookId)) {
                console.log('Found!');
                setUserVote(current);
            }
            all[current.contestantId] = all[current.contestantId] ? [all[current.contestantId] + 1] : 1;
            return all;
        }, {});
        setVotes(votes);
    }, [currentUser, competition])

    return (
        <>
            <Wrapper style={{ marginBottom: '20px' }}>
                <div className="name">
                    {competition.name}
                    <div className="buttons">
                        {
                            canVote && votingId !== competition._id && !userVote && <Button className="blue" text="Vote" onClick={() => setVotingId(competition._id)}></Button>
                        }
                        {
                            (votingId === competition._id) && <>
                                <span><IconButton icon={<FaTimes />} disabled={voting} className="red rounded" onClick={() => setVotingId(null)}></IconButton></span>
                                <span><IconButton icon={<FaCheck />} disabled={!selected || voting} className="green rounded" onClick={() => vote(competition._id, selected)}></IconButton></span>
                            </>
                        }
                    </div>
                </div>
                <div className="contestants">
                    {
                        competition.contestants.map((contestant: any) => {
                            return <Contestant
                                key={contestant._id}
                                name={contestant.name}
                                count={votes[contestant._id] ? votes[contestant._id] : 0}
                                percentage={0}
                                voting={votingId === competition._id}
                                setSelected={() => setSelected(contestant._id)}
                            />
                        })
                    }
                </div>
            </Wrapper>
            <style scoped jsx>{`
                .name {
                    color: steelblue;
                    margin-bottom: 5px;
                    font-weight: 600;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .contestants {
                    padding: 1rem 0;
                }
            `}</style>
        </>
    )
}

export default Competition;