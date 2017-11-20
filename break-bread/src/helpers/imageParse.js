import buns from "../assets/buns.jpg";
import burger from "../assets/burger.jpg";
import chicken from "../assets/chicken.jpg";
import croissant from "../assets/croissant.jpg";
import clams from "../assets/clams.jpg";
import curry from "../assets/curry.jpg";
import dessert from "../assets/dessert.jpg";
import fish from "../assets/fish.jpg";
import melon from "../assets/melon.jpg";
import mezze from "../assets/mezze.jpg";
import pasta from "../assets/pasta.jpg";
import sliders from "../assets/sliders.jpg";
import steak from "../assets/steak.jpg";
import sushi from "../assets/sushi.jpg";
import tacos from "../assets/tacos.jpg";
import pizza from "../assets/pizza.png";
import pho from "../assets/pho.png";
import tomato from "../assets/tomato.jpg";

export default {
match(string) {
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/asian_.png" 
		|| string === "https://ss3.4sqi.net/img/categories_v2/food/dimsum_.png")
		{return buns}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/vietnamese_.png")
		 {return pho}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/diner_.png"
		|| string === "https://ss3.4sqi.net/img/categories_v2/food/default_.png") 
		{return burger}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/indian_.png") 
		{return curry}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/bakery_.png") 
		{return croissant}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/dessert_.png") 
		{return dessert}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/spanish_.png"
		|| string === "https://ss3.4sqi.net/img/categories_v2/food/tapas_.png") 
		{return clams}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/seafood_.png") 
		{return fish}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/french_.png") 
		{return melon}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/italian_.png") 
		{return pasta}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/pizza_.png") 
		{return pizza}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/steakhouse_.png") 
		{return steak}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/latinamerican_.png" 
		|| string === "https://ss3.4sqi.net/img/categories_v2/food/mexican_.png"
		|| string === "https://ss3.4sqi.net/img/categories_v2/food/arepas_.png") 
		{return tacos}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/greek_.png"
		|| string === "https://ss3.4sqi.net/img/categories_v2/food/middleeastern_.png"
		|| string === "https://ss3.4sqi.net/img/categories_v2/food/mediterranean_.png"
		|| string === "https://ss3.4sqi.net/img/categories_v2/food/turkish_.png") 
		{return mezze}
	if (string === "https://ss3.4sqi.net/img/categories_v2/food/japanese_.png"
		|| string === "https://ss3.4sqi.net/img/categories_v2/food/sushi_.png") 
		{return sushi}	
	else {return tomato}

}
}


