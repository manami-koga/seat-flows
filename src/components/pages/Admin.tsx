import { useRouter } from "next/navigation";

//運営側のトップページ画面
const Admin=()=>{
    const router = useRouter();
    const onClickEventHandly=()=>{
        alert("ボタンが押下されました")
    }

    const goToUserManagement=()=>{
        router.push("/UserManagement")
    }

    return(
        <>
        応募者数：0人
        座席数：0席
        抽選状態：xxx
        <div>
        <button onClick={goToUserManagement}>応募者管理へ</button>
        <button onClick={onClickEventHandly}>座席管理へ</button>
        <button onClick={onClickEventHandly}>抽選実行</button>
        <button onClick={onClickEventHandly}>結果確認へ</button>
        </div>
        </>
        
    )
}
export default Admin;