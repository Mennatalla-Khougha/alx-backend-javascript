namespace Subjects {
	export class Subject {
		teacher: Subjects.Teacher;

		set setTeacher(teacher: Teacher) {
			this.teacher = teacher;
		}

		get getTeacher(): Teacher {
			return this.teacher;
		}
	}
}
