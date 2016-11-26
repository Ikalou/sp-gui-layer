class CharaMovementBehavior extends Sup.Behavior {
  public speed = 0.02;
  
  awake() {
    
  }

  update() {
    if (Sup.Input.isKeyDown("LEFT")) {
      this.actor.moveLocalX(-this.speed);
      this.actor.spriteRenderer.setHorizontalFlip(true);
    }
    if (Sup.Input.isKeyDown("RIGHT")) {
      this.actor.moveLocalX(this.speed);
      this.actor.spriteRenderer.setHorizontalFlip(false);
    }
    if (Sup.Input.isKeyDown("UP")) {
      this.actor.moveLocalY(this.speed);
    }
    if (Sup.Input.isKeyDown("DOWN")) {
      this.actor.moveLocalY(-this.speed);
    }
  }
}
Sup.registerBehavior(CharaMovementBehavior);
