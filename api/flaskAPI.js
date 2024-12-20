
export async function fetchRecommendedTitles(title){
    try{

      
        const response = await fetch("https://movie-recommendation-api-8985.onrender.com/recommend", {
          method: "POST",
          body: JSON.stringify({ title: title }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data =  await response.json();
        // // console.log(`object: ${data.recommended_movies}`);
        // console.log(`object: ${data.recommended_movies[0]}`);
        // console.log(`type of object: ${typeof data.recommended_movies}`);
        // console.log(`length of object: ${data.recommended_movies.length}`);
        return data.recommended_movies;
    }catch(error){
        console.log(`Error: ${error}`);
    }
  }
  
  
  