# DestinyGuessr

A Destiny 2-themed location guessing game inspired by GeoGuessr. Test your knowledge of locations from across the Destiny 2 universe!

## How to Play

1. You'll be shown a screenshot from somewhere in Destiny 2
2. Select the destination (planet/moon) you think it's from
3. Then, select the specific area within that destination
4. Score points based on how accurate your guess is
5. Challenge yourself with 5 locations per round

## Features

- Test your knowledge of locations from across Destiny 2
- Earn points based on the accuracy of your guesses
- Achieve Guardian ranks based on your performance
- Compare and share your results with friends

## Contribution Instructions

1. Clone this repository or download the files
2. Create an `assets/locations` directory structure to store your Destiny 2 screenshots
3. Add your Destiny 2 screenshots to the appropriate folders following this naming convention:
   ```
   assets/locations/[destination]_[area]_[number].avif
   ```
   For example: `assets/locations/dreaming_city_divalian_mists_1.avif`

4. Update the `locationData` array in `js/locations.js` with entries for your screenshots


## Adding Your Own Screenshots

1. Take screenshots while playing Destiny 2
(I recommend using your platform specific screenshot feature, rather than a printscreen, on steam you can press F12, while on console you can save a screenshot that way)
2. Name them according to the convention mentioned above
3. Place them in the appropriate folders
4. Update the `locationData` array in `js/locations.js` with entries for each screenshot

Example entry:
```javascript
{
    id: 4,
    destination: "nessus",
    area: "exodus_black",
    imageUrl: "assets/locations/nessus_exodus_black_1.avif",
    difficulty: "medium"
}
```

## License

This project is purely for fan enjoyment and is not affiliated with Bungie, Inc.
Destiny, Destiny 2, and all related content are trademarks of Bungie, Inc.

## Acknowledgements

- Inspired by [GeoGuessr](https://www.geoguessr.com/)
- All Destiny 2 content belongs to Bungie, Inc.
