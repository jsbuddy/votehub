interface ButtonProps {
    icon?: React.ReactNode,
    className?: string,
    text: string,
    onClick: any
}

export const Button = ({ icon, text, className = '', ...props }: ButtonProps) => {
    return (
        <>
            <button className={`btn ${className}`} {...props}> <span className="icon">{icon}</span> {text}</button>
            <style scoped jsx>{`
                .btn {
                    border: 0;
                    position: relative;
                    padding: .5rem 1rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(0, 0, 0, .1);
                    color: slategrey;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .btn.rounded {
                    border-radius: 30px;
                }
                .btn:hover {
                    background: rgba(0, 0, 0, .2);
                }
                .icon {
                    margin-right: 10px;
                }
                .icon * {
                    vertical-align: middle;
                    margin-bottom: 1px;
                }
                .btn.green {
                    background: #4caf50;
                    color: #fff;
                }
                .btn.blue {
                    border: 1px solid #245ac7;
                    background: none;
                    color: #245ac7;
                }
                .btn:not(:disabled):hover,
                .btn:not(:disabled):active {
                    background: #1847a7;
                    box-shadow: 0 10px 12px -7px rgba(0, 0, 0, .08);
                    color: #fff;
                }
                .btn:disabled {
                    border: 0;
                    cursor: not-allowed;
                }
                .btn:disabled::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: inherit;
                    background: rgba(255, 255, 255, .5);
                    z-index: 1;
                }
            `}</style>
        </>
    )
}

interface IconButtonProps {
    icon: React.ReactNode;
    className: string,
    onClick: any;
}

export const IconButton = ({ icon, className, ...props }: IconButtonProps) => {
    return (
        <>
            <button className={`btn ${className}`} {...props}>{icon}</button>
            <style scoped jsx>{`
                .btn {
                    border: 0;
                    position: relative;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: rgba(0, 0, 0, .05);
                    border-radius: 4px;
                    color: slategrey;
                    cursor: pointer;
                    transition: all .2s ease;
                }
                .btn.small {
                    width: 30px;
                    height: 30px;
                }
                .btn.rounded {
                    border-radius: 50%;
                }
                .btn:not(:disabled):hover {
                    transform: translateY(-2px);
                }
                .btn.red {
                    color: rgb(244, 67, 54);
                    background-color: rgba(244, 67, 54, .1);
                }
                .btn.red:hover {
                    box-shadow: 0 5px 10px -3px rgba(244, 67, 54, .15);
                    background-color: rgba(244, 67, 54, .175);
                }
                .btn.green {
                    color: rgb(76, 175, 80);
                    background-color: rgba(76, 175, 80, .1);
                }
                .btn.green:not(:disabled):hover {
                    background-color: rgba(76, 175, 80, .175);
                    box-shadow: 0 5px 10px -3px rgba(76, 175, 80, .15);
                }
                .btn.grey {
                    color: slategrey;
                    background-color: rgba(0, 0, 0, .05);
                }
                .btn.grey:not(:disabled):hover {
                    background-color: rgba(0, 0, 0, .07);
                    box-shadow: 0 5px 10px -3px rgba(0, 0, 0, .15);
                }
                .btn:disabled {
                    border: 0;
                    cursor: not-allowed;
                }
                .btn:disabled::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: inherit;
                    background: rgba(255, 255, 255, .5);
                    z-index: 1;
                }
            `}</style>
        </>
    )
}