# Dynamic-JavaScript-Table

This project uses a sample dataset of UFO sightings to create a dynamic table visualization of all the sightings and their associated information. JavaScript and D3.js are used to build a dynamic table of sightings that can be searched through by filtering criteria.

### Level 1: Automatic Table and Date Search

* Features a basic HTML web page. Uses D3.js to append a table of the [sightings data](https://github.com/rmurnane94/javascript-challenge/blob/main/UFO-level-1/static/js/data.js) to the web page and adds new rows of data for each UFO sighting. Includes columns for `date/time`, `city`, `state`, `country`, `shape`, and `comment`.

* Table is dynamic and can be filtered by the `date/time` column. Table listens for events and finds rows that match user input.

### Level 2: Multiple Search Categories (Optional)

* Featuring everything present in Level 1, user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:

  1. `date/time`
  2. `city`
  3. `state`
  4. `country`
  5. `shape`
