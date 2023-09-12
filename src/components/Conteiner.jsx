import IconCard from "./IconCard";
import ItemsCart from "./ItemCart";

const Container = () => {
    return (
        <div className="bg-warning rounded-circle p-3 position-relative">
            <IconCard />
            <ItemsCart count={7} />
        </div>
    );
};

export default Container;