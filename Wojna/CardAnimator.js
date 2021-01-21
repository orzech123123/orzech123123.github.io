class CardAnimator {
    constructor(playerDeckImg, computerDeckImg, choosenPlayerImg, choosenComputerImg, playerContainer, computerContainer) {
        let _playerDeckImg = playerDeckImg;
        let _computerDeckImg = computerDeckImg;
        let _choosenPlayerImg = choosenPlayerImg;
        let _choosenComputerImg = choosenComputerImg;
        let _playerContainer = playerContainer;
        let _computerContainer = computerContainer;




        //let _animate(src, fromImg, toImg)
        //this.animatePlayerCard() -> _animate(...)
        //this.animateComputerCard() -> _animate(...)

        let _animate = (src, fromImg, toImg) => {
            let cardContainerIndex = fromImg == _playerDeckImg ? 0 : 2;
            let animationImg = document.createElement("img");
            animationImg.src = src;
            animationImg.classList.add("aniamtion-img");
            animationImg.style.left = `${fromImg.getBoundingClientRect().left}px`
            document.getElementsByClassName("card-container")[cardContainerIndex].appendChild(animationImg);

            setTimeout(() => {
                animationImg.style.left = `${toImg.getBoundingClientRect().left}px`
            }, 1)

            setTimeout(() => {
                document.getElementsByClassName("card-container")[cardContainerIndex].removeChild(animationImg);
            }, 2000);
        }


        this.animatePlayerCard = () => {
            _animate(`${window.pathPrefix}/JPEG/blue_back.jpg`, _playerDeckImg, _choosenPlayerImg)

        }


        this.animateComputerCard = () => {
            _animate(`${window.pathPrefix}/JPEG/Green_back.jpg`, _computerDeckImg, _choosenComputerImg)

        }


        this.flipPlayerCard = () => {
            _playerContainer.classList.toggle('is-flipped');


        }

        this.flipComputerCard = () => {
            _computerContainer.classList.toggle('is-flipped');

        }
    }
}