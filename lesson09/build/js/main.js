"use strict";
// Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'conpsci123',
    title: 'Final Project',
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required & readonly
const recordAssignment = (assign) => {
    // send to database etc...
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//Record
const hexColorMap = {
    red: '#FF0000',
    green: '#00FF00',
    blue: '#0000FF',
};
const finalGrades = {
    Sarah: 'B',
    Kelly: 'U',
};
const gradeData = {
    Sarah: { assign1: 85, assign2: 93 },
    Kelly: { assign1: 76, assign2: 15 },
};
const score = {
    studentId: 'k123',
    grade: 85,
};
const preview = {
    studentId: 'k123',
    title: 'Final Project',
};
