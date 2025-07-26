import { type Props } from "../types/Expense"

export const CreateSpent: React.FC<Props> = ({ onHandleCancel, onHandleChange, onHandleSubmit, onForm, onFormName, onFormAmount, errors }) => {
    return (
        <>
            <div className="fixed inset-0 bg-neutral-700/25 backdrop-blur-[2px] z-40" />
            <div className="fixed top-1/2 right-0 h-[90vh] w-full max-w-md bg-white shadow-xl z-50 p-6 flex flex-col transform -translate-y-1/2 rounded-l-lg overflow-y-auto">
                <h4 className="text-lg font-semibold text-center">Crea Tu Gasto</h4>

                <div className="flex flex-col gap-2">
                    <label className="text-sm">Nombre del gasto</label>
                    <input
                        type="text"
                        name="name"
                        value={onFormName}
                        onChange={onHandleChange}
                        placeholder="Ej: Hamburguesa"
                        className="border p-2 rounded outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {errors?.name && <p className="text-red-500">{errors.name}</p>}

                <div className="flex flex-col gap-2">
                    <label className="text-sm">Dinero total gastado</label>
                    <input
                        type="number"
                        name="amount"
                        value={onFormAmount}
                        onChange={onHandleChange}
                        placeholder="Ej: 20000"
                        className="border p-2 rounded outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {errors?.amount && <p className="text-red-500">{errors.amount}</p>}

                <div className="flex flex-col gap-2">
                    <label className="text-sm">Categoría</label>
                    <select className="border p-2 rounded outline-none focus:ring focus:ring-blue-200" name="category" value={onForm?.category} onChange={onHandleChange}>
                        <option value="">Selecciona una categoría</option>
                        <option value="comida">Comida</option>
                        <option value="movilidad">Movilidad</option>
                        <option value="ocio">Ocio</option>
                        <option value="hogar">Hogar</option>
                        <option value="otro">Otro</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm">Fecha</label>
                    <input
                        type="date"
                        name="date"
                        onChange={onHandleChange}
                        className="border p-2 rounded outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm">Nota</label>
                    <input
                        type="text"
                        name="note"
                        onChange={onHandleChange}
                        placeholder="Opcional"
                        className="border p-2 rounded outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className="flex">
                    <button className="mt-4 w-50 mr-1 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition cursor-pointer" onClick={onHandleSubmit}>
                        Enviar Gasto
                    </button>
                    <button className="mt-4 w-50 ml-1 bg-red-600 text-white p-2 rounded hover:bg-red-700 transition cursor-pointer" onClick={onHandleCancel}>
                        Cancelar
                    </button>
                </div>
            </div>
        </>

    )
}