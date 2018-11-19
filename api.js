const request = require('request')
const fs = require("fs");

var now = new Date()
var now_year = now.getFullYear()
var now_month = now.getMonth() + 1
var now_day = now.getDate()

// Время, с которого мы хотим получить список рейсов
var requestedHour = now.getHours()

// ключи к личному кабинету api flightstats
var appId = "994ea1ce"
var appKey = "00f01b42381d994b017ad8c8b6dc4c8c"

// Название аэропорта. Может быть запрошен как по внутреннему коду flightstats, так и по кодам ICAO или IATA
var requestedAirport = "SVO"
var airports
//  Данные по аэропортам будут храниться в словаре (dictionary)
var airportsDict = {}
// Какие рейсы нам нужны. arr - прибывающие, dep - отбывающие
var flightsType = "arr"
//  flightsType_dep = 'dep'

// Количество часов, за которые будет составлен список
var requestedNumHours = "1"

// Заготовка для запроса
// var url = "https://api.flightstats.com/flex/schedules/rest/v1/json/from/"+requestedAirport+"/"+flightsType+"/"+now_year+"/"+now_month+"/"+now_day+"/"+requestedHour+"?"+"appId="+appId+"&appKey="+appKey
var url = "https://api.flightstats.com/flex/flightstatus/rest/v2/json/airport/status/"+requestedAirport+"/"+flightsType+"/"+now_year+"/"+now_month+"/"+now_day+"/"+requestedHour+"?appId="+appId+"&appKey="+appKey+"&utc=False&numHours="+requestedNumHours
// Шлем запрос и получаем JSON-ответ
function InfoTest(){
 request.get(url, function(error, response) {
       if (response.statusCode != 200) {
            console.log('Response', response.statusCode)
            return error
        }
        var parse = JSON.parse(response.body)
         //    Сохраняем ветку с аэропортами
        airports = parse["appendix"]["airports"]
        // Для каждого аэропорта записываем пару [код flightstats]:[название]
        for (var i=0; i<airports.length;i++){
        airportsDict[airports[i]['fs']] = airports[i]['name']
        }
        // Обход каждого рейса
        var flightStatuses=parse["flightStatuses"]
        // Сбор данных по прилету-отлету
        for (i = 0; i < flightStatuses.length; i++) {
            var FsCode = flightStatuses[i]["carrierFsCode"]
            var flightNumber = flightStatuses[i]['flightNumber']
            var departureAirportFsCode = airportsDict[flightStatuses[i]["departureAirportFsCode"]]
            var departureTime = String(flightStatuses[i]["departureDate"]["dateLocal"]).slice(11,16)
            var arrivalAirportFsCode = airportsDict[flightStatuses[i]["arrivalAirportFsCode"]]
            var arrivalTime = String(flightStatuses[i]["arrivalDate"]["dateLocal"]).slice(11,16)
            ///////// меняется переменная в зависимости от запроса.. по умолчанию задержан
        info = {
                  "FsCode": FsCode,
                  "flightNumber": flightNumber,
                  "departureAirportFsCode": departureAirportFsCode,
                  "departureTime": departureTime,
                  "arrivalAirportFsCode": arrivalAirportFsCode,
                  "arrivalTime": arrivalTime,
                  "status": "Задержан"
                }
        // fs.appendFileSync("phones.json",FsCode+flightNumber+departureAirportFsCode+departureTime+arrivalAirportFsCode+arrivalTime)
        // callback(FsCode,flightNumber,departureAirportFsCode,departureTime,arrivalAirportFsCode,arrivalTime)
        // callback(info)
        fs.appendFileSync("data.json",JSON.stringify(info))
        }
})
}

InfoTest()