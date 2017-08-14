export class WorkCard{
    constructor(
        public category: string,
        public tags: string,
        public userName: string,
        public userPortrait?: string,
        public userId?: string,
        public img?: any,
        public id?: string,
    ){}
}