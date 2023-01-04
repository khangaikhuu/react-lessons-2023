
function ProductFunc (props){
  console.log(props)
    return (
        <div className="item">
        <div className="image thumbnail rounded">
          <img src="images/image-aqua.png" className="thumbnail rounded" />
        </div>
     
        <div className="description-container">
          <div className="description">
            <a>{props.title}</a>
            <p>Authentic reseanniance actor, deliverd in just two weeks</p>
          </div>
          {/* <div className="extra">
            <span> Submitted By: </span>
            <img className="ui avatar image" src="images/avatars/daniel.jpg"/>
          </div> */}
        </div>
      </div>
    )
}
export default ProductFunc