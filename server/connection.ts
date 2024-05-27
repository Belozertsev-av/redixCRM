import {initializeApp, getApps, cert} from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore";

const apps = getApps()

if (!apps.length) {
    initializeApp({
        credential: cert('./redix-fd7a9-firebase-adminsdk-v96db-04b3cea590.json')
    })
}
export const db = getFirestore()
