interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let firstStudent: Student = {
	firstName: "Mennatalla",
	lastName: "Khougha",
	age: 33,
	location: "Alexandria",
};

let secondStudent: Student = {
	firstName: "Roquia",
	lastName: "Khalifa",
	age: 8,
	location: "Alexandria",
};

let studentsList: Student[] = [firstStudent, secondStudent];

let table = document.createElement("table");
document.body.append(table);

studentsList.forEach((student) => {
	let row = document.createElement("tr");
	let cell1 = document.createElement("td");
	let cell2 = document.createElement("td");

	cell1.textContent = student.firstName;
	cell2.textContent = student.location;

	row.append(cell1);
	row.append(cell2);
	table.append(row);
});
