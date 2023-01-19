export default function Header(props) {
  return (
    <div className="ui menu">
      <div className="right menu">
        <a className="item active">
          <div class="ui simple dropdown item">
            <i className="heart icon ">{props.wishlist.length}</i>
            <div class="menu">
              {props.wishlist.map((w, index) => {
                console.log(w);
                return (
                  <div class="item">
                    {w.name}
                    <button
                      class="ui button"
                      onClick={() => {
                        console.log("remove from wishlist");
                        console.log(w.id);
                        props.setWishlist(
                          props.wishlist.filter((wish) => wish.id !== w.id)
                        );
                      }}
                    >
                      <i class="close icon"></i>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </a>
        <a className="item">
          <i className="shopping basket icon"></i>
        </a>
      </div>
    </div>
  );
}
