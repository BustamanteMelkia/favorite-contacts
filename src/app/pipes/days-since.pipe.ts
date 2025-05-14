import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysSince',
})
export class DaysSincePipe implements PipeTransform {
  /**
   * Transforms a timestamp (in seconds) into a string indicating how many days have passed since that date.
   * It ignores the time of day by comparing only the calendar date (year, month, day).
   */
  transform(value: number): string {
    const previousDate = new Date(value * 1000);
    const currentDate = new Date();
    previousDate.setHours(0, 0, 0, 0);
    currentDate.setHours(0, 0, 0, 0);

    const differenceInMiliseconds =
      currentDate.getTime() - previousDate.getTime();

    const daysSince = Math.floor(
      differenceInMiliseconds / (60 * 60 * 24 * 1000)
    );
    if (daysSince === 0) {
      return 'Today';
    }
    return daysSince === 1 ? '1 day ago' : `${daysSince} days ago`;
  }
}
