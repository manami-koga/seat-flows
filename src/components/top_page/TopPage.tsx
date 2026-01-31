//最初の画面

import { useRouter } from "next/navigation"

const TopPage=()=>{
    const router=useRouter();

    const goToUserPage=()=>{
        router.push("/EntryForm");
    }

    const goToManagementPage=()=>{
        router.push("/Admin");
    }

    return(
        <>
        <button onClick={goToUserPage}>ユーザ向け</button>
        <button onClick={goToManagementPage}>管理者向け</button>
        </>
    )
}

export default TopPage;