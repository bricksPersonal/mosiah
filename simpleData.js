const LEHIS_FAMILY = "Lehi's Family";
const LAMANITES = "Lamanites";
const NEPHITES = "Nephites";
const ZENIFF = "Zenniff's People";
const ALMA = "Alma's People";

const JERUSALEM = "Jerusalem";
const ARABIAN_WILDERNESS = "Arabian Wilderness";
const BOUNTIFUL = "Bountiful";
const OCEAN = "The Sea";
const FIRST_INHERITANCE = "Land of their First Inheritance";
const LAND_OF_NEPHI = "Land of Nephi";
const WILDERNESS = "The Wilderness";
const ZARAHEMLA = "Zarahelma";


const people = [
  {
    name: LEHIS_FAMILY,
    color: "blue",
    radius: 1,
    column: 0
  },
  {
    name: LAMANITES,
    color: "red",
    radius: 1,
    column:0
  },
  {
    name: NEPHITES,
    color: "green",
    radius: 1,
    column:0,
  },
  {
    name: ZENIFF,
    color: "cyan",
    radius: .5,
    column:1,
  },
  {
    name: ALMA,
    color: "magenta",
    radius: .5,
    column:2,
  },
]

const simpleData =  [
  {
    event: "Lehi's Vision",
    people: [
      { who: LEHIS_FAMILY, where: JERUSALEM }
    ]
  },
  {
    event: "Lehi Leaves",
    people: [
      { who: LEHIS_FAMILY, where: ARABIAN_WILDERNESS }
    ]
  },
  {
    event: "Lehi Arrives at the Coast",
    people: [
      { who: LEHIS_FAMILY, where: BOUNTIFUL }
    ]
  },
  {
    event: "Lehi Crosses the Sea",
    people: [
      { who: LEHIS_FAMILY, where: OCEAN }
    ]
  },
  {
    event: "Lehi Arrives in America",
    people: [
      { who: LEHIS_FAMILY, where: FIRST_INHERITANCE }
    ]
  },
  {
    event: "Lehi Dies",
    people: [
      { who: LAMANITES, where: FIRST_INHERITANCE },
      { who: NEPHITES, where: LAND_OF_NEPHI }
    ]
  },
  {
    event: "Mosiah I Flees",
    people: [
      { who: LAMANITES, where: FIRST_INHERITANCE },
      { who: NEPHITES, where: WILDERNESS }
    ]
  },
  {
    event: "Mosiah Finds Meulekites",
    people: [
      { who: LAMANITES, where: LAND_OF_NEPHI },
      { who: NEPHITES, where: ZARAHEMLA }
    ]
  },
  {
    event: "Zeniff returns to the Land of Nephi",
    people: [
      { who: LAMANITES, where: LAND_OF_NEPHI },
      { who: NEPHITES, where: ZARAHEMLA },
      { who: ZENIFF, where: LAND_OF_NEPHI },
    ]
  },
  {
    event: "Alma flees Noah's Presence",
    people: [
      { who: LAMANITES, where: LAND_OF_NEPHI },
      { who: NEPHITES, where: ZARAHEMLA },
      { who: ZENIFF, where: LAND_OF_NEPHI },
      { who: ALMA, where: LAND_OF_NEPHI }
    ]
  },
  {
    event: "Alma's People Flee into the Wilderness",
    people: [
      { who: LAMANITES, where: LAND_OF_NEPHI },
      { who: NEPHITES, where: ZARAHEMLA },
      { who: ZENIFF, where: LAND_OF_NEPHI },
      { who: ALMA, where: WILDERNESS }
    ]
  },
  {
    event: "Limhi's People Escape",
    people: [
      { who: LAMANITES, where: LAND_OF_NEPHI },
      { who: NEPHITES, where: ZARAHEMLA },
      { who: ZENIFF, where: ZARAHEMLA },
      { who: ALMA, where: WILDERNESS }
    ]
  },
  {
    event: "Alma's People Escape",
    people: [
      { who: LAMANITES, where: LAND_OF_NEPHI },
      { who: NEPHITES, where: ZARAHEMLA },
      { who: ZENIFF, where: ZARAHEMLA },
      { who: ALMA, where: ZARAHEMLA }
    ]
  },

];