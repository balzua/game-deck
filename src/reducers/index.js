const initialState = {
  "games": [
    {
      "title": "Resident Evil 2",
      "description": "A remake of the 1998 survival horror classic, Resident Evil 2.",
      "releaseDate": "January 25, 2019",
      "rating": "M",
      "genres": ['Shooter', 'Action/Adventure'],
      "platforms": ['PC', 'XONE', 'PS4'],
      "image": "https://www.giantbomb.com/api/image/scale_small/3049558-box_re2.png",
      "userRating": 4,
      "status": "wishlist"
    },
    {
      "title": "Final Fantasy IX",
      "description": "Zidane Tribal and his troupe attempt to abduct Princess Garnet of Alexandria in this throwback to the classics of the series.",
      "releaseDate": "July 7, 2000",
      "rating": "T",
      "genres": ['Role-Playing', 'Card Game'],
      "platforms": ['PC', 'PS1', 'PS3', 'PS4', 'NS'],
      "image": "https://www.giantbomb.com/api/image/scale_small/1814634-box_ff9.png",
      "userRating": 5,
      "status": "playing"
    },
    {
      "title": "God of War",
      "description": "God of War is a soft reboot on the franchise of the same name. It sees Kratos and his son Atreus traverse a world of Norse myths.",
      "releaseDate": "April 20, 2018",
      "rating": "M",
      "genres": ['Action'],
      "platforms": ['PS4'],
      "image": "https://www.giantbomb.com/api/image/scale_small/3012241-god%20of%20war%20%28ps4%29.jpg",
      "userRating": 3,
      "status": "completed"
    }
  ],
  "libraryStats": {
    "favoriteGenre": "Role-Playing",
    "totalGames": 3,
    "totalCompleted": 1,
    "averageRating": 4
  },
  "chartScores": {
    "Action": 80,
    "Puzzle": 50,
    "Role-Playing": 95,
    "Fighting": 20,
    "Shooter": 73
  },
  "filters": {
  },
  "modalDisplay": false,
  "modalContent": "registration"
};

export const reducer = (state = initialState, action) => {
  return state;
};