import { ClassStatus } from '@/types';

export interface TimetableSession {
  id: string;
  dayIndex: number;
  slotIndex: number;
  moduleCode: string;
  moduleName: string;
  location: string;
  type: 'lecture' | 'lab' | 'tutorial';
  studentCount?: number;
}

export interface TimeSlot {
  label: string;
  startTime: string;
  endTime: string;
}

const TIME_SLOTS: TimeSlot[] = [
  { label: '09:00 – 10:30', startTime: '09:00', endTime: '10:30' },
  { label: '11:00 – 12:30', startTime: '11:00', endTime: '12:30' },
  { label: '14:00 – 15:30', startTime: '14:00', endTime: '15:30' },
  { label: '16:00 – 17:30', startTime: '16:00', endTime: '17:30' },
];

/**
 * Determines the status of a class based on the current time
 * @param slotIndex - Index of the time slot (0-3)
 * @param currentDate - Current date/time
 * @returns ClassStatus: 'completed' | 'ongoing' | 'upcoming'
 */
export function getClassStatus(
  slotIndex: number,
  currentDate: Date = new Date()
): ClassStatus {
  if (slotIndex < 0 || slotIndex >= TIME_SLOTS.length) {
    return 'upcoming';
  }

  const slot = TIME_SLOTS[slotIndex];
  const [startHour, startMin] = slot.startTime.split(':').map(Number);
  const [endHour, endMin] = slot.endTime.split(':').map(Number);

  const now = currentDate;
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();

  const slotStartMinutes = startHour * 60 + startMin;
  const slotEndMinutes = endHour * 60 + endMin;
  const currentMinutesTotal = currentHours * 60 + currentMinutes;

  if (currentMinutesTotal >= slotEndMinutes) {
    return 'completed';
  }

  if (currentMinutesTotal >= slotStartMinutes && currentMinutesTotal < slotEndMinutes) {
    return 'ongoing';
  }

  return 'upcoming';
}

/**
 * Gets today's day index (0 = Monday, 4 = Friday)
 * @param date - Current date
 * @returns Day index 0-4 for Mon-Fri, -1 for weekends
 */
export function getTodayDayIndex(date: Date = new Date()): number {
  const day = date.getDay();
  // JavaScript: 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  // We want: 0 = Monday, ..., 4 = Friday
  if (day === 0 || day === 6) {
    return -1; // Weekend
  }
  return day - 1;
}

/**
 * Filters sessions for today from a timetable session list
 * @param sessions - All timetable sessions
 * @param date - Current date (defaults to now)
 * @returns Array of sessions for today, sorted by time slot
 */
export function getTodaySessions(
  sessions: TimetableSession[],
  date: Date = new Date()
): TimetableSession[] {
  const todayDayIndex = getTodayDayIndex(date);

  if (todayDayIndex === -1) {
    // Weekend - no classes
    return [];
  }

  return sessions
    .filter((session) => session.dayIndex === todayDayIndex)
    .sort((a, b) => a.slotIndex - b.slotIndex);
}

/**
 * Converts timetable session to dashboard class card format
 * @param session - Timetable session
 * @param dayIndex - Today's day index (for status determination)
 * @returns Formatted class card data
 */
export function convertSessionToClassCard(
  session: TimetableSession,
  slotIndex: number,
  date?: Date
) {
  const timeSlot = TIME_SLOTS[slotIndex];
  const status = getClassStatus(slotIndex, date);

  return {
    id: session.id,
    name: session.moduleName,
    code: session.moduleCode,
    status: status as ClassStatus,
    time: timeSlot.label,
    location: session.location,
    studentCount: session.studentCount ?? 0,
    type: session.type,
  };
}

/**
 * Gets formatted today's date string
 * @param date - Current date
 * @returns Formatted date string like "Wednesday, January 22, 2026"
 */
export function getFormattedTodayDate(date: Date = new Date()): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
