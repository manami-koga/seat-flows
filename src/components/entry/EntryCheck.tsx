import { useRouter } from "next/router";

const EntryCheck=()=>{
    const router=useRouter();
    const goToEntryComp=()=>{
router.push("/EntryComp");
    }
    return(
        <>
        確認画面です
            <button onClick={goToEntryComp}>申し込む</button>
        </>
    )
}
export default EntryCheck;