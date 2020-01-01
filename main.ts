//% weight=100 color=#ff0000 icon="\uf06d" block="Blocks2020"
namespace Blocks2020 {

    export enum Years {
        //% block="2020"
        Y2020 = 2020,
        //% block="2019"
        Y2019 = 2019
    }

    export enum Status {
        //% block="到來"
        coming,
        //% block="結束"
        end
    }

    export enum Status2 {
        乖,
        積極,
        表現,
        精明,
        靈活,
        活躍,
        能幹,
        體貼
    }

    export enum Animal {
        貓,
        鼠,
        牛,
        虎,
        兔,
        龍,
        蛇,
        馬,
        羊,
        猴,
        雞,
        狗,
        豬
    }

    export enum Who {
        大家,
        自己,
        老公,
        老婆,
        男朋友,
        女朋友,
        兒子,
        女兒,
        學生,
        同學,
        同事,
        老闆,
        校長,
        鄰居,
        隔壁老王,
        遠處小三
    }

    export enum Wishes {
        小人退散,
        一切平安,
        心想事成,
        談一場戀愛,
        減肥成功,
        跑一場馬拉松,
        月跑量200公里,
        發大財,
        退休,
        繼續做到65歲,
        升官,
        加薪,
        結婚,
        找到男朋友,
        找到女朋友,
        生小孩,
        身材火辣,
        體格健壯,
        溫柔賢慧,
        聰明智慧,
    }
    //% weight=100
    //% blockId=IsComing
    //% block="當 |%myYear|年| %myStatus"
    export function IsComing(myYear: Years, myStatus: Status, myAct: Action): void {
    }

    //% weight=88
    //% blockId=cutFat
    //% block="能減肥 %kg|公斤"
    export function cutFat(kg: number): void {
    }

    //% weight=87
    //% blockId=Lotto
    //% block="能中樂透|%money|億"
    export function Lotto(money: number): void {
    }

    //% weight=86
    //% blockId=student
    //% block="願 %myWho|%myStatus|得像 %animal"
    export function student(myWho: Who, myStatus: Status2, myAnimal: Animal): void {
    }

    //% weight=85
    //% blockId=wish1
    //% block="願 %myWho|能|%myWish"
    export function wish1(myWho: Who, myWish: Wishes): void {
    }

    /**
     * @param myWish to myWish ,eg: "此處開放自行許願"
    */
    //% weight=84
    //% blockId=wish2
    //% block="願 %myWho|%myWish"
    export function wish2(myWho: Who, myWish: string): void {
    }

}
 