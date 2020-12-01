const initialState = {
  teams: [
    {
      name: "Team Liquid",
      img: "team_liquid",
      id: 1,
    },
    {
      name: "Natus Vincere",
      img: "navi",
      id: 2,
    },
  ],
  team: {
    name: "Team Liquid",
    img: "team_liquid",
    id: 1,
  },
  players: [
    {
      id: 1,
      name: "Dendi",
      img: "dendi",
    },
    {
      id: 2,
      name: "Miracle",
      img: "miracle",
    },
    {
      id: 3,
      name: "PMhee",
      img: null,
    },
  ],
  player: {
    id: 3,
    name: "PMhee",
    img: null,
  },
};
export default function play(state = initialState, action) {
  return state;
}
