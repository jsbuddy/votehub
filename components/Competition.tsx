import Contestant from "./Contestant";
import { IconButton, Button } from './Button';
import { FaCheck, FaTimes } from 'react-icons/fa'
import Wrapper from "./Wrapper";
import { useState, useEffect } from "react";
import ContestantDetail from "./ContestantDetail";
import { FiRefreshCw } from "react-icons/fi";

interface CompetitionProps {
    competition: any;
    votingId: boolean;
    canVote: boolean;
    setVotingId: any;
    vote: any;
    currentUser: any,
    voting: boolean,
    refreshing: Array<string>,
    onRefresh: any
}

const Competition = ({ competition, votingId, canVote, setVotingId, vote, currentUser, voting, refreshing, onRefresh }: CompetitionProps) => {
    const [selected, setSelected] = useState(null);
    const [userVote, setUserVote] = useState(null);
    const [votes, setVotes] = useState({});
    const [contestantDetail, setContestantDetail] = useState(null);

    useEffect(() => {
        const votes = competition.votes.reduce((all, current) => {
            if (currentUser && (current.facebookId === currentUser.facebookId)) setUserVote(current);
            all[current.contestantId] = all[current.contestantId] ? all[current.contestantId] + 1 : 1;
            return all;
        }, {});
        setVotes(votes);
    }, [currentUser, competition])

    const computePercentage = id => {
        const total = Object.keys(votes).reduce((total, vote) => total + parseInt(votes[vote], 10), 0);
        const current = votes[id] || 0;
        return Math.round((current / total) * 100);
    }

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
                        <span><IconButton disabled={refreshing.includes(competition._id)} icon={<FiRefreshCw />} className="rounded" onClick={onRefresh}></IconButton></span>
                    </div>
                </div>
                <div className="contestants">
                    {
                        competition.contestants.map((contestant: any) => {
                            return <Contestant
                                key={contestant._id}
                                name={contestant.name}
                                count={votes[contestant._id] ? votes[contestant._id] : 0}
                                percentage={computePercentage(contestant._id)}
                                voting={votingId === competition._id}
                                setSelected={() => setSelected(contestant._id)}
                                showDetail={() => setContestantDetail(contestant)}
                            />
                        })
                    }
                </div>
            </Wrapper>
            {
                contestantDetail && <ContestantDetail contestant={contestantDetail} close={() => setContestantDetail(null)}></ContestantDetail>
            }
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