---
layout: post
title: Code snippets
description: our new timer code
courses: {'compsci': {'week': 20}}
type: tangibles
---

# our code {#headings}
```
updateTimer() {
        const id = document.getElementById("gameOver");
    
        const elapsedTime = (Date.now() - this.startTime) / 1000;
    
        const timeScoreElement = document.getElementById('timeScore');
        if (timeScoreElement) {
            // Update the displayed time
            timeScoreElement.textContent = elapsedTime.toFixed(2);
    
            // Get the current user ID from SettingsControl
            const userID = SettingsControl.userID;
    
            /*
            // Retrieve existing time scores from local storage
            const existingTimeScores = JSON.parse(localStorage.getItem('timeScore')) || [];
    
            // Check if there is a recent time score for the current user
            const recentTimeScore = existingTimeScores.find(score => score.userID === userID);
    
            if (!recentTimeScore) {
                // Add the new time score with user ID to the array
                // Assume the existingTimeScores retrieval as described in the previous response

                // Assuming you have userID and elapsedTime defined somewhere in your code
                const userID = 'exampleUserID';
                const elapsedTime = elapsedTime.toFixed(2); // Replace with the actual elapsed time value

                // Add the new time score with user ID to the array
                const newTimeScore = {
                    userID: userID,
                    time: elapsedTime.toFixed(2),
                    // You can add more properties if needed
                };

                existingTimeScores.push(newTimeScore);

                // Log the updated array to the console for debugging
                console.log(existingTimeScores);

                // Save the updated array to local storage
                localStorage.setItem('timeScores', JSON.stringify(existingTimeScores));

            }
            */
        }
    },    
```