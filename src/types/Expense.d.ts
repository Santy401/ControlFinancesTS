export interface Expenses {
    id?: number
    name: string
    amount: number
    category: string
    date?: string
    note?: string
}

type FormErrors = {
  name?: string
  amount?: string
}


export interface Props {
    onHandleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    onSetForm?: React.Dispatch<React.SetStateAction<Expenses>>
    onHandleOpenModal?: () => void
    onHandleSubmit?: ()  => void
    onHandleCancel?: () => void
    onIsOpenModal?: boolean
    onFormCategory?: string
    onFormAmount?: number
    onFormName?: string
    onFormDate?: string
    onFormNote?: string
    errors?: FormErrors
    onForm?: Expenses
}
