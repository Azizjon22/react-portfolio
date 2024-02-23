const Contacts = () => {
    return (  
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Uzbekistan, Tashkent</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / instagram</h2>
                        <p><a href="tel:+998951001066">+998 (95) 100-10-66</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="yakubjonovazizjon@gmail.com">yakubjonovazizjon@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
    );
}
 
export default Contacts;