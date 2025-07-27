import { UseSpentValidation } from "../hooks/useSpentValidation"
import { type Props, type Expenses } from "../types/Expense"
import { ListHeaderSpent } from "./ListHeaderSpent"
import { mockExpenses } from '../MOOCKS'
import { useState, useEffect } from "react"

export const ListSpent: React.FC<Props> = () => {
    const [form, setForm] = useState<Expenses>({ id: 0, name: "", amount: 0, category: "", date: "", note: "" })
    const [expense, setExpense] = useState<Expenses[]>(mockExpenses as Expenses[])
    const [isOpenModal, setIsOpenModal] = useState(false)
    const { errors, validate, resetErrors } = UseSpentValidation()

    const resetForm = () => {
        setForm({
            id: 0,
            name: "",
            amount: 0,
            category: "",
            date: "",
            note: ""
        } as Expenses);
        resetErrors()
    };

    const handleOpenModal = () => {
        setIsOpenModal(true)
        resetForm()
    }

    const handleCancel = () => {
        setIsOpenModal(false)
        resetForm()
    }

    const handleSubmit = () => {
        if (validate(form)) {
            console.log(`Gasto Enviado Con Éxito!\n\n${JSON.stringify(form, null, 2)}`)

            setExpense(prev => [...prev, form])
        }
        {/*  else {
            alert(`WOPS Algo Está Mal\n\n${JSON.stringify(errors, null, 2)}`)
        } */}
        setIsOpenModal(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: name === "amount" ? +value : value,
        }))
    }

    useEffect(() => {
        localStorage.setItem('expenses', JSON.stringify(expense))
    }, [expense])

    useEffect(() => {
        const data = localStorage.getItem('expense')
        if (data) setExpense(JSON.parse(data))
    }, [])

    return (
        <div className="p-4 w-110 scale-120">
            <ListHeaderSpent
                onHandleOpenModal={handleOpenModal}
                onHandleCancel={handleCancel}
                onHandleSubmit={handleSubmit}
                onHandleChange={handleChange}
                onFormCategory={form.category}
                onIsOpenModal={isOpenModal}
                onFormAmount={form.amount}
                onFormName={form.name}
                onFormDate={form.date}
                onFormNote={form.note}
                onSetForm={setForm}
                errors={errors}
                onForm={form}
            />
            <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="p-2 border">Nombre</th>
                        <th className="p-2 border">Monto</th>
                        <th className="p-2 border">Fecha</th>
                        <th className="p-2 border">Categoría</th>
                        <th className="p-2 border">Nota</th>
                    </tr>
                </thead>
                <tbody>
                    {expense.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="p-2 border">{item.name}</td>
                            <td className="p-2 border">${item.amount.toLocaleString("es-CO")}</td>
                            <td className="p-2 border">{item.date || 'hoy'}</td>
                            <td className="p-2 border">{item.category}</td>
                            <td className="p-2 border">{item.note || "Sin nota"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
