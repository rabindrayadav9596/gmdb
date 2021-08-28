const base_url = `https://api.rawg.io/api/`


//getting the date
const getCurrentMonth = () =>{
    const month = new Date().getMonth()+1;
    if(month < 10){
        return `0${month}`;
    }else{
        return month;
    }
}

const getCurrentDay = () =>{
    const day = new Date().getDate()+1;
    if(day < 10){
        return `0${day}`;
    }else{
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`;




//popular games
const popular_games = `games?key=7aa45f1f4bfe4e26a2a7b9aae3f64b57&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;


export const popularGamesURL = () => `${base_url}${popular_games}`;

 


