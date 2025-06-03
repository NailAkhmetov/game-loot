import HomeKnife from "../assets/images/home/Knife.svg"

function Home() {
    return (
        <section class="block">
            <div class="container">
                    <div class="floating-circle big-left">
                         <img src={HomeKnife} alt="Вторая фотография" class="inner-photo" />
                    </div>
                    <div class="floating-circle small-overlap"></div>
                    <div class="small-right-circle"></div>
                    <div class="extra-circle-1"></div>
                    <div class="extra-circle-2"></div>
                    <div class="extra-circle-3"></div>
                    <div class="extra-circle-4">
                        <span class="circle-text absolute-text">Добро пожаловать на большую торговую площадку, в которой вы сможете купить или продать различные предметы и скины с самых различных игр.</span>
                    </div>
                    <div class="extra-circle-5"></div>
                    <div class="extra-circle-6"></div>
                    <div class="extra-circle-7"></div>
                    <div class="extra-circle-8"></div>


            </div>
        </section>
    );
}
export default Home;