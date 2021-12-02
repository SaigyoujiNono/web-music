import Carousel from '../../components/Carousel'
import Recommend from '../../components/Recommend'
import './index.scss'
function Home(){
    return (
        <div className="home">
            <Carousel></Carousel>
            <div className="content-container">
                <div className="content-left">
                <Recommend>
                    <h1>123</h1>
                </Recommend>
                </div>
                <div className="content-right">
                </div>
            </div>
        </div>
    )
}


export default Home