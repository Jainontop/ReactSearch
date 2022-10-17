

var Card = (props) => (
    <div className="card">
        <img className="card-img-top" src={props.img} alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.desc}</p>
            <a href={props.href} className="btn btn-primary">Click me</a>
        </div>
    </div>
    ); 
export default Card;
  