import {db} from '../connection'
import {H3Event} from "h3";
import {Employees} from "~/server/model/commonTypes";

export default defineEventHandler(async (event: H3Event) => {
    const employeesSnap = await db.collection('employees').get()
    return employeesSnap.docs.map(doc => {
        return {
            uuid: doc.id,
            ...doc.data()
        } as unknown as Employees[]
    })
})