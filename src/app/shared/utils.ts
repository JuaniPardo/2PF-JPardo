function rndTime(maxSeconds: number = 1): number {
  return Math.floor(Math.random() * maxSeconds * 1000);
}

function getMaxId(db: any[]): number {
  return db.reduce((acc, curr) => Math.max(acc, curr.id), 0);
}

export {rndTime, getMaxId};