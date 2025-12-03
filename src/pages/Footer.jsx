

export default function Footer(){
        return(
            <>
            <footer>
                
                <div className="footer_box p-5" style={{display: "flex", justifyContent: "space-around"}}>
                    <div>
                        <h3 className="footer_tit">Contacto</h3>
                        <p>Whatsapp: 11223456789</p>
                        <p>Av del Libertador 4321 - Palermo- CABA</p>
                    </div>
                    <div>
                        <h3 className="footer_tit">Redes Sociales</h3>
                        <div style={{display: "flex", justifyContent: "space-around"}}>
                            <img src="img/icons8-instagram-48.png" alt="Instagram" width="30%" height="30%"/>
                            <img src="img/icons8-facebook-48.png" alt="Facebook" width="30%" height="30%"/>
                            <img className="img-fluid" src="img/icons8-tiktok-48.png" alt="Tiktok" width="30%" height="30%"/>
                        </div>
                    </div>
                </div>
                
            </footer>
            </>
        );
};