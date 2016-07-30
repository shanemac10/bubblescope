var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost/okcoders');      // for localhost-ing for deveolpment
mongoose.connect('mongodb://okcoders:okcoders@okcoders.co/shane');  //for live public hosting
mongoose.Promise = Promise;

var app = express();
app.use(express.static('./public'));
app.use(bodyParser());

var ContactEntry = require('./models/contactmodel');


var port = process.env.PORT || 8080;  //for live public hosting
app.listen(port, function() {
  console.log('App listening at http://localhost:' + port);
});

app.get('/listReturn', function(req,res){
  ContactEntry.find().sort({lastName:1}).exec().then(function(returnedList){
    res.json(returnedList);
  });
});

app.get('/listReturn/byId/:id', function(req,res){
  var findMe = req.params.id;
  ContactEntry.find({_id:findMe}).exec().then(function(foundMe){
    res.json(foundMe);
  });
});

app.post('/listReturn', function(req,res){
  var newEntry = req.body;

  if(newEntry._id) {
    ContactEntry.findOneAndUpdate({_id:newEntry._id}, newEntry).exec().then(function(){
      res.json(true);
    });
  } else {
    var sendEntry = new ContactEntry(newEntry);
    sendEntry.save().then(function(){
      res.json(true);
    });
  }
});


app.delete('/listReturn/:id', function(req,res){
  var killMe = req.params.id;
  ContactEntry.findOneAndRemove({_id:killMe}).exec().then(function(){
    res.json(true);
  });
});



function initContactList() {
  return ContactEntry.count().then(function(count){
    if(count) return;

    var dummyList = [

      {
      firstName: "Genevieve",
      lastName: "Sellers",
      phone: "(562) 685-5202",
      email: "eu.nulla@lacusQuisque.com",
      image: "images/5.png"
      },
      {
      firstName: "Shaine",
      lastName: "Cherry",
      phone: "(891) 288-4323",
      email: "Vivamus.rhoncus.Donec@magnisdisparturient.edu",
      image: "images/6.png"
      },
      {
      firstName: "Buffy",
      lastName: "Pierce",
      phone: "(836) 912-5474",
      email: "blandit.viverra@parturientmontesnascetur.edu",
      image: "images/7.png"
      },
      {
      firstName: "Kaye",
      lastName: "Carlson",
      phone: "(512) 714-7883",
      email: "a.arcu@necmollisvitae.co.uk",
      image: "images/8.png"
      },
      {
      firstName: "Oliver",
      lastName: "Shields",
      phone: "(195) 839-6644",
      email: "hymenaeos@dis.edu",
      image: "images/9.png"
      },
      {
      firstName: "Phyllis",
      lastName: "Ashley",
      phone: "(499) 489-0014",
      email: "ultricies@egetmetuseu.net",
      image: "images/10.png"
      },
      {
      firstName: "Jamal",
      lastName: "Wilson",
      phone: "(657) 227-8536",
      email: "eget.lacus.Mauris@eterosProin.net",
      image: "images/11.png"
      },
      {
      firstName: "Hiram",
      lastName: "Holder",
      phone: "(223) 385-2814",
      email: "Curabitur@luctus.edu",
      image: "images/12.png"
      },
      {
      firstName: "Addison",
      lastName: "Barr",
      phone: "(229) 644-8333",
      email: "eros.nec.tellus@turpis.edu",
      image: "images/1.png"
      },
      {
      firstName: "Benjamin",
      lastName: "Stephens",
      phone: "(411) 817-1815",
      email: "ligula.Aenean@ullamcorper.com",
      image: "images/2.png"
      },
      {
      firstName: "Xyla",
      lastName: "Everett",
      phone: "(904) 836-8543",
      email: "natoque.penatibus.et@Nuncmauris.net",
      image: "images/3.png"
      },
      {
      firstName: "Colby",
      lastName: "Hester",
      phone: "(468) 245-7261",
      email: "posuere.cubilia@Vivamusnonlorem.ca",
      image: "images/4.png"
      },
      {
      firstName: "Joy",
      lastName: "Burris",
      phone: "(138) 555-2678",
      email: "lorem.ac.risus@nullaInteger.edu",
      image: "images/5.png"
      },
      {
      firstName: "Chastity",
      lastName: "Briggs",
      phone: "(475) 636-0318",
      email: "sem.semper@cubiliaCuraePhasellus.ca",
      image: "images/6.png"
      },
      {
      firstName: "Kenneth",
      lastName: "Williams",
      phone: "(929) 955-6258",
      email: "Quisque.purus.sapien@consectetuer.ca",
      image: "images/7.png"
      },
      {
      firstName: "Carter",
      lastName: "Craft",
      phone: "(679) 127-7962",
      email: "quam.a@necdiamDuis.ca",
      image: "images/8.png"
      },
      {
      firstName: "Harper",
      lastName: "Good",
      phone: "(260) 105-1048",
      email: "est.congue.a@Vestibulum.com",
      image: "images/9.png"
      },
      {
      firstName: "Nora",
      lastName: "Macdonald",
      phone: "(446) 538-8445",
      email: "sem.egestas.blandit@Phasellus.org",
      image: "images/10.png"
      },
      {
      firstName: "Lunea",
      lastName: "Pittman",
      phone: "(923) 798-6603",
      email: "ac.libero@Aliquameratvolutpat.com",
      image: "images/11.png"
      },
      {
      firstName: "Rae",
      lastName: "Vargas",
      phone: "(666) 237-9649",
      email: "nisl.elementum@ut.com",
      image: "images/12.png"
      },
      {
      firstName: "Hermione",
      lastName: "Walls",
      phone: "(485) 791-4559",
      email: "egestas.hendrerit@Maurisvel.com",
      image: "images/1.png"
      },
      {
      firstName: "Britanni",
      lastName: "Jarvis",
      phone: "(797) 547-3242",
      email: "ante.lectus.convallis@Nunc.com",
      image: "images/2.png"
      },
      {
      firstName: "Graham",
      lastName: "Mclaughlin",
      phone: "(587) 949-6238",
      email: "et.ipsum@lobortis.co.uk",
      image: "images/3.png"
      },
      {
      firstName: "Hannah",
      lastName: "Humphrey",
      phone: "(499) 285-2511",
      email: "ut@magnaet.org",
      image: "images/4.png"
      },
      {
      firstName: "Jerry",
      lastName: "Griffin",
      phone: "(413) 395-5898",
      email: "id.nunc@libero.co.uk",
      image: "images/1.png",
      street: "Ap #774-6097 Vel Rd.",
      city: "San Rafael",
      state: "Alajuela",
      postalCode: "54920"
      },
      {
      firstName: "Alfreda",
      lastName: "Frank",
      phone: "(482) 488-7650",
      email: "neque.Nullam.ut@Curabiturdictum.org",
      image: "images/2.png",
      street: "119-5167 Magna Street",
      city: "Issy-les-Moulineaux",
      state: "Île-de-France",
      postalCode: "62-109"
      },
      {
      firstName: "Kelly",
      lastName: "Berry",
      phone: "(927) 314-1517",
      email: "dictum.ultricies.ligula@varius.org",
      image: "images/3.png",
      street: "Ap #434-1814 A Avenue",
      city: "Carcassonne",
      state: "LA",
      postalCode: "52842"
      },
      {
      firstName: "Cameron",
      lastName: "Ratliff",
      phone: "(998) 672-1359",
      email: "imperdiet@odioa.net",
      image: "images/4.png",
      street: "566-7792 Sociis Ave",
      city: "Liverpool",
      state: "New South Wales",
      postalCode: "183063"
      },
      {
      firstName: "Wynter",
      lastName: "Wong",
      phone: "(726) 107-6672",
      email: "cursus.Nunc.mauris@Suspendisse.co.uk",
      image: "images/5.png",
      street: "Ap #104-9473 Parturient Road",
      city: "Tarsus",
      state: "Mer",
      postalCode: "737776"
      },
      {
      firstName: "Sydney",
      lastName: "Miranda",
      phone: "(592) 809-3310",
      email: "vel.lectus@quam.com",
      image: "images/6.png",
      street: "P.O. Box 880, 5825 Sem Ave",
      city: "Salem",
      state: "OR",
      postalCode: "5856"
      },
      {
      firstName: "Ursa",
      lastName: "Mcintyre",
      phone: "(613) 919-1597",
      email: "ornare@aliquetodioEtiam.edu",
      image: "images/7.png",
      street: "Ap #295-6747 Auctor Road",
      city: "Linton",
      state: "CA",
      postalCode: "61302"
      },
      {
      firstName: "Lila",
      lastName: "Glover",
      phone: "(582) 388-3232",
      email: "vel@sedfacilisisvitae.co.uk",
      image: "images/8.png",
      street: "P.O. Box 931, 9303 Vitae, Avenue",
      city: "San José de Alajuela",
      state: "A",
      postalCode: "8861"
      },
      {
      firstName: "Yardley",
      lastName: "Hampton",
      phone: "(756) 329-5347",
      email: "ac.fermentum@adipiscing.com",
      image: "images/9.png",
      street: "Ap #198-2500 Proin Rd.",
      city: "Harlingen",
      state: "Fr",
      postalCode: "2912"
      },
      {
      firstName: "Lillian",
      lastName: "Hoffman",
      phone: "(661) 867-6167",
      email: "pede.Praesent@egestasligulaNullam.ca",
      image: "images/10.png",
      street: "685-2666 Non, Street",
      city: "Cimitile",
      state: "Campania",
      postalCode: "K1G 1C3"
      },
      {
      firstName: "Scarlet",
      lastName: "Leonard",
      phone: "(418) 428-0001",
      email: "amet@Nullamnisl.ca",
      image: "images/11.png",
      street: "288-8689 Vel Road",
      city: "Rutland",
      state: "VT",
      postalCode: "04-451"
      },
      {
      firstName: "Mufutau",
      lastName: "Nicholson",
      phone: "(204) 676-1456",
      email: "fermentum.metus.Aenean@nisi.edu",
      image: "images/12.png",
      street: "949-5330 Faucibus Road",
      city: "Pirque",
      state: "RM",
      postalCode: "623393"
      },
      {
      firstName: "Isaac",
      lastName: "Fischer",
      phone: "(275) 113-6268",
      email: "tellus@consequatauctor.org",
      image: "images/1.png",
      street: "309-7642 Duis Road",
      city: "Lincoln",
      state: "Nebraska",
      postalCode: "88152"
      },
      {
      firstName: "Zachary",
      lastName: "Albert",
      phone: "(502) 241-2255",
      email: "nunc.In@In.org",
      image: "images/2.png",
      street: "Ap #754-6190 Mauris Avenue",
      city: "Owen Sound",
      state: "Ontario",
      postalCode: "40988"
      },
      {
      firstName: "Germaine",
      lastName: "Casey",
      phone: "(568) 564-0392",
      email: "Donec.feugiat@augueut.edu",
      image: "images/3.png",
      street: "Ap #687-8442 Elit, Road",
      city: "Orilla",
      state: "ON",
      postalCode: "6112"
      },
      {
      firstName: "Rhiannon",
      lastName: "Bryant",
      phone: "(485) 758-4518",
      email: "parturient.montes.nascetur@utodiovel.org",
      image: "images/4.png",
      street: "479-6852 Lacinia St.",
      city: "Blenheim",
      state: "South Island",
      postalCode: "01042"
      },
      {
      firstName: "Sophia",
      lastName: "Rocha",
      phone: "(284) 199-4423",
      email: "lorem.tristique.aliquet@estarcuac.org",
      image: "images/5.png",
      street: "P.O. Box 293, 8148 Ornare Rd.",
      city: "Bundaberg",
      state: "Queensland",
      postalCode: "627098"
      },
      {
      firstName: "Leandra",
      lastName: "Kline",
      phone: "(458) 104-3447",
      email: "Vivamus.non.lorem@variuseteuismod.org",
      image: "images/6.png",
      street: "Ap #724-136 Sit St.",
      city: "Henstedt-Ulzburg",
      state: "Saarland",
      postalCode: "36623"
      },
      {
      firstName: "Fallon",
      lastName: "Bender",
      phone: "(129) 124-8771",
      email: "Suspendisse.sed.dolor@infelis.edu",
      image: "images/7.png",
      street: "Ap #718-464 Venenatis Avenue",
      city: "Noisy-le-Grand",
      state: "Île-de-France",
      postalCode: "67953"
      },
      {
      firstName: "Reed",
      lastName: "Wilkerson",
      phone: "(124) 597-7196",
      email: "laoreet.libero@sociisnatoquepenatibus.com",
      image: "images/8.png",
      street: "Ap #793-8287 Pede Ave",
      city: "San Juan de Dios",
      state: "San José",
      postalCode: "494023"
      },
      {
      firstName: "Noelle",
      lastName: "Simmons",
      phone: "(838) 633-6613",
      email: "non@massaQuisqueporttitor.ca",
      image: "images/9.png",
      street: "628-6289 Nullam Rd.",
      city: "Pudahuel",
      state: "Metropolitana de Santiago",
      postalCode: "10773"
      },
      {
      firstName: "Astra",
      lastName: "Gonzales",
      phone: "(798) 719-6406",
      email: "neque.sed@mattisornarelectus.co.uk",
      image: "images/10.png",
      street: "356-1650 Venenatis Avenue",
      city: "Sprimont",
      state: "Luik",
      postalCode: "26-484"
      },
      {
      firstName: "Gabriel",
      lastName: "West",
      phone: "(386) 846-6481",
      email: "cursus@eleifendnon.ca",
      image: "images/11.png",
      street: "5337 Orci. Street",
      city: "Linköping",
      state: "E",
      postalCode: "1133QD"
      },
      {
      firstName: "Rafael",
      lastName: "Kirby",
      phone: "(946) 408-1158",
      email: "imperdiet.nec.leo@risusvarius.org",
      image: "images/12.png",
      street: "157-3076 A, Rd.",
      city: "Guadalajara",
      state: "Castilla - La Mancha",
      postalCode: "86955"
      },
      {
      firstName: "Scarlet",
      lastName: "Allison",
      phone: "(457) 516-4574",
      email: "sit.amet@senectus.org",
      image: "images/1.png",
      street: "Ap #938-8656 Sit Ave",
      city: "Newport News",
      state: "Virginia",
      postalCode: "40619"
      },
      {
      firstName: "Halee",
      lastName: "Flores",
      phone: "(484) 842-7746",
      email: "Duis.risus@nislsemconsequat.edu",
      image: "images/2.png",
      street: "646-7936 A Rd.",
      city: "Cornwall",
      state: "ON",
      postalCode: "592318"
      },
      {
      firstName: "Audrey",
      lastName: "Pittman",
      phone: "(915) 630-6428",
      email: "nec.ante@Aliquamadipiscinglobortis.ca",
      image: "images/3.png",
      street: "P.O. Box 993, 2543 Sit Rd.",
      city: "Guarulhos",
      state: "SP",
      postalCode: "325391"
      },
      {
      firstName: "Rose",
      lastName: "Hayes",
      phone: "(250) 977-9284",
      email: "lorem@feliseget.edu",
      image: "images/4.png",
      street: "8839 Rutrum Av.",
      city: "Sogliano Cavour",
      state: "PUG",
      postalCode: "P2P 2T6"
      },
      {
      firstName: "Evangeline",
      lastName: "Tillman",
      phone: "(122) 746-4192",
      email: "Duis@urna.org",
      image: "images/5.png",
      street: "Ap #334-7022 Eros. St.",
      city: "Grobbendonk",
      state: "AN",
      postalCode: "192101"
      },
      {
      firstName: "Jacob",
      lastName: "York",
      phone: "(111) 366-8726",
      email: "sollicitudin@Mauris.net",
      image: "images/6.png",
      street: "P.O. Box 613, 1709 Purus St.",
      city: "Guarapuava",
      state: "PR",
      postalCode: "37-596"
      },
      {
      firstName: "Thane",
      lastName: "David",
      phone: "(496) 522-2973",
      email: "nisl@tortornibhsit.org",
      image: "images/7.png",
      street: "848-2721 Congue, Street",
      city: "Dandenong",
      state: "Victoria",
      postalCode: "984833"
      },
      {
      firstName: "Juliet",
      lastName: "Russell",
      phone: "(894) 704-9251",
      email: "torquent@nequeSed.com",
      image: "images/8.png",
      street: "Ap #607-2716 Dictum St.",
      city: "Alviano",
      state: "UMB",
      postalCode: "4974"
      },
      {
      firstName: "Kylee",
      lastName: "Paul",
      phone: "(726) 308-8549",
      email: "ornare@lectus.com",
      image: "images/9.png",
      street: "551-3356 Semper Road",
      city: "Pironchamps",
      state: "HE",
      postalCode: "6212"
      },
      {
      firstName: "Harriet",
      lastName: "Henderson",
      phone: "(610) 603-3826",
      email: "auctor@Donecest.com",
      image: "images/10.png",
      street: "Ap #345-7762 Amet Rd.",
      city: "Forres",
      state: "Morayshire",
      postalCode: "36559"
      }
    ];


    dummyList.forEach(function(dummyEntry) {
      dummyEntry = new ContactEntry(dummyEntry);
      return dummyEntry.save();
    });
  });
}
initContactList();
