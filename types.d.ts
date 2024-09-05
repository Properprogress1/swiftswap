 interface ISideBarItem {
    name: string;
    path: string;
    icon: any
}

interface ICoinButton{
    coinSymbol:string;
    coinIcon: any;   
    coinPrice: number;
    coinArrow:any;
    coinChart:any;
    increasePercentage:number

}
interface IHistory{
    date:string;
    price:number;
    desc:string;
    coinIcon:any
}