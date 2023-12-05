import "./footer.scss"

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer__copy">App ETP ЮУрСЦУ V1.1 Copyright &#169; 2022 - {currentYear}<br/>Семенов Павел</div>
        </footer>
    )
}
export default Footer