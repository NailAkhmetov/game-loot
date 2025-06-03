import KnifeList from "../components/Products/Knifelist";
import PerchList from "../components/Products/Perchlist";
import ProductList from "../components/Products/Productlist";
import Cart from "./Cart";

function Market() {
    return (
        <>

            <Cart />

                <div class="vertical-text">
                <div class="column">
                    <span>T</span>
                    <span>R</span>
                    <span>A</span>
                    <span>I</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                </div>
                <div class="column">
                    <span>P</span>
                    <span>L</span>
                    <span>A</span>
                    <span>T</span>
                    <span>F</span>
                    <span>O</span>
                    <span>R</span>
                    <span>M</span>
                </div>
                </div>


            <section class="block">
                <div class="container">
                    <h2 class="category-text">Оружие</h2>
                    <div class="scroll-wrapper">
                        <div class="card-container">

                            <ProductList />
    
                        </div>
                    </div>   
                    
                        <h2 class="category-text">Ножи</h2>
                        <div class="scroll-wrapper">
                        <div class="card-container">
    
                            <KnifeList />

                        </div>
                    </div> 

                    <h2 class="category-text">Перчатки</h2>
                    <div class="scroll-wrapper">
                        <div class="card-container">

                            <PerchList />
    
                        </div>
                    </div> 

                </div>
            </section>

            <footer class="site-footer">
                <div class="footer-container">
                    <div class="footer-column">
                        <h3>О нас</h3>
                        <p>Мы - команда создавшая быстрейшие оформления покупок скинов на просторах интернета.</p>
                    </div>
                        <div class="footer-column">
                            <h3>Контакты</h3>
                            <p>Email: support@example.com</p>
                            <p>Telegram: @GameLoot</p>
                        </div>
                    <div class="footer-column">
                        <h3>Социальные сети</h3>
                        <p><a href="#">VK</a> | <a href="#">Telegram</a> | <a href="#">YouTube</a></p>
                    </div>
                </div>
                    <div class="footer-bottom">
                        © 2025 GameLoot. Все права защищены.
                    </div>
            </footer>
        </>
    );
}

export default Market;