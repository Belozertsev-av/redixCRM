import {db} from '../connection'
import {H3Event} from "h3";
import {Damage} from "~/server/model/commonTypes";
export default defineEventHandler(async (event: H3Event) => {
    const damagesSnap = await db.collection('damages').get()
    return damagesSnap.docs.map(doc => {
        return {
            uuid: doc.id,
            ...doc.data()
        } as Damage[]
    })
})