import {cert, getApps, initializeApp} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

const apps = getApps()

if (!apps.length) {
    initializeApp({
        credential: cert('./redix-fd7a9-firebase-adminsdk-v96db-e75f313bec.json')
    })
}
export const db = getFirestore()
