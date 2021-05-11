export interface AuditoriumModel {
  auditoriumId: number;
  groupId: number;
  name: string;
  subjectName: string;
  subjectId: string;
  courseNumber: number;
  studentCount: number;
  groupLeaderName?: string;
  groupLeaderId: number;
}
