import mongoose from 'mongoose'
import moment from 'moment'
const Schema = mongoose.Schema

const CourtSchema = new Schema({
    title :String,
    text: String,
    date: String
});

CourtSchema.methods.setDate = function () {
    this.date = moment().format("YYYY-MM-DD HH:mm:ss")
};

// スキーマをモデルとしてコンパイルし、それをモジュールとして扱えるようにする
module.exports = mongoose.model('ArticleModel', CourtSchema)