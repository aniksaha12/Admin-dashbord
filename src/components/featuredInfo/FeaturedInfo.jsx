import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">₹500</span>
            <span className="featuredMoneyRate">
            -15.4 <ArrowDownward className="featuredIcon negative"/>
            </span>
            </div>
            <span className="featuredSub">compared to last month</span>
            </div>

            <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">₹1000</span>
            <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative"/>
            </span>
            </div>
            <span className="featuredSub">compared to last month</span>
            </div>

            <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
            <span className="featuredMoney">₹700</span>
            <span className="featuredMoneyRate">
            +5.4 <ArrowUpward className="featuredIcon"/>
            </span>
            </div>
            <span className="featuredSub">compared to last month</span>
            </div>
    </div>
  )
}

export default FeaturedInfo
