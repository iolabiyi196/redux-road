const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200,
};

const reducer = (state = initialWagonState, action) => {
  let { supplies, distance, days } = state;
  switch (action.type) {
    case "gather": {
      supplies += 15;
      days++;
      return {
        ...state,
        supplies,
        days,
      };
    }
    case "travel": {
      supplies -= 20 * action.payload;
      distance += 10 * action.payload;
      days += action.payload;

      if (supplies < 0) {
        return state;
      } else {
        return {
          ...state,
          supplies,
          distance,
          days,
        };
      }
    }
    case "tippedWagon": {
      supplies -= 30;
      days++;
      return {
        ...state,
        supplies,
        days,
      };
    }
    case "sell": {
      supplies -= 20;
      cash += 5;
      return {
        ...state,
        supplies,
        cash
      };
    }
    case "buy": {
      supplies += 25;
      cash -= 15;
      return {
        ...state,
        supplies,
        cash
      };
    }
    case "theft": {
      cash /= 2;
      return {
        ...state,
        cash
      };
    }
    default: {
      return state;
    }
  }
};

let wagon = reducer(undefined, {});
console.log(wagon);

wagon = reducer(wagon, {
  type: "travel",
  payload: 1,
});
console.log(wagon);

wagon = reducer(wagon, {
  type: "gather",
});
console.log(wagon);

wagon = reducer(wagon, {
  type: "tippedWagon",
});
console.log(wagon);

wagon = reducer(wagon, {
  type: "travel",
  payload: 3,
});
console.log(wagon);
