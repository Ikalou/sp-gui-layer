class CameraBehavior extends Sup.Behavior {
  public z = 0;
  private chara : Sup.Actor;
  
  awake() {
    this.chara = Sup.getActor("Chara");
  }

  update() {
    this.actor.setPosition(this.chara.getLocalPosition().x, this.chara.getLocalPosition().y, this.z);
  }
}
Sup.registerBehavior(CameraBehavior);
