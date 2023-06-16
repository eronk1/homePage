import './Middle.css'
export default function Middle(){
    return(
        <div id="middleParent">
            <p id='middleHeader'>Top three activities in LA</p>
            <div id='sectionParent'>
                <div id='section1'>
                    <img src="koreaTown.jpg" alt="Korea Town" />
                    <h4>Korea Town</h4>
                    <p>Eat food and increase the obesidy rate!</p>
                </div>
                <div id='section2'>
                    <img src="marathon.jpg" alt="Korea Town" />
                    <h4>Run a marathon</h4>
                    <p>Lower the obesidy rate by running!</p>
                </div>
                <div id='section3'>
                    <img src="mall.jpg" alt="Korea Town" />
                    <h4>Go to malls</h4>
                    <p>Spend lots of money and go in debt!</p>
                </div>
            </div>
        </div>
    )
}