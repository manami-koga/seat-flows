import tableStyles from "../style/table.module.css";
//運営側の応募者管理画面
const UserManagement=()=>{
    const AddSeat=()=>{
        alert("追加ボタンを押下しました");
    }
    return(
        <>
        <div className={tableStyles.table}>
        <table className={tableStyles.design08}>
        座席番号：
        <button onClick={AddSeat}>追加</button>
        座席一覧
        <td>No</td>
        <th></th>
        <td>座席番号</td>
        <th></th>
        合計：席
        </table>
        </div>
        </>
    )
}
export default UserManagement;