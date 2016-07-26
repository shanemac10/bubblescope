var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.Promise = Promise;
// mongoose.connect('mongodb://localhost/okcoders');
mongoose.connect('mongodb://okcoders:okcoders@okcoders.co/shane');

app.use(express.static('./public'));
app.use(bodyParser());

var ContactEntry = require('./models/contactmodel');

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


app.delete('/blogReturn/:id', function(req,res){
  var killMe = req.params.id;
  ContactEntry.findOneAndRemove({_id:killMe}).exec().then(function(){
    res.json(true);
  });
});

function initContactList() {
  return ContactEntry.count().then(function(count){
    if(count) return;

    var dummyList = [
      // {
      // "firstName": "Eliana",
      // "lastName": "Gallegos",
      // "phone": "(465) 507-2281",
      // "email": "bibendum.sed@ac.ca",
      // "image": "images/1.png"
      // },
      // {
      // "firstName": "Xyla",
      // "lastName": "Randall",
      // "phone": "(247) 482-5303",
      // "email": "Donec@neccursusa.org",
      // "image": "images/2.png"
      // },
      // {
      // "firstName": "Indira",
      // "lastName": "Robertson",
      // "phone": "(215) 560-0196",
      // "email": "egestas@Integermollis.com",
      // "image": "images/3.png"
      // },
      // {
      // "firstName": "Maile",
      // "lastName": "Green",
      // "phone": "(871) 936-5991",
      // "email": "lectus@temporerat.net",
      // "image": "images/4.png"
      // },
      // {
      // "firstName": "Alfonso",
      // "lastName": "Dunlap",
      // "phone": "(304) 546-1755",
      // "email": "non.leo.Vivamus@eutelluseu.ca",
      // "image": "images/5.png"
      // },
      // {
      // "firstName": "Abel",
      // "lastName": "Merritt",
      // "phone": "(251) 844-9372",
      // "email": "pellentesque@sem.org",
      // "image": "images/6.png"
      // },
      // {
      // "firstName": "Gay",
      // "lastName": "Moore",
      // "phone": "(414) 337-3312",
      // "email": "ante.ipsum.primis@dolorNullasemper.net",
      // "image": "images/7.png"
      // },
      // {
      // "firstName": "Fiona",
      // "lastName": "Hernandez",
      // "phone": "(927) 731-1029",
      // "email": "nunc.In.at@consectetuer.org",
      // "image": "images/8.png"
      // },
      // {
      // "firstName": "Colin",
      // "lastName": "Myers",
      // "phone": "(853) 364-0988",
      // "email": "aptent.taciti.sociosqu@odioAliquam.ca",
      // "image": "images/9.png"
      // },
      // {
      // "firstName": "Paki",
      // "lastName": "Ashley",
      // "phone": "(547) 864-4414",
      // "email": "Aliquam.tincidunt@morbitristique.co.uk",
      // "image": "images/10.png"
      // },
      // {
      // "firstName": "Hanae",
      // "lastName": "Conley",
      // "phone": "(724) 802-1849",
      // "email": "eget.odio@elitNulla.edu",
      // "image": "images/11.png"
      // },
      // {
      // "firstName": "August",
      // "lastName": "Russo",
      // "phone": "(907) 447-3038",
      // "email": "penatibus@acmattissemper.com",
      // "image": "images/12.png"
      // },
      // {
      // "firstName": "Pascale",
      // "lastName": "Ramirez",
      // "phone": "(640) 129-4998",
      // "email": "sem@dictumeu.edu",
      // "image": "images/1.png"
      // },
      // {
      // "firstName": "Chandler",
      // "lastName": "Fitzgerald",
      // "phone": "(349) 538-5634",
      // "email": "magna.tellus.faucibus@nectempusscelerisque.com",
      // "image": "images/2.png"
      // },
      // {
      // "firstName": "Mallory",
      // "lastName": "Robbins",
      // "phone": "(164) 347-4701",
      // "email": "non@lobortisClass.net",
      // "image": "images/3.png"
      // },
      // {
      // "firstName": "Denise",
      // "lastName": "Ratliff",
      // "phone": "(769) 680-4807",
      // "email": "felis@nisinibhlacinia.ca",
      // "image": "images/4.png"
      // },
      // {
      // "firstName": "Shay",
      // "lastName": "Barrera",
      // "phone": "(411) 511-5463",
      // "email": "urna.Nunc@consectetuer.edu",
      // "image": "images/5.png"
      // },
      // {
      // "firstName": "Diana",
      // "lastName": "Pollard",
      // "phone": "(634) 938-9213",
      // "email": "sodales.purus.in@malesuadamalesuada.com",
      // "image": "images/6.png"
      // },
      // {
      // "firstName": "Sade",
      // "lastName": "Lang",
      // "phone": "(325) 101-6942",
      // "email": "aliquam.eros.turpis@eu.edu",
      // "image": "images/7.png"
      // },
      // {
      // "firstName": "Nehru",
      // "lastName": "Hansen",
      // "phone": "(970) 951-5849",
      // "email": "dictum@magna.com",
      // "image": "images/8.png"
      // },
      // {
      // "firstName": "Petra",
      // "lastName": "Robbins",
      // "phone": "(298) 607-8680",
      // "email": "In.faucibus@velitAliquam.com",
      // "image": "images/9.png"
      // },
      // {
      // "firstName": "Conan",
      // "lastName": "Mcdaniel",
      // "phone": "(195) 239-6303",
      // "email": "elementum.sem.vitae@mauris.org",
      // "image": "images/10.png"
      // },
      // {
      // "firstName": "Kadeem",
      // "lastName": "Melton",
      // "phone": "(766) 220-9110",
      // "email": "nibh@tinciduntnibh.ca",
      // "image": "images/11.png"
      // },
      // {
      // "firstName": "Mira",
      // "lastName": "Franklin",
      // "phone": "(910) 457-2000",
      // "email": "mauris.a.nunc@vehiculaPellentesquetincidunt.net",
      // "image": "images/12.png"
      // },
      // {
      // "firstName": "Zena",
      // "lastName": "Raymond",
      // "phone": "(988) 881-6089",
      // "email": "blandit.enim@feugiatplaceratvelit.com",
      // "image": "images/1.png"
      // },
      // {
      // "firstName": "Amaya",
      // "lastName": "Steele",
      // "phone": "(650) 654-2052",
      // "email": "est@Fuscealiquet.ca",
      // "image": "images/2.png"
      // },
      // {
      // "firstName": "Laurel",
      // "lastName": "Donaldson",
      // "phone": "(109) 691-4857",
      // "email": "senectus.et@nullaCras.edu",
      // "image": "images/3.png"
      // },
      // {
      // "firstName": "Aimee",
      // "lastName": "Kaufman",
      // "phone": "(727) 569-3699",
      // "email": "Suspendisse.dui@varius.com",
      // "image": "images/4.png"
      // },
      // {
      // "firstName": "Danielle",
      // "lastName": "Warren",
      // "phone": "(420) 819-3975",
      // "email": "mus.Proin.vel@Etiambibendum.com",
      // "image": "images/5.png"
      // },
      // {
      // "firstName": "Taylor",
      // "lastName": "Cobb",
      // "phone": "(376) 553-9108",
      // "email": "blandit.congue@orciadipiscing.co.uk",
      // "image": "images/6.png"
      // },
      // {
      // "firstName": "Geoffrey",
      // "lastName": "Garner",
      // "phone": "(980) 919-8510",
      // "email": "congue@malesuadaid.co.uk",
      // "image": "images/7.png"
      // },
      // {
      // "firstName": "Merrill",
      // "lastName": "Barron",
      // "phone": "(365) 569-7287",
      // "email": "Donec@temporbibendumDonec.net",
      // "image": "images/8.png"
      // },
      // {
      // "firstName": "Fredericka",
      // "lastName": "Meyers",
      // "phone": "(241) 145-5067",
      // "email": "id@estcongue.org",
      // "image": "images/9.png"
      // },
      // {
      // "firstName": "Brady",
      // "lastName": "Hester",
      // "phone": "(601) 534-1551",
      // "email": "Suspendisse.commodo@euerat.org",
      // "image": "images/10.png"
      // },
      // {
      // "firstName": "Maia",
      // "lastName": "Powell",
      // "phone": "(174) 192-3354",
      // "email": "lorem.lorem.luctus@Suspendisse.net",
      // "image": "images/11.png"
      // },
      // {
      // "firstName": "Anjolie",
      // "lastName": "Mcconnell",
      // "phone": "(839) 440-0264",
      // "email": "dolor.nonummy@ut.ca",
      // "image": "images/12.png"
      // },
      // {
      // "firstName": "Gareth",
      // "lastName": "Mcfadden",
      // "phone": "(475) 812-3707",
      // "email": "non.leo@nisi.co.uk",
      // "image": "images/1.png"
      // },
      // {
      // "firstName": "Adara",
      // "lastName": "Travis",
      // "phone": "(892) 546-3972",
      // "email": "molestie@acmattis.org",
      // "image": "images/2.png"
      // },
      // {
      // "firstName": "Aretha",
      // "lastName": "Sexton",
      // "phone": "(203) 296-2881",
      // "email": "elit.pretium@lectuspedeultrices.co.uk",
      // "image": "images/3.png"
      // },
      // {
      // "firstName": "Edan",
      // "lastName": "Rush",
      // "phone": "(599) 471-9267",
      // "email": "et@fringilla.ca",
      // "image": "images/4.png"
      // },
      // {
      // "firstName": "Gay",
      // "lastName": "Barr",
      // "phone": "(213) 410-1711",
      // "email": "Nullam.nisl.Maecenas@seddolorFusce.edu",
      // "image": "images/5.png"
      // },
      // {
      // "firstName": "Harrison",
      // "lastName": "Crane",
      // "phone": "(460) 886-9320",
      // "email": "Curabitur@mollis.net",
      // "image": "images/6.png"
      // },
      // {
      // "firstName": "Yuri",
      // "lastName": "Church",
      // "phone": "(214) 253-7489",
      // "email": "rhoncus@gravidamolestie.net",
      // "image": "images/7.png"
      // },
      // {
      // "firstName": "Aiko",
      // "lastName": "Moses",
      // "phone": "(108) 486-9290",
      // "email": "Fusce@ac.ca",
      // "image": "images/8.png"
      // },
      // {
      // "firstName": "Germaine",
      // "lastName": "Lane",
      // "phone": "(965) 397-7159",
      // "email": "volutpat@Vestibulumaccumsanneque.org",
      // "image": "images/9.png"
      // },
      // {
      // "firstName": "Caldwell",
      // "lastName": "Watts",
      // "phone": "(909) 855-4363",
      // "email": "Pellentesque.ultricies@velitAliquam.com",
      // "image": "images/10.png"
      // },
      // {
      // "firstName": "Kimberly",
      // "lastName": "Romero",
      // "phone": "(783) 896-8186",
      // "email": "cursus.purus.Nullam@aliquamenim.co.uk",
      // "image": "images/11.png"
      // },
      // {
      // "firstName": "Shelly",
      // "lastName": "Little",
      // "phone": "(577) 159-5752",
      // "email": "enim.non.nisi@ligulaAenean.com",
      // "image": "images/12.png"
      // },
      // {
      // "firstName": "Maia",
      // "lastName": "Jarvis",
      // "phone": "(725) 513-1572",
      // "email": "Aenean@ultriciesadipiscing.net",
      // "image": "images/1.png"
      // },
      // {
      // "firstName": "Reagan",
      // "lastName": "Hodge",
      // "phone": "(817) 495-5391",
      // "email": "dis.parturient@quamdignissimpharetra.org",
      // "image": "images/2.png"
      // },
      // {
      // "firstName": "Jared",
      // "lastName": "Shepard",
      // "phone": "(151) 490-0615",
      // "email": "vitae.odio@sit.co.uk",
      // "image": "images/3.png"
      // },
      // {
      // "firstName": "Eaton",
      // "lastName": "Hancock",
      // "phone": "(616) 911-3641",
      // "email": "diam.eu.dolor@disparturient.com",
      // "image": "images/4.png"
      // },
      // {
      // "firstName": "Ella",
      // "lastName": "Acevedo",
      // "phone": "(193) 293-8651",
      // "email": "amet.luctus.vulputate@temporeratneque.edu",
      // "image": "images/5.png"
      // },
      // {
      // "firstName": "Kendall",
      // "lastName": "Combs",
      // "phone": "(828) 787-6213",
      // "email": "Morbi.neque@duiFuscealiquam.com",
      // "image": "images/6.png"
      // },
      // {
      // "firstName": "Rachel",
      // "lastName": "Lopez",
      // "phone": "(114) 114-2458",
      // "email": "Aliquam.auctor.velit@acturpisegestas.org",
      // "image": "images/7.png"
      // },
      // {
      // "firstName": "Florence",
      // "lastName": "Roberts",
      // "phone": "(962) 816-0018",
      // "email": "volutpat.ornare@rutrummagna.co.uk",
      // "image": "images/8.png"
      // },
      // {
      // "firstName": "Martin",
      // "lastName": "Lester",
      // "phone": "(771) 690-2230",
      // "email": "fermentum@enimconsequat.edu",
      // "image": "images/9.png"
      // },
      // {
      // "firstName": "Hayley",
      // "lastName": "Ward",
      // "phone": "(208) 339-2363",
      // "email": "leo.in.lobortis@metus.org",
      // "image": "images/10.png"
      // },
      // {
      // "firstName": "Giselle",
      // "lastName": "Berger",
      // "phone": "(744) 910-9958",
      // "email": "faucibus.lectus@adlitora.edu",
      // "image": "images/11.png"
      // },
      // {
      // "firstName": "Abdul",
      // "lastName": "Shepherd",
      // "phone": "(349) 538-3741",
      // "email": "a.scelerisque.sed@Etiamligula.edu",
      // "image": "images/12.png"
      // },
      // {
      // "firstName": "Libby",
      // "lastName": "Sweeney",
      // "phone": "(951) 119-0735",
      // "email": "a.sollicitudin.orci@vel.edu",
      // "image": "images/1.png"
      // },
      // {
      // "firstName": "Robert",
      // "lastName": "Griffin",
      // "phone": "(656) 798-5988",
      // "email": "non.leo@Intincidunt.org",
      // "image": "images/2.png"
      // },
      // {
      // "firstName": "Samantha",
      // "lastName": "Wiggins",
      // "phone": "(370) 853-0197",
      // "email": "aliquam.eros@vitaealiquet.net",
      // "image": "images/3.png"
      // },
      // {
      // "firstName": "Sylvia",
      // "lastName": "Page",
      // "phone": "(824) 921-3172",
      // "email": "non@Cumsociis.co.uk",
      // "image": "images/4.png"
      // },
      // {
      // "firstName": "Quinn",
      // "lastName": "Tucker",
      // "phone": "(615) 978-7196",
      // "email": "Nulla.aliquet@Nulladignissim.net",
      // "image": "images/5.png"
      // },
      // {
      // "firstName": "Destiny",
      // "lastName": "Lambert",
      // "phone": "(463) 199-4727",
      // "email": "aliquet.molestie@convallisest.net",
      // "image": "images/6.png"
      // },
      // {
      // "firstName": "Ishmael",
      // "lastName": "Daniel",
      // "phone": "(298) 692-6459",
      // "email": "pede.Nunc@metus.org",
      // "image": "images/7.png"
      // },
      // {
      // "firstName": "Nita",
      // "lastName": "Rocha",
      // "phone": "(948) 978-1140",
      // "email": "mauris.eu.elit@euligulaAenean.edu",
      // "image": "images/8.png"
      // },
      // {
      // "firstName": "Grady",
      // "lastName": "Montoya",
      // "phone": "(425) 372-6598",
      // "email": "elit.Aliquam@nonummyFusce.edu",
      // "image": "images/9.png"
      // },
      // {
      // "firstName": "Stewart",
      // "lastName": "Byers",
      // "phone": "(480) 979-2868",
      // "email": "ac@orci.org",
      // "image": "images/10.png"
      // },
      // {
      // "firstName": "Tanek",
      // "lastName": "Mcintyre",
      // "phone": "(124) 595-2776",
      // "email": "dolor@mauriselit.net",
      // "image": "images/11.png"
      // },
      // {
      // "firstName": "Yoko",
      // "lastName": "Cobb",
      // "phone": "(585) 975-7562",
      // "email": "tristique.ac@a.co.uk",
      // "image": "images/12.png"
      // },
      // {
      // "firstName": "Reece",
      // "lastName": "Hurley",
      // "phone": "(917) 609-8634",
      // "email": "vel.venenatis.vel@fringilla.com",
      // "image": "images/1.png"
      // },
      // {
      // "firstName": "Xyla",
      // "lastName": "Hanson",
      // "phone": "(282) 417-8765",
      // "email": "et.malesuada.fames@auctorvitae.net",
      // "image": "images/2.png"
      // },
      // {
      // "firstName": "Jennifer",
      // "lastName": "Parrish",
      // "phone": "(741) 869-4031",
      // "email": "tellus@aliquet.org",
      // "image": "images/3.png"
      // },
      // {
      // "firstName": "Mona",
      // "lastName": "Gilliam",
      // "phone": "(744) 113-5000",
      // "email": "Donec@infaucibusorci.org",
      // "image": "images/4.png"
      // },
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
      }
    ];


    dummyList.forEach(function(dummyEntry) {
      dummyEntry = new ContactEntry(dummyEntry);
      return dummyEntry.save();
    });
  });
}
initContactList();

app.listen(8080, function() {
  console.log('App listening at http://localhost:8080');
});
