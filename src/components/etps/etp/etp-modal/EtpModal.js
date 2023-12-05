import RenderLogPass from "./RenderLogPass";

const EtpModal = ({passwords}) => {

    const renderEtps = passwords.map(passwordCurrentUser => <RenderLogPass key={passwordCurrentUser.name} data={passwordCurrentUser}/>);

    return (
        <>
        {renderEtps}
        </>
    )
}



export default EtpModal