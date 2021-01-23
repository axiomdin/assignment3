//1. kilometerToMeter function
function kilometerToMeter(kilometer) {
    if (kilometer <= 0) {
        return "Enter a positive value" //throwing an error
    } 
        return kilometer * 1000;
}

// var result = kilometerToMeter(10)
// console.log(result)



//2. budgetCalculator function
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Enter a positive value" //throwing an error
    } 
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var total = watchPrice + phonePrice + laptopPrice;
        return total;
}

// var result2 = budgetCalculator(10, 5, 2)
// console.log(result2)



// 3. hotelCost function
function hotelCost(day) {
    var totalCost = 0;
    if (day < 0) {
        return "please Enter a valid amount of day"; //throwing an error
    } else if (day <= 10) {
        totalCost = day * 100;
    } else if (day <= 20) {
        var firstPartCost = 10 * 100;
        var remaining = day - 10;
        var secondPartCost = remaining * 80;
        totalCost = firstPartCost + secondPartCost;
    } else {
        var firstPartCost = 10 * 100;
        var secondPartCost = 10 * 80;
        var remaining = day - 20;
        var thirdPartCost = remaining * 50;
        totalCost = firstPartCost + secondPartCost + thirdPartCost;
    }
    return totalCost;
}

// var result3 = hotelCost(24);
// console.log(result3)



//4. Mega Friend Finder
function megaFriend(str) {
    var max = str[0].length;
    str.map(word => max = Math.max(max, word.length));
    largestWord = str.filter(word => word.length == max);
    return largestWord[0]; 
  }
  
//   var result4 = megaFriend(['sujon', 'sayeeda', 'hafsabin','abdullah','hamida']);
//   console.log(result4)