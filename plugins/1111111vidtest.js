const MyPnky = require( ../events );
const {MessageType,Mimetype} = require( @adiwajshing/baileys );
const translatte = require( translatte );
const config = require( ../config );
const Pinky = require( ../pinky );
const LanguageDetect = require( languagedetect );
const lngDetector = new LanguageDetect();
const Heroku = require( heroku-client );
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI =  /apps/  + config.HEROKU.APP_NAME;
//============================== LYRICS =============================================
const axios = require( axios );
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
const { exchangeRates } = require( exchange-rates-api );
const ExchangeRatesError = require( exchange-rates-api/src/exchange-rates-error.js )
//============================== TTS ==================================================
const fs = require( fs );
const https = require( https );
const googleTTS = require( google-translate-tts );
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require( ytdl-core );
const ffmpeg = require( fluent-ffmpeg );
const yts = require(  yt-search  )
const got = require("got");
const ID3Writer = require( browser-id3-writer );
const SpotifyWebApi = require( spotify-web-api-node );

const spotifyApi = new SpotifyWebApi({
    clientId:  acc6302297e040aeb6e4ac1fbdfd62c3 ,
    clientSecret:  0e8439a1280a43aba9a5bc0a16f3f009 
});
//=====================================================================================
const Language = require( ../language );
const Lang = Language.getString( scrapers );
const Glang = Language.getString( github );
const Slang = Language.getString( lyrics );
const Clang = Language.getString( covid );

const wiki = require( wikijs ).default;
var gis = require( g-i-s );

var dlang_dsc =   
var closer_res =   
var dlang_lang =   
var dlang_similarity =   
var dlang_other =   
var dlang_input =   

if (config.LANG ==  SI ) {
    dlang_dsc =  Yan??tlanan mesaj??n dilini tahmin eder. 
    closer_res =  En Yak??n Sonu??: 
    dlang_lang =  Dil: 
    dlang_similarity =  Benzerlik: 
    dlang_other =  Di??er Diller 
    dlang_input =  ????lenen Metin: 
}
if (config.LANG ==  EN ) {
    dlang_dsc =  Guess the language of the replied message. 
    closer_res =  Closest Result: 
    dlang_lang =  Language: 
    dlang_similarity =  Similarity: 
    dlang_other =  Other Languages 
    dlang_input =  Processed Text: 
}
if (config.LANG ==  AZ ) {
    dlang_dsc =  Cavablanan mesaj??n dilini t??xmin edin. 
    closer_res =  ??n yax??n n??tic??: 
    dlang_lang =  Dil: 
    dlang_similarity =  B??nz??rlik: 
    dlang_other =  Ba??qa Dill??r 
    dlang_input =  ????l??nmi?? M??tn: 
}
if (config.LANG ==  ML ) {
    dlang_dsc =  ?????????????????? ??????????????? ?????????????????????????????????????????? ????????? ess ?????????????????????. 
    closer_res =  ????????????????????? ?????????????????? ?????????: 
    dlang_lang =  ????????????: 
    dlang_similarity =  ???????????????: 
    dlang_other =  ??????????????? ??????????????? 
    dlang_input =  ??????????????????????????? ??????????????? ???????????????: 
}
if (config.LANG ==  HI ) {
    dlang_dsc =  ??????????????? ????????? ?????? ??????????????? ?????? ???????????? ?????? ?????????????????? ??????????????? 
    closer_res =  ?????????????????? ??????????????????: 
    dlang_lang =  ???????????????: 
    dlang_similarity =  ??????????????????: 
    dlang_other =  ???????????? ?????????????????? 
    dlang_input =  ????????????????????? ?????????: 
}
if (config.LANG ==  ES ) {
    dlang_dsc =  Adivina el idioma del mensaje respondido. 
    closer_res =  Resultado m??s cercano: 
    dlang_lang =  Lengua: 
    dlang_similarity =  Semejanza: 
    dlang_other =  Otros idiomas: 
    dlang_input =  Texto procesado: 
}
if (config.LANG ==  PT ) {
    dlang_dsc =  Adivinhe o idioma da mensagem respondida. 
    closer_res =  Resultado mais pr??ximo: 
    dlang_lang =  L??ngua: 
    dlang_similarity =  Similaridade: 
    dlang_other =  Outras l??nguas 
    dlang_input =  Texto Processado: 
}
if (config.LANG ==  ID ) {
    dlang_dsc =  Tebak bahasa pesan yang dibalas. 
    closer_res =  Hasil Terdekat: 
    dlang_lang =  Lidah: 
    dlang_similarity =  Kesamaan: 
    dlang_other =  Bahasa Lainnya 
    dlang_input =  Teks yang Diproses: 
}
if (config.LANG ==  RU ) {
    dlang_dsc =  ???????????? ???????? ?????????????????? ??????????????????. 
    closer_res =  ?????????????????? ??????????????????: 
    dlang_lang =  ????????: 
    dlang_similarity =  ??????????????o: 
    dlang_other =  ???????????? ?????????? 
    dlang_input =  ???????????????????????? ??????????: 
}


if (config.WORKTYPE ==  private ) {

    MyPnky.addCommand({pattern:  '2video ?(.*)' , fromMe: true, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] ===   ) return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);
            
        var VID =   ;
        try {
            if (match[1].includes( watch )) {
                var tsts = match[1].replace( watch?v= ,   )
                var alal = tsts.split( / )[3]
                VID = alal
            } 
              
                if (match[1].includes( shorts )) {
                var rmx = match[1].replace( shorts/ ,   )
				var rmy = rmx.replace( ?feature=share ,   )
                var data = rmy.split( / )[3]
                VID = data
            
             }
               else {     
                VID = match[1].split( / )[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container ===  mp4  && [ 720p ,  480p ,  360p ,  240p ,  144p ].map(() => true)});
        yt.pipe(fs.createWriteStream( ./  + VID +  .mp4 ));

        yt.on( end , async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync( ./  + VID +  .mp4 ), MessageType.video, {mimetype: Mimetype.mp4 , caption:  \n + VID.title + \n\n });
        });
    }));


    

}
else if (config.WORKTYPE ==  public ) {

    

    MyPnky.addCommand({pattern:  '2video ?(.*)' , fromMe: false, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] ===   ) return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
            
        var VID =   ;
        try {
            if (match[1].includes( watch )) {
                var tsts = match[1].replace( watch?v= ,   )
                var alal = tsts.split( / )[3]
                VID = alal
            } 
           
            if (match[1].includes( shorts )) {
                var rmx = match[1].replace( shorts/ ,   )
				var rmy = rmx.replace( ?feature=share ,   )
                var data = rmy.split( / )[3]
                VID = data
            }
      
            else {     
                   VID = match[1].split( / )[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container ===  mp4  && [ 720p ,  480p ,  360p ,  240p ,  144p ].map(() => true)});
        yt.pipe(fs.createWriteStream( ./  + VID +  .mp4 ));

        yt.on( end , async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync( ./  + VID +  .mp4 ), MessageType.video, {quoted: message.data ,mimetype: Mimetype.mp4 , caption:  \n + VID.title + \n\n });
        });
    }));
