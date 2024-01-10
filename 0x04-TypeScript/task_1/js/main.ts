interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}.${lastName}`;
};

interface StudentClassConstructor {
	new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
	workOnHomeWork(): string;
	displayName(): string;
}

class Student implements StudentClass {
	private firstName: string;
	private lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomeWork(): string {
		return "currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}
