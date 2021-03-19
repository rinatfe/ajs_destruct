export default function dest({special:[...arg]}=obj){
    const arr = [];
    for(let i = 0; i < arg.length; i++) {
        let{id, name, icon, description = "Описание отсутствуе"} = arg[i]; 
        arr.push({id, name,icon, description})
    }
    return arr
}