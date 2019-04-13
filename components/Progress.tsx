export default () => {
    return (
        <>
            <div className="progress">
                <div className="indicator"></div>
            </div>
            <style scoped jsx>{`
                .progress {
                    width: 100%;
                    height: 5px;
                    background: rgba(0, 0, 0, .1);
                    border-radius: 10px;
                    position: relative;
                    overflow: hidden;
                }
                .progress .indicator {
                    position: absolute;
                    top: 0;
                    left: 0;
                    border-radius: inherit;
                    background: linear-gradient(to right, steelblue, purple);
                    width: 25%;
                    height: 100%;
                }
            `}</style>
        </>
    )
}
