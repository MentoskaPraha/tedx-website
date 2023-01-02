/**
 * ! Warning this code is not yet finished!
 * If you wish to contribute please do so in a seperate branch.
*/


////import { initializeApp } from "firebase/app";
////import { getDatabase, ref, child, get } from "firebase/database";
////import { getRemoteConfig, getValue } from "firebase/remote-config";
import content from "./assets/content.json";
import type { aboutMeObject, projectObject } from "./types";

////const firebaseConfig = {
    ////apiKey: "AIzaSyALTtaCPi86s6JXg-O3RvcZTYhvab1YWj4",
    ////databaseURL: "https://mp-website-33f39-default-rtdb.europe-west1.firebasedatabase.app",
    ////projectId: "mp-website-33f39",
    ////appId: "1:151639596749:web:083b62e50d6606225bd384"
////};


////const app = initializeApp(firebaseConfig);
////const database = getDatabase(app);
////const remoteConfig = getRemoteConfig(app);

////remoteConfig.settings.minimumFetchIntervalMillis = 3600000;
////remoteConfig.defaultConfig = {
    ////"checkRemoteDataProject": false,
    ////"checkRemoteDataAbout": false
////};


export function getProjects(): projectObject[]{
    let results;
    ////const dbRef = ref(database);
    ////const checkRemoteData = getValue(remoteConfig, "checkRemoteDataProject");

    ////if(checkRemoteData){
       ////get(child(dbRef, "projects")).then((snapshot) => {
            ////if (snapshot.exists()) {
                ////results = snapshot.toJSON();
            ////} else {
                ////console.log("No data available");
            ////}
        ////}).catch((error) => {
            ////console.error(error);
        ////}); 
    ////}else {
        results = content.projects;
    ////}

    return results as unknown as projectObject[];
}

export function getAboutMe(): aboutMeObject{
    let results;
    ////const dbRef = ref(database);
    ////const checkRemoteData = getValue(remoteConfig, "checkRemoteDataAbout");

    ////if(checkRemoteData){
       ////get(child(dbRef, "aboutMe")).then((snapshot) => {
            ////if (snapshot.exists()) {
                ////results = snapshot.toJSON();
            ////} else {
                ////console.log("No data available");
            ////}
        ////}).catch((error) => {
            ////console.error(error);
        ////}); 
    ////}else {
        results = content.aboutMe;
    ////}
    
    return results as unknown as aboutMeObject;
}
