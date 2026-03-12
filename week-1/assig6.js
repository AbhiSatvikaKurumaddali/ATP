/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92*/
const marks = [78, 92, 35, 88, 40, 67];
// 1. filter() marks ≥ 40 (pass marks)
const passingMarks = marks.filter(mark => mark >= 40);
console.log("Passing Marks (≥ 40):", passingMarks);
// 2. map() to add 5 grace marks to each student
const marksWithGrace = marks.map(mark => mark + 5);
console.log("Marks with Grace:", marksWithGrace);
// 3. reduce() to find highest mark
const highestMark = marks.reduce((max, mark) => (mark > max ? mark : max), marks[0]);
console.log("Highest Mark:", highestMark);
// 4. find() first mark below 40
const firstFailingMark = marks.find(mark => mark < 40);
console.log("First Mark Below 40:", firstFailingMark);
// 5. findIndex() of mark 92
const indexOf92 = marks.findIndex(mark => mark === 92);
console.log("Index of Mark 92:", indexOf92);
