export interface textboxData{
    fullName: string,
    email: string,
    currentAddress: string,
    permanentAddress: string
}

export function getTextboxData(): textboxData{
    return{
        fullName: 'John Snow',
        email: 'john111@gmail.com',
        currentAddress: '111, Victoria Street',
        permanentAddress: '09, Cammbridge Street'
    }
}