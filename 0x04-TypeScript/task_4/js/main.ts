/// <reference path="./subjects/Cpp.ts" />;
/// <reference path="./subjects/Java.ts" />;
/// <reference path="./subjects/React.ts" />;
/// <reference path="./subjects/Subject.ts" />;
/// <reference path="./subjects/Teacher.ts" />;

const cpp: Subjects.Cpp = new Subjects.Cpp();
const java: Subjects.Java = new Subjects.Java();
const react: Subjects.React = new Subjects.React();

const cTeacher: Subjects.Teacher = {
	firstName: "Mennatalla",
	lastName: "Khougha",
	experienceTeachingC: 10,
};

console.log("c++");
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log("Java");
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log("React");
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

module.exports = { cpp, java, react, cTeacher };
