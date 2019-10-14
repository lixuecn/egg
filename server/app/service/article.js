const Service=require('egg').Service;

class ArticleService extends Service{
    async create(params){
        const {app}=this
        try {
            console.log(params);
            const result=await app.mysql.insert('article',params)
            return result
        } catch (error) {
            console.log(error);
            return null
        }
    }
    async lists(){
        const {app}=this
        try {
            // const result =await app.mysql.select('article',{limit:10,offset:1*10})
            const result =await app.mysql.select('article')

            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    async detail(id){
        if(!id){
            console.log('id必须传递');
            return null
        }

        try {
            const result =await this.app.mysql.get('article',{id})
            return result
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports=ArticleService