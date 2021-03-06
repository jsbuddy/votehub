import FacebookLogin from "react-facebook-login";
import { TiSocialFacebook } from 'react-icons/ti';

const FacebookButton = ({ onAuth }: { onAuth: any }) => {
    const responseFacebook = (response: any) => {
        console.log({ response });
        if (response.userID) {
            const { userID: facebookId, name, picture } = response;
            onAuth({ facebookId, name, picture: picture.data.url });
        }
    };

    return (
        <>
            <FacebookLogin
                appId="165816357676916"
                fields="name,picture"
                callback={responseFacebook}
                cssClass="facebook-button"
                icon={<TiSocialFacebook />}
                textButton="Login"
                redirectUri="https://voteshub.herokuapp.com"
            />

            <style global jsx>{`
                .facebook-button {
                    display: flex;
                    align-items: center;
                    border: 1px solid #1c4fb5;
                    background: #245ac7;
                    border-radius: 30px;
                    padding: .4rem 1rem;
                    color: #fff;
                    font-size: 1rem;
                    cursor: pointer;
                    position: relative;
                }
                .facebook-button svg {
                    color: #fff;
                    font-size: 1.3rem;
                    margin-right: 10px;
                }
                .facebook-button:not(:disabled):hover,
                .facebook-button:not(:disabled):active {
                    background: #1847a7;
                    box-shadow: 0 10px 12px -7px rgba(0, 0, 0, .08);
                }
                .facebook-button:disabled {
                    border: 0;
                    cursor: not-allowed;
                }
                .facebook-button:disabled::before {
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

export default FacebookButton;