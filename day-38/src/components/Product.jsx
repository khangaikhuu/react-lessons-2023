export default function Product(props) {
  return (
    <div className="item">
      <div className="image">
        <img src={props.productImageUrl} />
      </div>
    
      <div className="middle aligned content">
        <div className="header">
          <a
            onClick={() => {
              props.onVote(props.id);
            }}
          >
            <i className="large caret up icon" />
          </a>
          {props.votes}
        </div>
        <div className="description">
          <a href={props.url}>{props.title}</a>
          <p>{props.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" src={props.submitterAvatarUrl} />
        </div>
      </div>
    </div>
  );
}
