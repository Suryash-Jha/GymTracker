import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebaseConfig from "../firebaseConfig";
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const getOverallData = async () => {
  const docRef = db.collection("OverallStats").doc("OverallStatStrictVal");
  let data = {};
  await docRef
    .get()
    .then((doc) => {
      if (doc.exists) data = doc.data();
    })
    .then(() => {
      console.log("Document Fetched Successfully!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  return data;
};

export const postExerciseData = (exerciseData) => {
  db.collection("TestingPhase")
    .doc("Garbage")
    .set({
      exerciseData,
    })
    .then(() => {
      console.log("Document successfully written!");
      postOverallData(exerciseData);
      console.log("Overall Data Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};
export const postOverallData = (exerciseData) => {
  const docRef = db.collection("OverallStats").doc("OverallStatStrictVal");
  let dataX = {};
  docRef
    .get()
    .then((doc) => {
      if (doc.exists) dataX = doc.data();

      docRef
        .update({
          totalReps: Number(dataX.totalReps || 0) + Number(exerciseData.reps),
          initialWeight: 54,
          currentWeight: 57,
          totalSets: Number(dataX.totalSets || 0) + Number(1),
          totalSteps: 200,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    })
    .then(() => {
      console.log("Document Fetched Successfully!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};

export const fetchBodyPartList = async () => {
  const docRef = db.collection("WeeklySchedule").doc("BodyPartList");
  let data = {};
  await docRef
    .get()
    .then((doc) => {
      if (doc.exists) data = doc.data();
    })
    .then(() => {
      console.log("Document Fetched Successfully!", "===>", data);
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  console.log("data-->", data.exerciseList);
  return data.exerciseList;
};
export const fetchExerciseList = async (bodyPart) => {
  const docRef = db.collection("ExerciseList").doc(bodyPart);
  let data = {};
  await docRef
    .get()
    .then((doc) => {
      if (doc.exists) data = doc.data();
    })
    .then(() => {
      console.log("Document Fetched Successfully!", bodyPart, "--->", data);
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  return data;
};
export const postBodyPartList = (exerciseList) => {
  db.collection("WeeklySchedule")
    .doc("BodyPartList")
    .set({
      exerciseList,
    })
    .then(() => {
      console.log("Document successfully written!");
      console.log("Overall Data Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};
export const postExerciseList = (bodyPart, exerciseList) => {
  db.collection("ExerciseList")
    .doc(bodyPart)
    .set({
      list: exerciseList,
    })
    .then(() => {
      console.log("Document successfully written!");
      console.log("Overall Data Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};
