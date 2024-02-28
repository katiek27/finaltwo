import GameEnv from './GameEnv.js';
import GameObject from './GameObject.js';

export class Goo extends GameObject {
    constructor(canvas, image) {
        super(canvas, image, 0, 0.5, 0.5);
    }

    // Required, but no update action
    update() {
    }

    // Draw position is always 0,0
    draw() {
        this.ctx.drawImage(this.image, 0, 0);
    }

    // Set Tube position
    size() {
        // Formula for Height should be on constant ratio, using a proportion of 832
        const scaledHeight = 0.5 * GameEnv.innerHeight * (100 / 832);
        // Formula for Width is scaled: scaledWidth/scaledHeight == this.width/this.height
        const scaledWidth = 3 * scaledHeight * this.aspect_ratio;
        const gooX = .15 * GameEnv.innerWidth;
        const gooY = (GameEnv.bottom - scaledHeight);

        // set variables used in Display and Collision algorithms
        this.bottom = gooY;
        this.collisionHeight = scaledHeight;
        this.collisionWidth = scaledWidth;
    
        //this.canvas.width = this.width; 
        //this.canvas.height = this.height;
        this.canvas.style.width = `${scaledWidth}px`;
        this.canvas.style.height = `${scaledHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = `${gooX}px`;
        this.canvas.style.top = `${gooY}px`; 

    }

}

export default Goo;