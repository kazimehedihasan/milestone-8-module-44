/* eslint-disable react/prop-types */

import Features from "../Features/Features";



const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-slate-400 rounded-md p-4 my-7">
          <h2 className="my-4 text-center">
            <span className="text-7xl">{price}</span>
            <span className="text-3xl">/mon</span>
           
          </h2>
          <h4 className="text-3xl">
            {name}
          </h4>
{
    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
}
        </div>
    );
};

export default PriceOption;



// 5 number video dekha hoiche 9 mint porjonto