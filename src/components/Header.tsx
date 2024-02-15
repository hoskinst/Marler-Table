import headerImg from '../assets/marlerLogo.png'

export default function Header() {
    return (
        <header id="header">
            <img src={headerImg} alt="header-img" />
            <h1>Marler Table</h1>
        </header>
    );
}