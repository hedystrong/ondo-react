export default function Main2({card}) {
    return(
        <div className="row col-8 pt-5 justify-content-between">   
            {card.map((e) => {
                return(
                    <div className="d-flex pt-5 justify-content-between">
                        <div>
                            <div className="d-flex">
                                <img src={e.createdUser.img} alt="a"/>
                                <h2 id="name">{e.createdUser.Name}</h2>
                            
                            </div>
                            <div>
                                <h2 id="title2">{e.head}</h2>
                                <p width="440px">{e.title}</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>{e.date}</span>
                                <span>{e.read}</span>
                                <span>{e.key}</span>
                            </div>
                        </div>      
                    
                        <div>
                            <img src={e.img} alt="a"/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}