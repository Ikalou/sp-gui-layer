class SetCameraLayerBehavior extends Sup.Behavior {
  public layerId : number;
  
  awake() {
    if (typeof this.layerId !== "undefined") {
      this.actor.camera["__inner"].layers.push(this.layerId);
    }
  }

  update() {
    
  }
}
Sup.registerBehavior(SetCameraLayerBehavior);
