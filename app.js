let foodId =1;
const Food = function (foodName ,type , Price ) {
    this.foodId = foodId++;
    this.foodName = foodName;
    this.type = type;
    this.Price = Price;

  };

  const food1 =new Food(
 "Piza",
 "Fat",
 8.35,
  );

  const food2 =new Food(
 "Burger",
 "Fat",
 4.25,
  );

  const food3 =new Food(
 "Apple",
 "Frute",
 0.63
  );
   
