import { lazy } from "react";
const Search = lazy(() => import("../../components/Search"));
const ShopInfor  = lazy(() => import("../../components/shop/ShopInfor"));


const MyShopView = () => {
    return(
        <div>
        <ShopInfor />
        </div>
    )
};

export default MyShopView;
