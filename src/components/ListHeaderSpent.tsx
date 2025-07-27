import { CreateSpent } from "./CreateSpent"
import { type Props } from "../types/Expense"

export const ListHeaderSpent: React.FC<Props> = ({ onHandleCancel, onHandleOpenModal, onHandleChange, onHandleSubmit, onIsOpenModal, errors, onFormAmount, onFormName }) => {

    return (
        <div className="flex justify-between">

            {/*FILTRO*/}
            <div>

                <ul>

                    <li>

                    </li>

                </ul>

            </div>
            {/*FILTRO*/}

            <button className="p-2 w-screen cursor-pointer bg-blue-600 text-white rounded-t-2xl" onClick={onHandleOpenModal}>Nuevo Gasto</button>
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