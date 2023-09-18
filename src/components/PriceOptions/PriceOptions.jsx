import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 39.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Basic fitness classes",
                "Fitness assessment",
                "24/7 gym access",
                "Nutritional guidance",
                "Discounts on gym merchandise"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 59.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited fitness classes",
                "Personal trainer sessions (2/month)",
                "Sauna and steam room access",
                "24/7 gym access",
                "Nutritional guidance",
                "Discounts on gym merchandise",
                "Towel service"
            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": 99.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited fitness classes",
                "Personal trainer sessions (4/month)",
                "Sauna and steam room access",
                "Childcare services",
                "24/7 gym access for the family",
                "Nutritional guidance",
                "Discounts on gym merchandise",
                "Towel service"
            ]
        }
    ];



    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6 ">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;