---
layout: post
toc: true
title: overall individual review
description: woop!!
courses: {'compsci': {'week': 23}}
type: plans
---

# the final leaderboard !! {#headings}

### plans...
We initially wanted to have the leaderboard in a separate md file in order to keep it organized and for easier functionality. However, the transition to the md file was abrupt and there was a lot of difficulty dragging the functions over to work in the md file. So it was inevitably SCRAPPED!

### new leaderboard 
We used the pre-existing "SettingsControl.js" to format the leaderboard in a similar fashion, using the submenu. This started with adding the appropriate divs into the main md file. 

```
<div id="leaderboardDropDown" class="leaderboardDropDown">
  <a href="javascript:void(0)" id="leaderboard-header">&times; Leaderboard</a>
</div>
```

Within creating the "leaderboard" class, we established getters:
```
get leaderboardTable(){
        // create table element
        var t = document.createElement("table");
        t.className = "table scores";
        //create table header
        var header = document.createElement("tr");
        var th1 = document.createElement("th");
        th1.innerText = "Name";
        header.append(th1);
        var th2 = document.createElement("th");
        th2.innerText = "Score";
        header.append(th2);
        t.append(header);

        this.table = t;

        return t;
    }
```

This would create the table when the submenu pops out. Also, I created the updateLeaderBoard function because after Kaden and Nora had established the local storage values, the times needed to be APPENDED into the leaderboard. 

```
updateLeaderboardTable() {
        // Fetch time scores from local storage
        let timeScores = JSON.parse(localStorage.getItem(this.key)) || [];
    
        // Sort timeScores in ascending order of scores
        timeScores.sort((a, b) => a.time - b.time);
    
        // Get the existing table element
        const table = this.table;
    
        // Clear the table content
        table.innerHTML = "";
    
        // Recreate the table header
        var header = document.createElement("tr");
        var th1 = document.createElement("th");
        th1.innerText = "Name";
        header.append(th1);
        var th2 = document.createElement("th");
        th2.innerText = "Score";
        header.append(th2);
        table.append(header);
    
        // Populate the table with time scores
        timeScores.forEach(score => {
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.innerText = score.userID;
            row.append(td1);
            var td2 = document.createElement("td");
            td2.innerText = score.time;
            row.append(td2);
            table.append(row);
        });
    }    
```

Later, the helpful line JSON allowed us to add the scores into JSON and also "get" these values in the getters. (the line at the top)

### extras

This was the completion of the individual leaderboard ! Some SASS to touch it up:
```
$dt-leaderboard: #b385eb;

.table.scores, th, tr, td {
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.table.scores {
  th {
    background-color: #5f3692;
  }
  tr {
    td {
      border: 1px solid mix($dt-leaderboard, black, 50%);
      &:nth-child(odd) {
        background-color: $dt-leaderboard; // Background color for odd rows
      }
      &:nth-child(even) {
        background-color: mix($dt-leaderboard, gray, 60%); // Background color for even rows
      }
    }
  }
}
```

You can see I experimented with nth child in SASS and using various VARIABLES and well as MIX INS.

Additionally, I decided to add a "clear" button function which would clear all the local storage values. I also wanted the leaderboard to auto-update upon pressing the button which led to some updateLeaderBoardTable changes.

```
 get clearButton() {
        const div = document.createElement("div");
        div.innerHTML = "Clear Leaderboard: ";
        
        const button = document.createElement("button");
        button.innerText = "Clear!";
    
        button.addEventListener("click", () => {
            const confirmed = confirm("Are you sure you want to clear the leaderboard?");
            if (confirmed) {
                localStorage.clear();
                this.updateLeaderboardTable();
            }
        });
    
        div.append(button); // wrap button element in div
        return div;

    }   
```

### multiplayer
Nora and Kaden and Trystan worked together on making the multiplier leaderboard. 

Gab and I worked on changing these leaderboards to appear based on when the settings were "multiplayer: true" or "multiplayer: false"

This was a simple "if" statement that would change which table was "created"

```
if (Socket.shouldBeSynced) {
                // turn off local
                t1.style.display = "none";
                t2.style.display = "table";

                localMultiplayer.innerHTML = "Multiplayer Leaderboard";
            } else if (!Socket.shouldBeSynced) {
                // turn off multiplayer
                t2.style.display = "none";
                t1.style.display = "table";

                localMultiplayer.innerHTML = "Local Leaderboard";
            }
```

We did some final SASS, and that's all. 


 





