import { useDispatch, useSelector } from "react-redux";
import style from "./Sidebar.module.scss";
import { changeEmail } from "../../redux/changeEmail";
import { IEmployees } from "./Sidebar.props";
import { EmployeeItem } from "./EmployeeItem/EmployeeItem";

export const Sidebar = ({...props}) => {
    const dispatch = useDispatch();
    const employees = useSelector((state: IEmployees) => state.employees.default); 
    return (
        <aside {...props} className={style.hierarchicalTree}>
            <ul>
                {employees.map(employee => (
                    <EmployeeItem 
                        key={employee._id}
                        name={employee.name}
                        friends={employee.friends}
                    />
                ))}
            </ul>
        </aside>
    )
} 