import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredInfo.css";

export default function FeaturedInfo(){
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$ 1.000.000</span>
                    <span className="featuredRate">
                        -10% < ArrowDownward className="featured-icon negative"/>
                    </span>
                </div>
                <div className="featuredSub">Compare to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sale</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$ 2.000.000</span>
                    <span className="featuredRate">
                        8% < ArrowUpward className="featured-icon"/>
                    </span>
                </div>
                <div className="featuredSub">Compare to last month</div>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$ 100.000</span>
                    <span className="featuredRate">
                        -5% < ArrowDownward className="featured-icon negative"/>
                    </span>
                </div>
                <div className="featuredSub">Compare to last month</div>
            </div>
        </div>
    )
}