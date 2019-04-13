const Input = (props: any) => {
    return (
        <>
            <label className="input-group">
                <input {...props} />
            </label>
            <style scoped jsx>{`
                .input-group {
                    display: block;
                    width: 100%;
                }

                .input-group input {
                    border: 0;
                    border: 1px solid rgba(0, 0, 0, .03);
                    padding: .8rem 1.2rem;
                    border-radius: 30px;
                    background: #f6f6f6;
                    font-size: 1rem;
                    display: block;
                    width: 100%;
                }

                .input-group input.small {
                    padding: .6rem 1rem;
                    font-size: .9rem;
                }
            `}</style>
        </>
    )
}

export default Input;