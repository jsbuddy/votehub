interface PropTypes {
    children: React.ReactNode;
    className?: string;
}

const Wrapper = ({ children, className = '', ...props }: PropTypes) => {
    return (
        <>
            <div className={`wrapper ${className}`} {...props}>
                {children}
            </div>
            <style scoped jsx>{`
                .wrapper {
                    background: #fff;
                    border-radius: 4px;
                    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .1);
                    padding: 2rem;
                    /* margin-bottom: 20px; */
                }
                .wrapper > .title {
                    color: steelblue;
                    margin-bottom: 5px;
                    font-weight: 600;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .wrapper.small {
                    padding: 1rem;
                }
            `}</style>
        </>
    )
};

export default Wrapper;