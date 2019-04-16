import React, { useEffect } from 'react'
export default function ContestantDetail({ contestant, close }) {
    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [])

    const startClose = () => {
        // Animate out of view then close
        close();
    };

    return (
        <>
            <div className="backdrop" onClick={startClose} />
            <div className="detail">
                <div className="image">
                    <img src={contestant.imageUrl} alt={`${contestant.name}'s Profile Picture`} />
                </div>
                <div className="name">{contestant.name}</div>
            </div>
            <style scoped jsx>{`
                .backdrop {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: rgba(0, 0, 0, .8);
                    z-index: 10;
                }
                .detail {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 88%;
                    max-width: 400px;
                    margin: 0 auto;
                    background: #fff;
                    border-radius: 7px;
                    min-height: 200px;
                    z-index: 100;
                    overflow: hidden;
                    box-shadow: 0 20px 30px -15px rgba(0, 0, 0, .06);
                }
                .image {
                    width: 100%;
                    height: 300px;
                }
                .image img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .name {
                    font-size: 1.1rem;
                    color: slategrey;
                    padding: 1rem;
                    text-align: center;
                }
            `}</style>
        </>
    )
}

