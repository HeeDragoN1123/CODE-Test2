function solution(food) {
  var arr = [0];

  for (let i = food.length; i > 0; i--) {
    let a = Math.floor(food[i] / 2);

    for (let j = 0; j < a; j++) {
      arr.push(i);

      arr.unshift(i);
    }
  }

  return arr.join("");
}

console.log(solution([1, 3, 4, 6]));
