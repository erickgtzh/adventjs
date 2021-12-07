function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
  const milliseconds = 60 * 60 * 24 * 1000;
  return Math.ceil((new Date('Dec 25, 2021') - new Date(date)) / milliseconds);
}

const date1 = new Date('Dec 1, 2021')
daysToXmas(date1) // 24