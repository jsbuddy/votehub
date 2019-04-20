import { IconButton } from "./Button";
import { FiMoreHorizontal } from "react-icons/fi";

const Contestant = ({ name = '', count = 0, percentage = 0, voted = false, voting = false, setSelected, showDetail }) => {
    return (
        <>
            <div className={`contestant ${voted && 'voted'}`}>
                <label className="details">
                    <span className={`checkbox ${voting && 'show'}`}>
                        <span className="wrapper">
                            <input type="radio" name="contestant" id="contestant" onChange={setSelected} disabled={!voting} />
                        </span>
                    </span>
                    <span className="name">
                        <div className="flex align-center">
                            <span className="image"><IconButton icon={<FiMoreHorizontal />} className="rounded small blue" onClick={showDetail}></IconButton></span>
                            {name}
                        </div>
                        <span className="progress" style={{ width: `${percentage}%` }}></span>
                    </span>
                    <span className="count">{count}</span>
                </label>
            </div>
            <style scoped jsx>{`
                .contestant {
                    display: flex;
                    align-items: center;
                    margin: 1rem 0;
                    width: 100%;
                    overflow: hidden;
                }
                .contestant .details {
                    display: flex;
                    color: slategrey;
                    background: rgba(0, 0, 0, .05);
                    border-radius: 30px;
                    flex: 1;
                }
                .contestant .checkbox {
                    width: 0;
                    transition: all .2s ease;
                    overflow: hidden;
                }
                .contestant .checkbox.show {
                    width: 40px;
                }
                .contestant .checkbox .wrapper {
                    display: flex;
                    width: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                }
                .contestant .name {
                    border-radius: 30px 0 0 30px;
                    padding: .9rem .7rem .9rem 1.5rem;
                    position: relative;
                    flex: 1;
                }
                .contestant .name *:not(.progress) {
                    z-index: 2;
                    position: relative;
                }
                .contestant .count {
                    border-radius: 3px 30px 30px 3px;
                    padding: 10px 20px;
                    background: rgba(0, 0, 0, .06);
                    color: slategrey;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .contestant.voted .count {
                    background: #2ed605;
                    color: #fff;
                }
                .contestant .progress {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    display: block;
                    border-radius: inherit;
                    background: #4776E6;  /* fallback for old browsers */
                    background: -webkit-linear-gradient(to right, #8E54E9, #4776E6);  /* Chrome 10-25, Safari 5.1-6 */
                    background: linear-gradient(to right, #8E54E9, #4776E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                    opacity: .1;
                    z-index: 1;
                }
                .image {
                    margin-right: 10px;
                }
            `}</style>
        </>
    )
};

export default Contestant;