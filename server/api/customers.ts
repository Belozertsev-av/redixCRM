import {db} from '../connection'
import {H3Event} from "h3";
import {Customers} from "~/server/model/commonTypes";

export default defineEventHandler(async (event: H3Event) => {
    const customerSnap = await db.collection('customers').get()
    return customerSnap.docs.map(doc => {
        return {
            uuid: doc.id,
            ...doc.data()
        } as unknown as Customers[]
    })
})