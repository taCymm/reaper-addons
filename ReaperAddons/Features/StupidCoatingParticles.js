import Settings from "../settings";

export default function StupidCoatingParticles() {
  register("spawnParticle", (particle, type, event) => {
    if (!Settings.removeCoatingParticles) return;
    if (!Player.armor.getChestplate() || !Player.armor.getChestplate().getName()) return

    if (particle.toString().includes('EntityReddustFX') &&  Player.armor.getChestplate().getName().includes('Chestplate of Divan')) {
      cancel(event);
    }
  })
};
