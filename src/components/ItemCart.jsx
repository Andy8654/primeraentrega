const ItemsCart = ({ count = 0 }) => {
    return (
        <div className="position-absolute text-white bg-dark rounded-circle px-2"
            style={{ top: 0, right: 0 }} >
            <span style={{ fontSize: "10px", color: "whithe" }}>
                {count}
            </span>
        </div>
    );
};

export default ItemsCart;