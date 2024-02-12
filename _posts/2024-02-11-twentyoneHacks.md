---
layout: post
title: Timer Updates
description: We have been assigned another task
courses: {'compsci': {'week': 20}}
type: hacks
---

# what we did {#headings}
We decided to work on figuring out settings control, but we're going to be experimenting with SASS as well as figuring out the timer

- we need the time to save and be stored into local storage once the time is finished
--> later we can JSON parse this into our leaderboard

- added to the pre-existing functions in game control to submit the times in.
--> the data is saved as a key value pair, the existing "userID" with the new "time" variable
--> the logic is something like adding the updated values into an array, which are saved into local storage.
--> this logic also needs to maintain multiple values at once without overwritng any of the pre existing values.