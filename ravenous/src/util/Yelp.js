import Business from "../components/Business/Business";
import SearchBar from "../components/SearchBar/SearchBar";

const apiKey=`v_Utzqza-qRBR3-XNz8wPW4JJhWZg9eZ8Y6YXm7Z9RU4YE4h4v7kdZ9wSFazeETmOuthfBg8J6UfYBUwAkBwApMtiS5g14o-ifnjknucSFPtcEHlFuF5sy1Aa3svXHYx`;
var Yelp={

    search(term, location, sortBy){

        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {headers: {Authorization: `Bearer ${apiKey}`}}).
        then(
        response=>{
            return response.json();
        })
        .then(
        jsonResponse=>{
            if(jsonResponse.businesses){
                console.log(jsonResponse.businesses);
                return jsonResponse.businesses.map(
                    business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name:business.name,
                            address:business.address1,
                            city:business.city,
                            state:business.state,
                            zipCode:business.zipCode,
                            category:business.categories[0].title,
                            rating:business.rating,
                            reviewCount:business.review_count
                        };
                    }
                );
            }
        });
    }
};

export default Yelp;