export const getPrice = (price:number, type = "main") => {
    const [main, decimal] = price.toString().split(".");
  
    if (type === "decimal") {
      return decimal;
    } else {
      return main;
    }
  };
  
  export const renderRating = (num:number) => {
    let rawRating = num;
    if (!rawRating) rawRating = 1;
  
    let convertedRating = Math.floor((rawRating / 2) * 10);
    let remainder = convertedRating % 10;
    convertedRating -= remainder;
    let stars: any = new Array(convertedRating / 10).fill("BsStarFill").join(",");
    remainder === 0
      ? (remainder = 0)
      : remainder > 5
      ? (remainder = 10)
      : (remainder = 5);
    convertedRating += remainder;
    convertedRating /= 10;
  
    if (remainder) stars += ",BsStarHalf";
    stars = stars.split(",");
  
    if (stars.length < 5) {
      const remainder = new Array(5 - stars.length);
      remainder.fill("BsStar");
      stars = [...stars, ...remainder];
    }
    return stars;
  };
  
  export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  
  export const getTotalPrice = (cart:any) =>
    cart.reduce((totalPrice: any, item: any) => (totalPrice += parseFloat(item.price)), 0);
  
