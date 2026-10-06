export function getMonthCells(year: number, month: number): (number | null)[] {
  const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7;

  const totalDays = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [];

  for (let i = 0; i < firstDayIndex; i++) {
    cells.push(null);
  }
  for (let day = 1; day <= totalDays; day++) {
    cells.push(day);
  }

  return cells;
}