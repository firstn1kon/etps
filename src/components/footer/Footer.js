import "./footer.scss"
const Footer = () => {
    const data = new Date();
    return (
        <footer className="footer">
            <div className="footer__copy">App ETP ЮУрСЦУ V1.1 Copyright &#169; 2022 - {data.getFullYear()}<br/>Семенов Павел</div>
        </footer>
    )
}
export default Footer