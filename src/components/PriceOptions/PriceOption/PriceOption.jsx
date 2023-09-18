/* eslint-disable react/prop-types */

import Featur from "../../Featur/Featur";


const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-slate-400 rounded-md p-4 my-7 flex flex-col">
          <h2 className="my-4 text-center">
            <span className="text-7xl">{price}</span>
            <span className="text-3xl">/mon</span>
           
          </h2>
          <h4 className="text-3xl">
            {name}
          </h4>
<div className="pl-6 flex-grow">
{
    features.map((feature, idx) => <Featur  key={idx} feature={feature}></Featur>)
}
</div>
<button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-yellow-300">Buy Now</button>
        </div>
    );
};

export default PriceOption;



// 5 number video dekha hoiche 9 mint porjonto