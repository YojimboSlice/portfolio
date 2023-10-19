export function calculateBoxCenter(position, size) {
  return [
    position[0] + size[0] / 2,
    position[1] + size[1] / 2,
    position[2] + size[2] / 2,
    position[3] + size[3] / 2,
    position[4] + size[4] / 2,
    position[5] + size[5] / 2,
    position[6] + size[6] / 2,
    position[7] + size[7] / 2,
    position[8] + size[8] / 2,
  ];
}
