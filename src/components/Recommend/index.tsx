import './index.scss'

function Recommend(props){


    return (
        <div className="recommend-card">
            <div className="title-container">
                <div className="title">
                    
                </div>
                <div className="title-tab">
                    {props.tab &&
                        props.tab.forEach(tab =>{
                            return (
                                <div>1</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default Recommend









