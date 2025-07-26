import { CreateSpent } from "./CreateSpent"
import { type Props } from "../types/Expense"

export const ListHeaderSpent: React.FC<Props> = ({ onHandleCancel, onHandleOpenModal, onHandleChange, onHandleSubmit, onIsOpenModal, errors, onFormAmount, onFormName }) => {

    return (
        <div className="flex justify-between">
            <h4>Lista De gastos</h4>
            {/*FILTRO*/}
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
            <button className="p-2 w-30 cursor-pointer bg-blue-600 text-white rounded-t-2xl" onClick={onHandleOpenModal}>Nuevo Gasto</button>
            {onIsOpenModal && (
                <CreateSpent
                    onHandleCancel={onHandleCancel}
                    onHandleSubmit={onHandleSubmit}
                    onHandleChange={onHandleChange}
                    onFormName={onFormName}
                    onFormAmount={onFormAmount}
                    errors={errors}
                />
            )}

        </div>
    )
}