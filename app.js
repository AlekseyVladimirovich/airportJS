const name_menu=["Вылетающие рейсы","Прилетающие рейсы","Задержанные рейсы"]

///Отправляющиеся рейсы
const airsDep = [{"FsCode":"SU1130","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"23:00","arrivalAirportFsCode":"Sochi International Airport","arrivalTime":"01:35","status":"Отправление"},
{"FsCode":"SU1172","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:25","arrivalAirportFsCode":"Astrakhan Airport","arrivalTime":"01:50","status":"Отправление"},
{"FsCode":"N4*721","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:55","arrivalAirportFsCode":"Suvarnabhumi Airport","arrivalTime":"11:50","status":"Отправление"},
{"FsCode":"SU1532","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:50","arrivalAirportFsCode":"Chelyabinsk International Airport","arrivalTime":"03:30","status":"Отправление"},
{"FsCode":"SU286","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:05","arrivalAirportFsCode":"Bandaranaike International Airport","arrivalTime":"09:05","status":"Отправление"},
{"FsCode":"SU512","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:15","arrivalAirportFsCode":"Imam Khomeini International Airport","arrivalTime":"02:45","status":"Отправление"},
{"FsCode":"SU1936","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:10","arrivalAirportFsCode":"Karaganda Airport","arrivalTime":"04:55","status":"Отправление"},
{"FsCode":"SU1844","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:20","arrivalAirportFsCode":"Chisinau International Airport","arrivalTime":"00:40","status":"Отправление"},
{"FsCode":"SU1274","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:30","arrivalAirportFsCode":"Krasnodar International Airport","arrivalTime":"01:05","status":"Отправление"},
{"FsCode":"SU1216","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:00","arrivalAirportFsCode":"Kurumoch International Airport","arrivalTime":"00:55","status":"Отправление"},
{"FsCode":"IK*197","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:45","arrivalAirportFsCode":"Pulkovo Airport","arrivalTime":"00:05","status":"Отправление"},
{"FsCode":"SU34","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:45","arrivalAirportFsCode":"Pulkovo Airport","arrivalTime":"00:15","status":"Отправление"},
{"FsCode":"SU1056","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:00","arrivalAirportFsCode":"Makhachkala Airport","arrivalTime":"00:55","status":"Отправление"},
{"FsCode":"SU320","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:30","arrivalAirportFsCode":"Velana International Airport","arrivalTime":"09:35","status":"Отправление"},
{"FsCode":"SU1322","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:25","arrivalAirportFsCode":"Murmansk Airport","arrivalTime":"01:05","status":"Отправление"},
{"FsCode":"SU1314","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:35","arrivalAirportFsCode":"Mineralnye Vody Airport","arrivalTime":"01:05","status":"Отправление"},
{"FsCode":"SU1834","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:55","arrivalAirportFsCode":"Minsk National Airport","arrivalTime":"00:25","status":"Отправление"}]

///Прибывающие рейсы
const airsARR = [{"FsCode":"SU1125","departureAirportFsCode":"Sochi International Airport","departureTime":"23:00","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"01:35","status":"Прибытие"},
{"FsCode":"SU2583","departureAirportFsCode":"London Heathrow Airport","departureTime":"17:15","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:10","status":"Прибытие"},
{"FsCode":"SU509","departureAirportFsCode":"Ben Gurion International Airport","departureTime":"18:50","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:30","status":"Прибытие"},
{"FsCode":"AF1144","departureAirportFsCode":"Charles de Gaulle Airport","departureTime":"18:55","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:40","status":"Прибытие"},
{"FsCode":"RU782","departureAirportFsCode":"Frankfurt Airport","departureTime":"19:10","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:25","status":"Прибытие"},
{"FsCode":"RU718","departureAirportFsCode":"Frankfurt Airport","departureTime":"19:20","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:35","status":"Прибытие"},
{"FsCode":"P3A766","departureAirportFsCode":"Frankfurt Airport","departureTime":"19:20","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:40","status":"Прибытие"},
{"FsCode":"SU527","departureAirportFsCode":"Dubai Airport","departureTime":"19:30","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:10","status":"Прибытие"},
{"FsCode":"SU1493","departureAirportFsCode":"Murmansk Airport","departureTime":"21:40","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:10","status":"Прибытие"},
{"FsCode":"SU1169","departureAirportFsCode":"Platov International Airport","departureTime":"22:00","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:05","status":"Прибытие"},
{"FsCode":"FV6182","departureAirportFsCode":"Sochi International Airport","departureTime":"22:40","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:55","status":"Прибытие"},
{"FsCode":"SU31","departureAirportFsCode":"Pulkovo Airport","departureTime":"22:45","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:15","status":"Прибытие"},
{"FsCode":"SU1250","departureAirportFsCode":"Begishevo Airport","departureTime":"22:45","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:40","status":"Прибытие"},
{"FsCode":"SU1458","departureAirportFsCode":"Novokuznetsk Airport","departureTime":"22:25","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"06:55","status":"Прибытие"},
{"FsCode":"SU1762","departureAirportFsCode":"Omsk Airport","departureTime":"22:10","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"04:40","status":"Прибытие"},
{"FsCode":"SU1164","departureAirportFsCode":"Platov International Airport","departureTime":"22:50","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:55","status":"Прибытие"},
{"FsCode":"SU1845","departureAirportFsCode":"Chisinau International Airport","departureTime":"22:20","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"00:40","status":"Прибытие"}]

////задержанные рейсы
const airsERR = [{"FsCode":"SU1556","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"00:00","arrivalAirportFsCode":"Tbilisi International Airport","arrivalTime":"02:35","status":"Задержан"},
{"FsCode":"RU716","departureAirportFsCode":"Charles de Gaulle Airport","departureTime":"20:20","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"02:10","status":"Задержан"},
{"FsCode":"AF1844","departureAirportFsCode":"Charles de Gaulle Airport","departureTime":"20:45","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"02:35","status":"Задержан"},
{"FsCode":"BT426","departureAirportFsCode":"heremetyevo International Airport","departureTime":"23:20","arrivalAirportFsCode":"Riga International AirportS","arrivalTime":"02:00","status":"Задержан"},
{"FsCode":"RU792","departureAirportFsCode":"Incheon International Airport","departureTime":"23:30","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"03:00","status":"Задержан"},
{"FsCode":"FC719","departureAirportFsCode":"Helsinki-Vantaa Airport","departureTime":"23:55","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"02:35","status":"Задержан"},
{"FsCode":"IK*198","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"00:55","arrivalAirportFsCode":"Pulkovo Airport","arrivalTime":"02:15","status":"Задержан"},
{"FsCode":"SU279","departureAirportFsCode":"Phuket International Airport","departureTime":"21:00","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"03:10","status":"Задержан"},
{"FsCode":"AZ596","departureAirportFsCode":"Leonardo da Vinci-Fiumicino Airport","departureTime":"21:30","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"03:15","status":"Задержан"},
{"FsCode":"SU2305","departureAirportFsCode":"Frankfurt Airport","departureTime":"22:15","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"03:25","status":"Задержан"},
{"FsCode":"SU2349","departureAirportFsCode":"Hamburg Airport","departureTime":"22:30","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"03:15","status":"Задержан"},
{"FsCode":"SU2339","departureAirportFsCode":"Stuttgart Airport","departureTime":"22:30","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"03:40","status":"Задержан"},
{"FsCode":"SU2393","departureAirportFsCode":"Zurich Airport","departureTime":"22:30","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"03:45","status":"Задержан"},
{"FsCode":"SU2193","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:35","arrivalAirportFsCode":"Amsterdam Airport Schiphol","arrivalTime":"03:50","status":"Задержан"},
{"FsCode":"SU2595","departureAirportFsCode":"Franz Josef Strauss Airport","departureTime":"22:45","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"03:45","status":"Задержан"},
{"FsCode":"SU2063","departureAirportFsCode":"Sheremetyevo International Airport","departureTime":"22:50","arrivalAirportFsCode":"Sofia Airport","arrivalTime":"03:05","status":"Задержан"},
{"FsCode":"QS1198","departureAirportFsCode":"Vaclav Havel Airport Prague","departureTime":"23:25","arrivalAirportFsCode":"Sheremetyevo International Airport","arrivalTime":"04:00","status":"Задержан"}]

const menu = [airsDep,airsARR,airsERR]

const nnn = []
for (var i=0; i<airsDep.length;i++){
        nnn.push(airsDep[i])
        nnn.push(airsARR[i])
        nnn.push(airsERR[i])
        }

new Vue({
  el: '#app',
  data: {
    name_menu: name_menu,
    SelectedAirIndex: 0,
    searchString: "",
    airs: menu[0],
    articles: nnn
  },
  methods: {
    selectMen:function(index) {
        this.SelectedAirIndex = index
        this.airs = menu[index]
    }
  },
  computed: {
    filteredArticles: function () {
              var articles_array = this.articles,
                  searchString = this.searchString;
                  searchString_null = ''

              if(!searchString){
                  return searchString_null;
              }

              searchString = searchString.trim().toLowerCase();

              articles_array = articles_array.filter(function(item){
                  if(item.FsCode.toLowerCase().indexOf(searchString) !== -1 ){
                      return item;
                  }
              })

              // Возвращает массив с отфильтрованными данными.
              return articles_array;;
          }

  }
})
