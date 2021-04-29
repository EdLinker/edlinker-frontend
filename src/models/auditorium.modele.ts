export interface AuditoriumModele {
  auditoriumId: number;
  groupId: number;
  name: string;
  subjectName: string;
  courseNumber: number;
  studentCount: number;
  groupLeaderName?: string;
  groupLeaderId: number;
}
