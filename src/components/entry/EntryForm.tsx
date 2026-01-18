import { useRouter } from "next/router";

//申し込み入力画面
const EntryForm=()=>{
    const router=useRouter();
    const goToEntryCheck=()=>{
       router.push("/EntryCheck");
    }
    return(
        <>
        <label>氏名の入力
        <input placeholder="苗字名前"></input>
        </label>
        <div>
        <button onClick={goToEntryCheck}>確認画面に進む</button>
        </div>
        </>
    )
}

export default EntryForm;