---
toc: true
comments: false
layout: tangibles
title: Enemy/Platform Review Ticket
description: quick review of what happened with the goomba and platform and coin
type: tangibles
courses: { compsci: {week: 15} }
---

##### Enemies #####
- worked on actual implementation of the Goomba
- Goomba's collision is to immmediately restart the game as the player touches the sides of the goomba
- Utilizing the "destroy" function, the goomba will instead disappear once the top of the colliison is activated.
- special effect to occur randomly where to goomba will change saturation and speed up (warning for players !)

##### Platforms and Coins #####
- the platform is in! mario can stand, jump, and move on the platform regularly. 
- coin will spawn on the floor but the collision is broken. adding a "coin" counter where the coin disappears once touching it and increasing the coin count is favorable. :D this should also reset once the game is restarted.