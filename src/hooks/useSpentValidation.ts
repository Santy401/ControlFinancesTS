import { useState } from "react"

export const UseSpentValidation = () => {
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const validate = (data: { name: string, amount: number }) => {
        const newError: typeof errors = {}

        if (!data.name || data.name.trim().length < 3) {
            newError.name = 'El nombre debe tener al menos 3 caracteres'
        }

        if (data.amount <= 0) {
            newError.amount = "El monto debe ser mayor que 0"
        }
        setErrors(newError)
        return Object.keys(newError).length === 0
    }
    return { errors, validate }
}