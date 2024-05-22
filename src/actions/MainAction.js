import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from '../firebaseConfig';
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export const getOverallData = async () => {
    const docRef = db.collection('OverallStats').doc("OverallStatStrictVal")
    let data = {}
    await docRef.get().then((doc) => {
        if (doc.exists) data = doc.data()
    }
    ).then(() => {
        console.log("Document Fetched Successfully!");
    }
    ).catch((error) => {
        console.error("Error writing document: ", error);
    })
    return data
}

export const postExerciseData = (exerciseData) => {
    db.collection('TestingPhase').doc("Garbage").set({
        exerciseData
    }).then(() => {
        console.log("Document successfully written!");
        postOverallData(exerciseData)
        console.log("Overall Data Document successfully written!");
    }).catch((error) => {
        console.error("Error writing document: ", error);
    });

}
export const postOverallData = (exerciseData) => {
    const docRef = db.collection('OverallStats').doc("OverallStatStrictVal")
    let dataX = {}
    docRef.get().then((doc) => {
        if (doc.exists) dataX = doc.data()

        docRef.update({
            totalReps: Number(dataX.totalReps || 0) + Number(exerciseData.reps),
            initialWeight: 54,
            currentWeight: 57,
            totalSets: Number(dataX.totalSets || 0) + Number(1),
            totalSteps: 200
        }).then(() => {
            console.log("Document successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    }
    ).then(() => {
        console.log("Document Fetched Successfully!");
    }
    ).catch((error) => {
        console.error("Error writing document: ", error);
    })

}