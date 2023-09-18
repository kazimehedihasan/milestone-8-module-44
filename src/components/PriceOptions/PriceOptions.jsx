import PriceOption from "./PriceOption/PriceOption";



const PriceOptions = () => {

  const PriceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "features": [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Locker room access",
            "Fitness assessment"
          ],
          "price": 29.99
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "features": [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Strength training equipment usage",
            "Group fitness classes",
            "Personal trainer sessions",
            "Locker room access",
            "Nutrition consultation",
            "Towel service",
            "Sauna access"
          ],
          "price": 49.99
        },
        {
          "id": 3,
          "name": "Student Membership",
          "features": [
            "Access to gym facilities",
            "Cardio equipment usage",
            "Locker room access",
            "Student ID required"
          ],
          "price": 19.99
        }
      ]
      

    return (
        <div>
              <h2  className="text-5xl">Best prices in the town</h2>
           <div className="grid md:grid-cols-3 gap-6">
           {
              PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)  
            }
           </div>
        </div>
    );
};

export default PriceOptions;