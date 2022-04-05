const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    
    //console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => displaySearchResult(data.meals))


}
const displaySearchResult = (meals) => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';

    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
            </div>
         </div>
        
        
        
        `;
        searchResult.appendChild(div) ;
    })

   
}
const loadMealDetail = (meaiId) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meaiId}`;
    fetch(url)
    .then(response=> response.json())
    .then(data => displayMealDetail(data.meals[0]));

}
loadMealDetail();

const displayMealDetail = (meal) =>{
    console.log(meal);
    const melDetails = document.getElementById('meal-details');
    melDetails.textContent='';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    melDetails.appendChild(div);

}